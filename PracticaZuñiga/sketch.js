let sprite;
let bg;
const w = 431;
const h = 768;
let bird;
let birdImg;
let bgX = 0;
let bgX2 = w;
let tubos = [];
let botonReinicio;
let puntuacion = 0;

function preload(){
  sprite = loadImage('./imagen.png') //ruta de la imagen
}
function setup() {
  createCanvas(w, h);
  bg = sprite.get(0,0,w,h)
  birdImg = sprite.get(432,0,51,36)
  bird = new Bird(birdImg,height);

  botonReinicio = createButton('Reiniciar');
  botonReinicio.position(width / 2 - 50, height / 2 + 50);
  botonReinicio.mousePressed(reiniciarJuego);
  botonReinicio.hide(); 
  botonReinicio.class('boton-reinicio');
}

function draw() {
  background(220);
  image(bg,bgX--,0);
  image(bg,bgX2--,0);

  bird.update()
  bird.draw();

 //TUBERIAS
  if (frameCount % 150 === 0) { 
    tubos.push(new Barras(sprite));
  }

  for (let i = tubos.length - 1; i >= 0; i--) {
    tubos[i].update();
    tubos[i].draw();

    if (bird.colision(tubos[i])) {
      bird.dead = true;
      pantallaReinicio();
      break;
    }
    
    if (!bird.dead && tubos[i].x + tubos[i].w < bird.x && !tubos[i].puntuado) {
      puntuacion++; 
      tubos[i].puntuado = true;
    }
    
    if (tubos[i].offscreen()) {
      tubos.splice(i, 1);
    }
  }
    textSize(32);
    textAlign(RIGHT);
    text('Puntuación: ' + puntuacion, width - 20, 40);
  
  if(bgX <= -w){
    bgX = w
  }

  if(bgX2 <= -w){
    bgX2 = w
  }
}

function keyPressed(){
  if(key === ' '){
    bird.up();
  }
}

function reiniciarJuego() {
  botonReinicio.hide();
  bird = new Bird(birdImg, height);
  tubos = [];
  puntuacion = 0;
}

function pantallaReinicio() {
  botonReinicio.show();
}
