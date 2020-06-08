/* Scroll to top option appearing when scroll down */

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

/* Changing theme */

function toggle() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
}


/* Redirected form to my personal email address */

$(document).ready(function () {
    $('.submit').click(function (event) {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let errorMessage = document.getElementById("errorMessage");

        errorMessage.style.padding = "10px";

        let text;

        if (name.length < 3) {
            event.preventDefault();
            text = "Please Enter valid Name";
            errorMessage.innerHTML = text;
            return false;
        }
        if (subject.length < 3) {
            event.preventDefault()
            text = "Please Enter Correct Subject";
            errorMessage.innerHTML = text;
            return false;
        }
        if (email.indexOf("@") == -1 || email.length < 6) {
            event.preventDefault()
            text = "Please Enter valid Email";
            errorMessage.innerHTML = text;
            return false;
        }
        if (message.length <= 50) {
            event.preventDefault()
            text = "Please insert not less than 50 Characters as message";
            errorMessage.innerHTML = text;
            return false;
        }
        else {
            alert("Form Submitted Successfully!");
            errorMessage.style.display = "none";
            return true;
        }
    })
})