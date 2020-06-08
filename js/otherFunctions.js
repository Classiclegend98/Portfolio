window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function toggle() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
}
