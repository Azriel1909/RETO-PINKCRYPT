const inputTexto = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".entradaTexto");

function btnEncriptar(){
    if(inputTexto.value==""){
        document.getElementById("mostrarTexto").style.display = "block"
    }else{
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value= textoEncriptado;
    document.getElementById("mostrarTexto").style.display = "none"
    }
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);            
        }
    }
    return stringEncriptada;
}
function btnDesencriptar(){
    if(inputTexto.value==""){
        document.getElementById("mostrarTexto").style.display = "block"
    }else{
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value= textoEncriptado;
    document.getElementById("mostrarTexto").style.display = "none"
    }
}
function desencriptar(stringDesEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesEncriptada.includes(matrizCodigo[i][1])){
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);            
        }
    }
    return stringDesEncriptada;
}
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}