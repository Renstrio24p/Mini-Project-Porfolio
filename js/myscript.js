 let Menubtn = document.getElementById('Menubtn')
 
Menubtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

/** Typing Effect */

let typed = new Typed('.auto-input', {
    strings: ['a Business Owner','a Junior UI Designer.','a Learner.','Single.'],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay:  2000,
    loop: true,
})
