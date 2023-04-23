const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncryp(){
    if(!validarTexto()) {
        const textoEncriptado = encryp(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}


function encryp(stringEncryp){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncryp = stringEncryp.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncryp.includes(matrizCodigo[i][0])){
            stringEncryp = stringEncryp.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncryp
}



function btnDecryp(){
    const textoEncriptado = decryp(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function decryp(stringDecryp){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecryp = stringDecryp.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDecryp.includes(matrizCodigo[i][1])){
            stringDecryp = stringDecryp.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDecryp
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
