const { ipcRenderer } = require('electron');
const moment = require('moment');
let segundos = 0;
let timer;
let tempo;

module.exports = {
    iniciar(el){
        tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer);
        timer = setInterval(()=>{
            segundos++;
            el.textContent = this.segundosParaTempo(segundos);
        }, 1000);
    },
    parar(atividade){
        clearInterval(timer);
        let tempoAtividade = this.segundosParaTempo(segundos);
        ipcRenderer.send('atividade-parada', atividade, tempoAtividade);
    },
    segundosParaTempo(segundos){
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    }
}