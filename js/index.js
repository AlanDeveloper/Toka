const divDesktop = document.querySelector('.desktop');
let check = document.querySelector('#check');
let close = document.querySelector('.close');
let mb = document.querySelector('#mb');
let div = document.createElement('div');
div.setAttribute('id', 'opacity');

check.addEventListener('click', function (e) {
    e.preventDefault();
    div.style.width = window.innerWidth + 'px';
    div.style.height =  window.innerHeight + 'px';
    mb.classList.toggle('open');
    check.style.transition = '0.4s';
    document.body.appendChild(div);
    mb.style.zIndex = '10';
    document.querySelector('body').style.overflow = 'hidden';
    e.stopPropagation();
});
close.addEventListener('click', function () {
    document.body.removeChild(div);
    mb.classList.remove('open');
    document.querySelector('body').style.overflow = 'auto';
    check.style.opacity = 0;
});
div.addEventListener('click', function () {
    document.body.removeChild(div);
    mb.classList.remove('open');
    document.querySelector('body').style.overflow = 'auto';
    check.style.opacity = 0;
});
// document.querySelector('#serch').addEventListener('click', function () {check.disabled = true;});
// document.querySelector('.main').addEventListener('click', function () {check.disabled = false;});