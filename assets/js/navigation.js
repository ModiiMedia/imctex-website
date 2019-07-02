const mainHeader = document.getElementById('main-header')

changeNavStyle();

window.onscroll = function() {
    changeNavStyle();
}

function changeNavStyle() {
    if(window.pageYOffset > 0) {
        mainHeader.classList.add('scrolled')
    } else {
        mainHeader.classList.remove('scrolled')
    }
}