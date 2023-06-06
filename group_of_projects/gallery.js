let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let container = document.querySelector('.container');


btnclose.onclick = function(){
    container.classList.add('hide');
    btnclose.classList.add('hide');
    btnopen.classList.remove('hide');
}

btnopen.onclick = function(){
    container.classList.remove('hide');
    btnclose.classList.remove('hide');
    btnopen.classList.add('hide');
}