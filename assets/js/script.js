const siteMain = document.querySelector('.main-site');
const section = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('menu');
const sectBtn = document.querySelectorAll('.menu');

function pageTransitions() {
    // button click - active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');

            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
};
pageTransitions();