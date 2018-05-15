let check = document.querySelector('#check');
let close = document.querySelector('.close');
let mb = document.querySelector('#mb');

check.addEventListener('click', function (e) {
    mb.classList.toggle('open');
    check.style.transition = '0.4s';
    mb.style.zIndex = '10';
    document.querySelector('body').style.overflow = 'hidden';
    e.stopPropagation();
});
close.addEventListener('click', function () {
    mb.classList.remove('open');
    document.querySelector('body').style.overflow = 'auto';
    check.style.opacity = 0;
});
// document.querySelector('#serch').addEventListener('click', function () {check.disabled = true;});
// document.querySelector('.main').addEventListener('click', function () {check.disabled = false;});