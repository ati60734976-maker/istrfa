var modal = document.getElementById("miModal");
var btnAbrir = document.getElementById("btnAbrirModal");
var btnCerrar = document.querySelector(".cerrar-btn");

btnAbrir.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

btnCerrar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function enviarPorCorreo() {
    var nombre = document.getElementById("nombreCliente").value;
    var prod = document.getElementById("productoPedido").value;
    var cant = document.getElementById("cantidadPedido").value;

    var url = "https://mail.google.com/mail/?view=cm&fs=1" +
              "&to=ati60734976@istrfa.edu.pe.com" + 
              "&su=Pedido de " + encodeURIComponent(nombre) +
              "&body=Hola, quiero pedir " + encodeURIComponent(cant) + " de " + encodeURIComponent(prod);

    window.open(url, "_blank");
    modal.style.display = "none";
}