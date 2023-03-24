let Menubtn = document.getElementById("Menubtn");
Menubtn.addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("mobile-nav-active"),
        this.classList.toggle("fa-xmark")
});
let typed = new Typed(".auto-input", {
    strings: ["a Business Owner", "a Junior UI Designer.", "a Learner.", "Single."],
    typeSpeed: 100, backSpeed: 100, backDelay: 2e3, loop: !0
}),
    number = document.getElementById("number"), counter = 0;
setInterval(() => {
    55 == counter ? clearInterval() :
        (counter += 1, number.innerHTML = counter + " %")
}, 28);
let number2 = document.getElementById("number2"),
    counter2 = 0; setInterval(() => {
        45 == counter2 ? clearInterval() :
        (counter2 += 1, number2.innerHTML = counter2 + " %")
    }, 26);
let number3 = document.getElementById("number3"), counter3 = 0;
setInterval(() => {
    45 == counter3 ? clearInterval() :
    (counter3 += 1, number3.innerHTML = counter3 + " %")
}, 26);
let number4 = document.getElementById("number4"), counter4 = 0;
setInterval(() => {
    67 == counter4 ? clearInterval() :
    (counter4 += 1, number4.innerHTML = counter4 + " %")
}, 15);