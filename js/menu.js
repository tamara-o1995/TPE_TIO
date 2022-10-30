document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() { 

    "use strict";
    
    document.querySelector(".btn_menu").addEventListener("click", toggleMenu);  

    function toggleMenu() { 
        document.querySelector(".navigation").classList.toggle("show");
    }

    document.querySelector("#imagen-portada").classList.add("hide");
}
