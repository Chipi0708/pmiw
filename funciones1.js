//función con parametros que NO retorna un valor
function dibujarcelda(i, j) {
  
  

  if ((i + j) % 2 == 0) {
    fill(color2);   // negro
  } else {
    fill(color1); // blanco
  }
  rect(i * TamCelda + 400, j * 10, TamCelda, 10);
}
