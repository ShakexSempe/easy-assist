// ********** VARIABLES ************
// NAV LINKS
const linksContainer = document.querySelector('[links-container]');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.header .nav-list ul li');
const progressBarStyle = document.querySelector('.progress-bar');
const bottomNav = document.querySelector('.bottom-nav');
// HAMBURGER MENU
const hamburger = document.querySelector('.header #nav .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #nav .nav-list .links-container');
const menu_item = document.querySelectorAll('.header #nav .nav-list ul li a');
const header = document.querySelector('header');
const navLogo = document.querySelector('.logo');
// console.log(navLogo);

/*  FOOTER DATE*/
const date = document.querySelectorAll('.date');
date.forEach(date => {
  date.innerHTML = new Date().getFullYear();
});

// ********** END OF VARIABLES ************
// ACTIVE PAGE CLASS TOGGLE
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.scroll-li');
console.log(activePage);



// navLinks.forEach(link => {
//   if(link.href.includes(`${activePage}`)){
//     link.classList.add('active');
//   }
// });




// INTERSECTION OBSERVERS

// ********** HERO SECTION INTERSECTION OBSERVER ************
const hero = document.getElementById('home');
const heroOptions = {
  rootMargin: '-30% 0px 0px 0px',
}
const heroObserver = new IntersectionObserver(
  function(
      entries, heroObserver
  ) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              header.classList.remove("hero-header");
              console.log("HERO NOT IO");
          } else {
              header.classList.add("hero-header");
              console.log("HERO IS IO");
          }
      });
  }, heroOptions
); 
heroObserver.observe(hero);

// ********** MAIN SECTION INTERSECTION OBSERVER ************
const main = document.getElementById('main');
const mainOptions = {
    rootMargin: "0px 0px -70% 0px"
};
const mainObserver = new IntersectionObserver(
  function(
      entries, mainObserver
  ) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              // header.style.backgroundColor = "red";
              header.classList.remove("header-io");
              hamburger.classList.add("no-pulse");
              // topLink.classList.remove('show-link');
              progressBarStyle.classList.remove('active-bar');
              bottomNav.classList.remove("active-bottom-nav");
            
              console.log("MAIN NOT IO");
          } else {
              header.classList.add("header-io");
              hamburger.classList.remove("no-pulse");
              console.log("MAIN IS IO");
              progressBarStyle.classList.add('active-bar');
              // topLink.classList.add('show-link');
              bottomNav.classList.add("active-bottom-nav");
            
          }
      });
  }, mainOptions
);
mainObserver.observe(main);

// ********** ITEM INTERSECTION OBSERVER ************
const item = document.querySelectorAll('.io-item');
const itemOptions = {
  rootMargin: '0% 0px -20% 0px',
}

item.forEach(item => {
  const itemObserver = new IntersectionObserver(
    function(entries, itemObserver){
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          console.log('Entry NOT io');
          item.classList.remove("active-item");
        } else {
          console.log("Entry IS io");
          item.classList.add("active-item");
        }
      })
    }, itemOptions
  );

  itemObserver.observe(item);
});


// ********** EVENT LISTENERS ************

// HAMBURGER SELECT
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
  if(!header.classList.contains("header-io")){
    header.classList.add("header-io");
  }
  header.classList.toggle("active-header");
});
//  REMOVE HAMBURGER AFTER CLICK 
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
    header.classList.remove("active-header");
  });
});
// NAV LOGO CLICK
navLogo.addEventListener("click", () => {
  hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
    header.classList.remove("active-header");
})
//  PROGRESS BAR
//  When the user scrolls the page, execute myFunction
window.onscroll = function () {
  progressBar()
};
/*  end of progress bar*/

// ********** END OF EVENT LISTENERS ************

// ********** FUNCTIONS ************
// page progress bar
progressBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// end of page progress bar


// ********** END OF FUNCTIONS ************

