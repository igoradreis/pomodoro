var tela1_wrapper = document.getElementById("tela1-wrapper");
var btn_iniciar = document.getElementById("btn-iniciar");

var btn_reset = document.getElementById("btn-reset");
var txt_segundos = document.getElementById("segundos");
var txt_minutos = document.getElementById("minutos");
var som = document.getElementById("som");
var som_player = document.getElementById("som-player");

var tempo = 0;
var segundos = 0;
var minutos = 0;
var txt_segundos_px = 200;
var txt_minutos_px = 200;


function reset() {
  clearInterval(tempo);

  // Reseta os valores
  segundos = 0;
  txt_segundos.value = segundos;

  minutos = 0;
  txt_minutos.value = minutos;
  
  // Reseta o tamanho das caixas
  txt_segundos_px = 200;
  txt_minutos_px = 200;

  txt_segundos.style.fontSize = txt_segundos_px + "px";
  txt_minutos.style.fontSize = txt_minutos_px + "px";
}

function inicializa() {  
  tempo = setInterval(function() {
    if (segundos < 59) {
      txt_segundos.value = ++segundos;
    } else if (minutos < 24) { // minutos < pomodoro-1
      segundos = 0;
      txt_segundos.value = segundos;

      txt_minutos.value = ++minutos;
      
      // Estilo
      txt_segundos_px -= 4;
      txt_minutos_px += 4;
      
      txt_segundos.style.fontSize = txt_segundos_px + "px";
      txt_minutos.style.fontSize = txt_minutos_px + "px";
    } else {
      // Mostra a primeira tela
      tela1_wrapper.style.display = "table";
      reset();
      
      // Reproduz um som
      var sons = [ "./sound.wav" ];
      var i = Math.floor(Math.random() * sons.length);
      som.src = sons[i];
      som_player.load();
      som_player.play();
    }
  }, 1000);
}


// btn_iniciar.focus();

btn_iniciar.onclick = function() {
  reset();
  tela1_wrapper.style.display = "none"; // Esconde a primeira tela
  inicializa();
};

btn_reset.onclick = function() {
  reset();
  inicializa();
};
