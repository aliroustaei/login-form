//----------- Preloader

const Preloader = document.getElementById('Preloader');

window.addEventListener('load', () => {

    Preloader.style.display = 'none';
})

//------------ login & register

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var b = document.querySelector(".toggle-btn1");
var c = document.querySelector(".toggle-btn2");

function register() {
    x.style.left = "450px";
    y.style.left = "3rem";
    z.style.left = "110px";
    b.style.color = "#fff";
    c.style.color = "#111";
}

function login() {
    x.style.left = "3rem";
    y.style.left = "450px";
    z.style.left = "0px";
    b.style.color = "#111";
    c.style.color = "#fff";
}

//----------------- valid form

const form = document.getElementById("register");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (userValue === '') {
        setErrorFor(user, 'نام کاربری نمی تواند خالی باشد');
    } else {
        setSuccessFor(user);
    };

    if (emailValue === '') {
        setErrorFor(email, 'ایمیل نباید خالی باشد');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'ایمیل معتبر نیست');
    } else {
        setSuccessFor(email);
    };

    if (passwordValue === '') {
        setErrorFor(password, 'لطفا پسورد را وارد کنید');
    } else {
        setSuccessFor(password);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add("error");
    small.innerText = message;
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
