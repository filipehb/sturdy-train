const { ipcRenderer, shell } = require('electron');

let perfil = document.querySelector("#link-perfil");
let versao = document.querySelector("#versao-sistema");

perfil.addEventListener("click", function(){
    shell.openExternal("https://www.linkedin.com/in/filipe-henrique-ba443034");
});

window.onload = function(){
    versao.textContent = window.require('electron').remote.app.getVersion();
}