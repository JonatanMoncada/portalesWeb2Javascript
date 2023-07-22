function valor(x) {
    document.querySelector("#display").value += x;
}

function calcular(){
    let resultado = eval(document.querySelector("#display").value);
    document.querySelector("#display").value=resultado;
}

function limpiarDisplay(){
    document.querySelector("#display").value="";
}