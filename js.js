

try {
let puntos_usuarios = 0;
let puntos_maquina = 0;
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
  puntos_maquina +=1;
  document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
  if (puntos_maquina >= 10) {
    alert("perdiste");
    puntos_maquina = 0;
    puntos_usuarios = 0;
    document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
    document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
  }
}
  else {
    document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
    document.getElementById("resultado").innerHTML = "GANASTE";
    puntos_usuarios +=1;
    document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
    if (puntos_usuarios >= 10) {
      alert("ganaste");
      puntos_maquina = 0;
      puntos_usuarios = 0;
      document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
      document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
    }
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
puntos_usuarios +=1;
document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
if (puntos_usuarios >= 10) {
  alert("ganaste");
  puntos_maquina = 0;
  puntos_usuarios = 0;
  document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
  document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
}
}
else if (random == 2) {
  document.getElementById("imagen1").innerHTML = '<img src="img/papel.jpg"></img>';
  document.getElementById("resultado").innerHTML = "EMPATE";
}
  else {
    document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
    document.getElementById("resultado").innerHTML = "PERDISTE";
    puntos_maquina +=1;
    document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
    if (puntos_maquina >= 10) {
      alert("perdiste");
      puntos_maquina = 0;
      puntos_usuarios = 0;
      document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
      document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
    }
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
  puntos_maquina +=1;
  document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
  if (puntos_maquina >= 10) {
    alert("perdiste");
    puntos_maquina = 0;
    puntos_usuarios = 0;
    document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
    document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
  }
  }
  else if (random == 2) {
    document.getElementById("imagen1").innerHTML = '<img src="img/papel.jpg"></img>';
    document.getElementById("resultado").innerHTML = "GANASTE";
    puntos_usuarios +=1;
    document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
    if (puntos_usuarios >= 10) {
      alert("ganaste");
      puntos_maquina = 0;
      puntos_usuarios = 0;
      document.getElementById("punt").innerHTML = "Tus puntos: " + puntos_usuarios;
      document.getElementById("punt1").innerHTML = "Maquina: " + puntos_maquina;
    }
  }
    else {
      document.getElementById("imagen1").innerHTML = '<img src="img/tijera.jpg"></img>';
      document.getElementById("resultado").innerHTML = "EMPATE";
    }
  }
  document.getElementById("tijera").onclick=tijera;
} catch (error) {
  alert("El error es: " + error);
}









