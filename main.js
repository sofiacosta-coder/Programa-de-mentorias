function muestra_oculta(id) {
    let div = document.getElementById(id);
    let btn = document.querySelector(`button[onclick*="${id}"]`);
    if (div.style.display == "none" || div.style.display === "") {
        div.style.display = "flex";
        btn.textContent = "Ocultar contacto";
    }
    else {
        div.style.display = "none"
        btn.textContent = "Ver contacto";
    }
   
}