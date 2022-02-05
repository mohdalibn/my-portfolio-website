
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'), 
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
/* This code was copied from Bedimcode's github - restaurant website  */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('.skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    // for(i = 0; i < skillsContent.length; i++){
    //     skillsContent[i].className = 'skills__content skills__close'
    // }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
        this.style.borderBottom = "var(--skills-border-bottom)";
    }
    else{
        this.parentNode.className = 'skills__content skills__close';
        this.style.borderBottom = "none";
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

//  Script for Academics & Work Part
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset['target'])

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
})
)

//  Script for Certifications & Awards Part
const newtabs = document.querySelectorAll('[data-targettwo]'), newtabContents = document.querySelectorAll('[data-content-two]')

newtabs.forEach((tab =>{
    tab.addEventListener('click', () =>{
        const newtarget = document.querySelector(tab.dataset['targettwo'])

        newtabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active__two')
        })
        newtarget.classList.add('qualification__active__two')

        newtabs.forEach(tab =>{
            tab.classList.remove('qualification__active__two')
        })
        tab.classList.add('qualification__active__two')

    })
})
)



/*==================== SERVICES MODAL ====================*/
const modelViews = document.querySelectorAll('.services__model'),
modelBtns = document.querySelectorAll('.services__button'),
modelCloses = document.querySelectorAll('.services__model-close')


let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn, i) =>{
    modelBtn.addEventListener('click', () =>{
        model(i)
        //  the line below prevents scrolling when the service is open
        document.getElementById('htmlid').style.overflowY='hidden'
    })
})

// Code for closing the services using the cross mark on the top right
modelCloses.forEach((modelClose) =>{
    modelClose.addEventListener('click', () =>{
        modelViews.forEach((modelView) =>{
            modelView.classList.remove('active-model')
             //  the line below allows scrolling again when the service is closed
            document.getElementById('htmlid').style.overflowY='visible'
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // mousewheel: true,
    // keyboard: true,
});



document.querySelectorAll('.portfolio__button').forEach(vid => {
    vid.onclick = () =>{
        var video = document.querySelector('.video__container');
        video.classList.add("active__video");
        document.querySelector('.video__container video').src = vid.getAttribute("src");
        document.querySelector('.video__container .video__title').innerHTML = vid.getAttribute("name");
        document.getElementById('htmlid').style.overflowY='hidden';
    }
})

document.querySelectorAll('.video__close').forEach(newvid => {
    newvid.onclick = () =>{
        var newvideo = document.querySelector('.video__container');
        newvideo.classList.remove("active__video");
        document.querySelector('.video__container video').src = newvid.getAttribute("src");
        document.getElementById('htmlid').style.overflowY='visible';
    }
})

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 75) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

// TO RESET THE LOCAL STORAGE, UNCOMMENT THE 2 LINES BELOW AND COMMENT ALL THE CODE FOR DARK/LIGHT MODE ONCE.
// localStorage.removeItem('selected-theme')
// localStorage.removeItem('selected-icon')

const themeButton = document.getElementById('theme-toggle')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// These 2 lines activates darkmode so that the default mode is DarkMode
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    trans() // delay function call
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Code for the animated delay of change from light mode to dark or vice versa.
let trans = () =>{
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


// Contact Form Submission Script Using Formspree AJAX API
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)



/*==================== COUNTER SCRIPT ANIMATION ====================*/
// Counter script
// $(document).ready(function(){
//     $(".counter__number").counterUp({
//         delay: 10,
//         time: 1400
//     });
// });


$(document).ready(function(){
    $('.test-container').owlCarousel({
        loop:true,
        margin: 10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: false
});

// Landing/Home Page Animations
sr.reveal(`.home__img`,{origin: 'left', delay: 50})
sr.reveal(`.home__hi`,{origin: 'top', delay: 100})
sr.reveal(`.home__title__fullname`,{origin: 'top', delay: 200})
sr.reveal(`.home__subtitle`,{origin: 'top', delay: 300})
sr.reveal(`.home__description`,{origin: 'top', delay: 400})
sr.reveal(`.home__contact__button`,{origin: 'top', delay: 500})
sr.reveal(`.home__scroll`,{origin: 'top', delay: 600})
sr.reveal(`.home__social-icon`,{origin: 'left', interval: 100, delay: 500})

// sr.reveal(`.home__img`,{origin: 'left', delay: 2950})
// sr.reveal(`.home__hi`,{origin: 'top', delay: 3000})
// sr.reveal(`.home__title__fullname`,{origin: 'top', delay: 3100})
// sr.reveal(`.home__subtitle`,{origin: 'top', delay: 3200})
// sr.reveal(`.home__description`,{origin: 'top', delay: 3300})
// sr.reveal(`.home__contact__button`,{origin: 'top', delay: 3400})
// sr.reveal(`.home__scroll`,{origin: 'top', delay: 3500})
// sr.reveal(`.home__social-icon`,{origin: 'left', interval: 100, delay: 3400})

// Section Title & Subtitle Animations
sr.reveal(`.section__title`,{origin: 'top'})
sr.reveal(`.section__subtitle`,{origin: 'top', delay: 50})

// About Page Animations
sr.reveal(`.about__description`,{origin: 'right', delay: 100})
sr.reveal(`.about__img`,{origin: 'left', delay: 200})
sr.reveal(`.about__info-title`,{origin: 'top',interval: 100, delay: 200})
sr.reveal(`.about__info-name`,{origin: 'top',interval: 100, delay: 250})
sr.reveal(`.download__button`,{origin: 'left', delay: 300})

// Skills Page Animations
sr.reveal(`.skills__single`,{origin: 'left',interval: 200})

// Qualification Page Animations
sr.reveal(`.qualification__box__one`,{origin: 'left'})
sr.reveal(`.qualification__box__two`,{origin: 'left', delay: 100})
sr.reveal(`.qualification__sections`,{origin: 'top',interval: 200})

// Services Page Animations
// sr.reveal(`.services__content, .services__model`,{origin: 'left',interval: 100})

// Porfolio Page Animations
sr.reveal(`.porfolio__subheadtitle`,{origin: 'left',interval: 100})
sr.reveal(`.porfolio__single`,{origin: 'left',interval: 100})

// Contact Page Animations
sr.reveal(`.contact__partone`,{origin: 'left'})
sr.reveal(`.contact__form`,{origin: 'right', delay: 200})

// Footer Animations
sr.reveal(`.footer__container`,{origin: 'bottom'})
// sr.reveal(`.footer__copy`,{origin: 'left'})



// Sript for Disabling contextmenu/inspect element
document.addEventListener("contextmenu", function(HideInspectElement){
    HideInspectElement.preventDefault();
});

