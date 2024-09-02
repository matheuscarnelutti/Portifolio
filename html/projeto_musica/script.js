var corOriginal = true;
var corOriginal2 = true;
var corOriginal3 = true;

function play(){
    var cx1 = document.getElementById("cx1");
    var botaoplay1 = document.getElementById("bt1");
    if(corOriginal){   
        document.getElementById("cx1").style.display = "inline-flex";
        bt1.textContent = "FECHAR";
        bt1.style.padding = "5px 5px 5px 5px";
    } else {
        document.getElementById("cx1").style.display = "none";
        bt1.textContent = "ABRIR";
        bt1.style.padding = "5px 13.5px 5px 13.5px";
    }
    corOriginal = !corOriginal;
};

function play2(){
    var cx2 = document.getElementById("cx2");
    var botaoplay2 = document.getElementById("bt2");
    if(corOriginal2){    
        document.getElementById("cx2").style.display = "inline-flex";
        bt2.textContent = "FECHAR";
        bt2.style.padding = "5px 5px 5px 5px";
    } else {
        document.getElementById("cx2").style.display = "none";
        bt2.textContent = "ABRIR";
        bt2.style.padding = "5px 13.5px 5px 13.5px";
    }
    corOriginal2 = !corOriginal2;
};

function play3(){
    var cx3 = document.getElementById("cx3");
    var botaoplay3 = document.getElementById("bt3");
    if(corOriginal3){    
        document.getElementById("cx3").style.display = "inline-flex";
        bt3.textContent = "FECHAR";
        bt3.style.padding = "5px 5px 5px 5px";
    } else {
        document.getElementById("cx3").style.display = "none";
        bt3.textContent = "ABRIR";
        bt3.style.padding = "5px 13.5px 5px 13.5px";
    }
    corOriginal3 = !corOriginal3;
};

var atual = 0;
function tocar() {
    const audioPlayer = document.getElementById('player');
    const sourceElement = audioPlayer.querySelector('source');
    const srcimg = document.getElementById('capad');
    const capad = srcimg.querySelector('img');
    const imagemClicada = event.target.src;
    if (!imagemClicada) {
        sourceElement.src = "./arq/Back In Black.mp3";
        capad.src = "./arq/Back In Black.jpg";
        audioPlayer.load();
        audioPlayer.play();
        playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
        musicNameElement.textContent = "Back In Black";
    } else {
    const nomeImagem = imagemClicada.substring(imagemClicada.lastIndexOf('/') + 1); // Obtém o nome da imagem a partir do seu caminho
    const nomeMusica = nomeImagem.replace('.jpg', '.mp3'); // Substitui a extensão da imagem pela extensão da música
    sourceElement.src = "./arq/" + nomeMusica;
    capad.src = imagemClicada;
    audioPlayer.load();
    audioPlayer.play();
    playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
    musicNameElement.textContent = nomeImagem.replace('.jpg', '').replace(/%20/g, ' ').trim();
    }
    atual = 1;
};

const audioPlayer = document.getElementById('player');
const playPauseButton = document.getElementById('playPauseButton');
const musicNameElement = document.getElementById('musicName');
const capadImage = document.getElementById('capad').querySelector('img');
function playPause() {
    if (audioPlayer.paused) {
        if (atual === 0) {
            tocar(); 
            playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
        } else {
            audioPlayer.play();
            playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
        }
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = "<i class='bx bx-play'></i>"; 
    }
};

player.ontimeupdate = () => updateTime();

const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);
    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);
  
    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);
    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);
  
    const progressWidth = durationFormatted
      ? (player.currentTime / durationFormatted) * 100
      : 0;
  
    progress.style.width = progressWidth + "%";
  };
  
  const formatZero = (n) => (n < 10 ? "0" + n : n);
  
  progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
    player.currentTime = newTime;
  };