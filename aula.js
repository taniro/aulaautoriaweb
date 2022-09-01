
function verificaErro(){
    let campoDeTexto = document.getElementById("nome")
    if (campoDeTexto.value.length < 5){
        campoDeTexto.className += "erro"
    }else{
        campoDeTexto.className = ""
    }
}

