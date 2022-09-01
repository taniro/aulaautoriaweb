let texto1 = document.getElementById("p1")
console.log(texto1)
console.log(typeof texto1)
console.log(texto1.innerText)
texto1.innerText = "Novo Texto"

let editText = document.getElementById("editText")
console.log(editText)
console.log(editText.value)

function dadosMensagem(){
    alert("O conteudo do input eh" + editText.value)
}

function fazsoma(){
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")

    let resposta = parseInt(numero1.value) + parseInt(numero2.value)

    let resultado = document.getElementById("resultado")
    resultado.innerText = resposta
}

function repetetextoemparagrafo(){
    let editRepete = document.getElementById("editRepete")
    let paragrafocopia = document.getElementById("paragrafocopia")


    paragrafocopia.innerText = editRepete.value

}














