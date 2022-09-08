function mostraLink(){
    let novo_elemento = document.createElement("a")
    let texto_do_ancora = document.createTextNode("Link para o site do UOL")
    novo_elemento.appendChild(texto_do_ancora);
    novo_elemento.setAttribute("href", "http://www.uol.com.br")
    novo_elemento.setAttribute("target", "_blank")
    novo_elemento.setAttribute("id", "linkparauol")
    novo_elemento.setAttribute("naoexiste", "qualquer")
    let div_container = document.getElementById("root")
    div_container.appendChild(novo_elemento)
}


function exibirMenu(){
    let novo_container = document.createElement("div")
    novo_container.setAttribute("id", "menu");


    let novo_elemento = document.createElement("a")
    let texto_do_ancora = document.createTextNode("LINK A")
    novo_elemento.appendChild(texto_do_ancora);

    let div_container = document.getElementById("root")
    div_container.appendChild(novo_container)
    novo_container.appendChild(novo_elemento)
}

function esconderMenu(){
    let elemento_pai = document.getElementById("root")
    let elemento_filho = document.getElementById("menu")

    elemento_pai.removeChild(elemento_filho)
}

function desapareceLink() {
    let elemento_pai = document.getElementById("root")
    let elemento_filho = document.getElementById("linkparauol")

    elemento_pai.removeChild(elemento_filho)
}


function adicionaParagrafo(){
    
    let inputText = document.getElementById("inputText")

    let novo_paragrafo = document.createElement("p")
    let texto_do_paragrafo = document.createTextNode(inputText.value)
    
    novo_paragrafo.appendChild(texto_do_paragrafo)
    
    let div_container = document.getElementById("root")
    div_container.appendChild(novo_paragrafo)
}

