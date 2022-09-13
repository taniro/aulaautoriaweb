let paragrafo = document.getElementById("paragrafo")
paragrafo.innerText = "Novo conteudo do DIV"

let novo_paragrafo = document.createElement("carro");
novo_paragrafo.setAttribute("src", "link.jpeg")
novo_paragrafo.setAttribute("qualquercoisa", "qualquervalor")
novo_paragrafo.innerText = "novo paragrafo"

paragrafo.appendChild(novo_paragrafo)
console.log("rodou!")

function testando(){
    console.log("teste bem feito")
}