const adivinanza = document.getElementById("adivinanza");
const respuesta = document.getElementById("respuesta");
const adivinanza_eleccion = document.getElementById("adivinanza_eleccion");
const respuesta_eleccion = document.getElementById("respuesta_eleccion");
const btn_comprobar = document.getElementById("btn_comprobar");
const btn_jugar = document.getElementById("btn_jugar");
//funcion para añadir tanto adivinazas seleccionadas como respuestas selecionadas

const aniadirElemento = (event, capa_destino, capa_origen) => {
  capa_destino.append(event.target);
  if (capa_origen.children.length == 0) {
    capa_origen.classList.add("ocultar");
  }
};
adivinanza.addEventListener("click", (event) => {
  if (event.target.nodeName == "DIV")
    aniadirElemento(event, adivinanza_eleccion, adivinanza);
});
respuesta.addEventListener("click", (event) => {
  if (event.target.nodeName == "DIV")
    aniadirElemento(event, respuesta_eleccion, respuesta);
});

const comprobar = () => {
  //tengo que recorrer todos los elementos de adivinanza_eleccion y respuesta_eleccion
  for (let i = 0; i < adivinanza_eleccion.children.length; i++) {
    const adivinanza = adivinanza_eleccion.children[i];
    const respuesta = respuesta_eleccion.children[i];
    //asi puedo acceder al texto de cada elemento

    // Obténgo el texto de la adivinanza y respuesta
    const textoAdivinanza = adivinanza.textContent.toLowerCase();
    const textoRespuesta = respuesta.textContent.toLowerCase();

    // Verifica si el texto de la respuesta está contenido en la adivinanza
    if (textoAdivinanza.includes(textoRespuesta)) {
      adivinanza.style.backgroundColor = "green";
      respuesta.style.backgroundColor = "green";
    } else {
      adivinanza.style.backgroundColor = "red";
      respuesta.style.backgroundColor = "red";
    }
  }
  
};
btn_comprobar.addEventListener("click", () => {
  comprobar();
  if (
    adivinanza_eleccion.children.length < 5 && respuesta_eleccion.children.length < 5
  ) {
    //hago que desaparezca el boton jugar y aparezca el boton de comprobar
    btn_comprobar.classList.add("ocultar");
    btn_jugar.classList.remove("ocultar");
    btn_jugar.classList.add("mostrar");
    }
});
//recargo la pagina para volver a jugar
btn_jugar.addEventListener("click", () => {
  window.location.reload();
});
