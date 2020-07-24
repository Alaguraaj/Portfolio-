var modal1 = document.getElementById('simplemodal1');

var modelbtn1 = document.getElementById('modalbtn1');

var closebtn1 = document.getElementsByClassName('modal-close')[0];

modelbtn1.addEventListener('click', openModal1);

closebtn1.addEventListener('click', closeModal1);

window.addEventListener('click', clickoutside1);

function openModal1() {
    modal1.style.display = 'block';
};


function closeModal1() {
    modal1.style.display = 'none';    
};

function clickoutside1(e) {
if(e.target == modal1){
    modal1.style.display = 'none';
}    
};

/** 2**/
var modal2 = document.getElementById('simplemodal2');

var modelbtn2 = document.getElementById('modalbtn2');

var closebtn2 = document.getElementsByClassName('modal-close')[1];

modelbtn2.addEventListener('click', openModal2);

closebtn2.addEventListener('click', closeModal2);

window.addEventListener('click', clickoutside2);

function openModal2() {
    modal2.style.display = 'block';
};

function closeModal2() {
    modal2.style.display = 'none';    
};

function clickoutside2(e) {
if(e.target == modal2){
    modal2.style.display = 'none';
}    
};

/** */
/* 3*/
var modal3 = document.getElementById('simplemodal3');

var modelbtn = document.getElementById('modalbtn3');

var closebtn = document.getElementsByClassName('modal-close')[2];

modelbtn.addEventListener('click', openModal3);

closebtn.addEventListener('click', closeModal3);

window.addEventListener('click', clickoutside3);

function openModal3() {
    modal3.style.display = 'block';
}


function closeModal3() {
    modal3.style.display = 'none';    
}

function clickoutside3(e) {
if(e.target == modal3){
    modal3.style.display = 'none';
}    
}

/* 4 */
var modal4 = document.getElementById('simplemodal4');

var modelbtn = document.getElementById('modalbtn4');

var closebtn = document.getElementsByClassName('modal-close')[3];

modelbtn.addEventListener('click', openModal4);

closebtn.addEventListener('click', closeModal4);

window.addEventListener('click', clickoutside4);

function openModal4() {
    modal4.style.display = 'block';
}


function closeModal4() {
    modal4.style.display = 'none';    
}

function clickoutside4(e) {
if(e.target == modal4){
    modal4.style.display = 'none';
}    
}

/* 5 */
var modal5 = document.getElementById('simplemodal5');

var modelbtn = document.getElementById('modalbtn5');

var closebtn = document.getElementsByClassName('modal-close')[4];

modelbtn.addEventListener('click', openModal5);

closebtn.addEventListener('click', closeModal5);

window.addEventListener('click', clickoutside5);

function openModal5() {
    modal5.style.display = 'block';
}


function closeModal5() {
    modal5.style.display = 'none';    
}

function clickoutside5(e) {
if(e.target == modal5){
    modal5.style.display = 'none';
}    
}

/* 6 */
var modal6 = document.getElementById('simplemodal6');

var modelbtn = document.getElementById('modalbtn6');

var closebtn = document.getElementsByClassName('modal-close')[5];

modelbtn.addEventListener('click', openModal6);

closebtn.addEventListener('click', closeModal6);

window.addEventListener('click', clickoutside6);

function openModal6() {
    modal6.style.display = 'block';
}


function closeModal6() {
    modal6.style.display = 'none';    
}

function clickoutside6(e) {
if(e.target == modal6){
    modal6.style.display = 'none';
}    
}

