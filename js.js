


function piedra(){
let img = document.getElementById("imagen");
img.innerHTML ='<img src="img/piedra.jpg"></img>';
let random = Math.floor(Math.random()*3+1);
if (random == 1) {
document.getElementById("imagen1").innerHTML = '<img src="img/piedra.jpg"></img>';
document.getElementById("resultado").innerHTML = "EMPATE";
}
else if (random == 2) {
  document.getElementById("imagen1").innerHTML = '<img src="img/papel.jpg"></img>';
  document.getElementById("resultado").innerHTML = "PERDISTE";
}
  else {
    document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
    document.getElementById("resultado").innerHTML = "GANASTE";
  }
}
document.getElementById("piedra").onclick=piedra;


function papel(){
let img = document.getElementById("imagen");
img.innerHTML ='<img src="img/papel.jpg"></img>';
let random = Math.floor(Math.random()*3+1);
if (random == 1) {
document.getElementById("imagen1").innerHTML = '<img src="img/piedra.jpg"></img>';
document.getElementById("resultado").innerHTML = "GANASTE";
}
else if (random == 2) {
  document.getElementById("imagen1").innerHTML = '<img src="img/papel.jpg"></img>';
  document.getElementById("resultado").innerHTML = "EMPATE";
}
  else {
    document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
    document.getElementById("resultado").innerHTML = "PERDISTE";
  }
}
document.getElementById("papel").onclick=papel;

function tijera(){
  let img = document.getElementById("imagen");
  img.innerHTML ='<img src="img/tijera.jpg"></img>';
  let random = Math.floor(Math.random()*3+1);
  if (random == 1) {
  document.getElementById("imagen1").innerHTML = '<img src="img/piedra.jpg"></img>';
  document.getElementById("resultado").innerHTML = "PERDISTE";
  }
  else if (random == 2) {
    document.getElementById("imagen1").innerHTML = '<img src="img/papel.jpg"></img>';
    document.getElementById("resultado").innerHTML = "GANASTE";
  }
    else {
      document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
      document.getElementById("resultado").innerHTML = "EMPATE";
    }
  }
  document.getElementById("tijera").onclick=tijera;










