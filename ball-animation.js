var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

var x = 20;
var sentido = 1;

function atualizaTela() {
  if (x > 40) {
    sentido = -1;
  } else if (x < 20) {
    sentido = 1;
  }
  limpaTela();
  desenhaCirculo(300, 200, x);
  x += sentido;
}

setInterval(atualizaTela, 20);
