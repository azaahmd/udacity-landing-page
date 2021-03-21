/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 /* 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let myUL = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
sections.forEach(section=> {
let a = document.createElement('a'); 
let title = section.getAttribute("data-nav");
a.innerHTML = title;
let sectionId = section.getAttribute("id");
a.setAttribute("href",  "#"+ sectionId);
let listItem = document.createElement('li').appendChild(a); 
fragment.appendChild(listItem);
});
myUL.appendChild(fragment);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Scroll to anchor ID using scrollTO event




// Set sections as active
function isElementOnViewport(element){
    let topOffset = element.getBoundingClientRect().top;
    return topOffset < 200 && topOffset >= 0 ;
};

function toggleActiveState(){
    sections.forEach(section=> {
        section.classList.remove("your-active-class");
        if(isElementOnViewport(section)){
            section.classList.add("your-active-class");
        }
        });
}

window.addEventListener("scroll", toggleActiveState); 


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click
function scrollToSection(event){
   event.preventDefault();
   let clickedSectionId = event.target.getAttribute('href').replace('#','');
   let selectedSection = document.getElementById(clickedSectionId);
   selectedSection.scrollIntoView({behavior: "smooth", block: "center"});
};

let navLinks = document.querySelectorAll('.navbar__menu a');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', scrollToSection);
});













//this below is to use IntersectionObserver // i prerere to see it later no time now 
//function IntersectionObserver(entries){
//     if(!!window.IntersectionObserver){
//         let IntersectionObserver = new IntersectionObserver((entries, observer) => { 
//             entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 console.log(entry);
//                 entry.target.src = entry.target.dataset.src;
//                 observer.unobserve(entry.target);
//             }
//             });
//         }, {threshold: 1.0});
//     }
//     else document.querySelector('#warning').style.display = 'block'; 
// }
