 let Menubtn = document.getElementById('Menubtn')
 
Menubtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

/** Typing Effect */

let typed = new Typed('.auto-input', {
    strings: ['a Business Owner','a Junior UI Designer.','a Learner.','Single.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:  2000,
    loop: true,
})

/* Donut Chart */

let number = document.getElementById("number");
let counter = 0;

setInterval(() => {

    if(counter == 55) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + " %";
    }
},28);

let number2 = document.getElementById("number2");
let counter2 = 0;

setInterval(() => {

    if(counter2 == 45) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + " %";
    }
},26);
let number3 = document.getElementById("number3");
let counter3 = 0;

setInterval(() => {

    if(counter3 == 45) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + " %";
    }
},26);
let number4 = document.getElementById("number4");
let counter4 = 0;

setInterval(() => {

    if(counter4 == 67) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + " %";
    }
},15);
