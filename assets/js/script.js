$(document).ready(function() {
    // sticky navigation menu
    let navOffset = $('.header').height() + 50;

    function fixedNavbar() {
        if ($('.header').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= navOffset) {
                    $('.header .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header .main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    fixedNavbar();

});

const siteMain = document.querySelector('.site-main');
const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.side-menu');
const sectBtn = document.querySelectorAll('.icon-menu');

function pageTransitions() {
    // create active class for side-menu button click
    // for (let i = 0; i < sectBtn.length; i++) {
    //     sectBtn[i].addEventListener('click', function() {
    //         let currentBtn = document.querySelectorAll('.active-btn');

    //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         this.className += ' active-btn';
    //     })
    // }

    // activate sections
    // siteMain.addEventListener('click', (e) => {
    //     const id = e.target.dataset.id;

    //     if (id) {
    //         // add 'active' class to target button
    //         sectionBtns.forEach(btn => {
    //             btn.classList.remove('active');
    //         })
    //         e.target.classList.add('active');

    //         // hide other sections
    //         sections.forEach((section) => {
    //             section.classList.remove('active');
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })

    // toggle between light & dark mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;

        element.classList.toggle('light-mode');
    })
};

pageTransitions();