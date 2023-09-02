function activarPanel() {

    const contenedor = document.querySelector(".cont-colores");
    
    contenedor.classList.toggle("active");

    const boton = document.querySelector(".open-panel");

    boton.classList.toggle("active");

}

var link = document.getElementById("fileCss");

function grey(){
    link.href="stylesheet/index.css"

}

function red() {
    link.href="stylesheet/index-red.css";

}

function yellow() {
    link.href="stylesheet/index-yellow.css";

}



