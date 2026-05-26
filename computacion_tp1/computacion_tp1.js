function setup() {
  createCanvas(800, 480);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(40, 90, 200);

  translate(width / 2, height / 2);

  // ------------------------
  // FONDO
  // ------------------------
  noStroke();
  fill(60, 110, 220);
  rect(0, 0, 800, 480);

  // ========================
  // FIGURA (CAPA FONDO) IZQUIERDA
  // ========================
 push();

translate(-120, 0);

// Líneas
stroke(0);
strokeWeight(2);

for (let i = -120; i <= 130; i += 8) {
// ACHIQUE SUPERIOR
 let achique = map(i, -50, 220, 0, 80);
 
let y1 = -220 + achique; //arriba
 let y2; //abajo

  // PUNTO DE CAMBIO
  if (i < 0) {
y2 = 220;
 } else {

    // después empieza a subir
    let achiqueAbajo = map(i, 0, 120, 0, 80);
 y2 = 220 - achiqueAbajo;
  }
 line(i, y1, i, y2);
}

pop();

  // ========================
  // FIGURA (CAPA FONDO) DERECHA
  // ========================
push();

translate(120, 0);

// Líneas
stroke(0);
strokeWeight(2);

for (let i = -120; i <= 130; i += 8) {
// ACHIQUE INFERIOR
let achique = map(i, 130, -120, 0, 80); //valores invertidos
  let y2 = 220 - achique; //abajo
  let y1; //arriba

  // punto de cambio
  if (i > 0) {
 y1 = -220; } else {
    let achiqueArriba = map(i, 0, -120, 0, 80);
    y1 = -220 + achiqueArriba;
  }
   line(i, y1, i, y2);
}

pop();
// ========================
  // FIGURA ARRIBA (CAPA MEDIA)
  // ========================
push();

translate(40, -120);

stroke(0);
strokeWeight(5);

for (let i = -240; i <= 100; i += 10) {

  let inclinacion = 80;
 // PARTE SUPERIOR
  let x1 = i + inclinacion;
  let y1 = -90;
// PARTE INFERIOR (modifica ancho tambien)
  let x2 = i;
  let y2 = 120;

  line(x1, y1, x2, y2);
}

pop();
// ========================
  // FIGURA ABAJO (CAPA MEDIA)
  // ========================
push();

translate(40, 90);

stroke(0);
strokeWeight(5);

for (let i = -240; i <= 100; i += 10) {

  let inclinacion = 80;
 // PARTE SUPERIOR
  let x1 = i + inclinacion;
  let y1 = -90;
// PARTE INFERIOR (modifica ancho tambien)
  let x2 = i;
  let y2 = 120;

  line(x1, y1, x2, y2);
}

pop();
  
  // ========================
  // CUADRADO CENTRAL
  // ========================
  push();

  
  stroke(0);
  strokeWeight(9);

  for (let i = -90; i <= 90; i += 13) {
    line(i, -90, i, 85);
  }

  pop();

}
