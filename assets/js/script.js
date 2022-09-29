// display navbar when scrolling up; hide navbar when scrolling down
document.addEventListener("DOMContentLoaded", function(){
    const autoHideEl = document.querySelector('.auto-hide');
  
    if (autoHideEl) {
        var lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            let scrollTop = window.scrollY;

            if (scrollTop < lastScrollTop) {
                autoHideEl.classList.remove('scroll-down');
                autoHideEl.classList.add('scroll-up');
                autoHideEl.classList.add('navbar-fixed');
            } else {
                autoHideEl.classList.remove('scroll-up');
                autoHideEl.classList.remove('navbar-fixed');
                autoHideEl.classList.add('scroll-down');
            }
            
            lastScrollTop = scrollTop;
        });
    };
}); 

function lightMode() {
    // toggle between light & dark mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;

        element.classList.toggle('light-mode');
    })
};

lightMode();