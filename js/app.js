const $ = id => document.getElementById(id);

/* 🔊 SONIDOS */
const soundOK = new Audio("../SONIDOS/ok.mp3");
const soundERR = new Audio("../SONIDOS/error.mp3");
soundOK.volume = 0.6;
soundERR.volume = 0.6;

const MENU = [
  {id:1,nombre:"Chicharron",precio:50,categoria:"Comida",imagen:"chicharron.jpg"},
  {id:2,nombre:"Chicha aloja doble",precio:8,categoria:"Bebida",imagen:"chichaMorada.webp"}
];

function imgFor(i){ return `Imagenes/${i.imagen}`; }

function renderMenu(){
  $("grid").innerHTML = MENU.map(i=>`
    <div class="card">
      <img src="${imgFor(i)}">
      <b>${i.nombre}</b>
      <div>Bs ${i.precio}</div>
      <button onclick="sell(${i.id})">Vender</button>
    </div>
  `).join("");
}

function sell(id){
  soundOK.currentTime = 0;
  soundOK.play();
  alert("Venta registrada");
}

renderMenu();
