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


// function validate() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
//     var errorMessage = document.getElementById("errorMessage");

//     errorMessage.style.padding = "10px";

//     var text;
//     if (name.length < 3) {
//         text = "Please Enter valid Name";
//         errorMessage.innerHTML = text;
//         return false;
//     }
//     if (subject.length < 5) {
//         text = "Please Enter Correct Subject";
//         errorMessage.innerHTML = text;
//         return false;
//     }
//     if (email.indexOf("@") == -1 || email.length < 6) {
//         text = "Please Enter valid Email";
//         errorMessage.innerHTML = text;
//         return false;
//     }
//     if (message.length <= 100) {
//         text = "Please Enter More Than 100 Characters";
//         errorMessage.innerHTML = text;
//         return false;
//     }
//     alert("Form Submitted Successfully!");
//     return true;
// }

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
        if (message.length <= 100) {
            event.preventDefault()
            text = "Please Enter More Than 100 Characters";
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