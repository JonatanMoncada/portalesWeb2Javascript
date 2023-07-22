let formulario=document.querySelector("form");
let elementos=formulario.elements;
btn=document.querySelector("#btn");

let validarNombre=function(e){
    if(elementos.nombreCompleto.value==""){
        alert("Llenar el campo de nombre");               
        e.preventDefault();
    }
}

let radios=function(e){
    if(elementos.sexo[0].checked==true || elementos.sexo[1].checked==true){        
    }
    else{
        alert("Selecciona los campos de sexo");
        e.preventDefault();
    }
}

let checkbox=function(e){
    if(elementos.condiciones.checked==false){
        alert("Debe seleccionar los terminos y condiciones");
        e.preventDefault();
    }
}

let validar=function(e){
    validarNombre(e);  
    radios(e);
    checkbox(e);
}

formulario.addEventListener("submit",validar);
