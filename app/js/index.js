const { ipcRenderer } = require('electron');
const timer = require('./timer');

let botaoSobre = document.querySelector("#sobre");
let botaoLogin = document.querySelector("#login");
let botaoPlay = document.querySelector("#play");
let tempo = document.querySelector("#tempo");
let atividade = document.querySelector("#atividade");

botaoSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-sobre');
});

botaoLogin.addEventListener('click', function(){
    ipcRenderer.send('abrir-login');
});

let imgs = ['img/ic_play.svg', 'img/ic_pause.svg'];
let play = false;
botaoPlay.addEventListener('click', function(){
    if(play){
        timer.parar(atividade.textContent);
        play = false;
    } else {
        timer.iniciar(tempo);
        play = true;
    }
    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
});