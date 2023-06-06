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
// /////////////////////////////

let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.onkeyup = function(){
    pound.value = (dollar.value * 30.90).toFixed(2) ;
}

pound.onkeyup = function(){
    dollar.value = (pound.value / 23.80).toFixed(2) ;

}

// focus
window.onload = function(){
    dollar.focus();
}

// del value
dollar.onclick = function(){
    dollar.value = delete(dollar.value);
}

pound.onclick = function(){
    pound.value = delete(pound.value);
}