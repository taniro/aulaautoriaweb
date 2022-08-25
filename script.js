//alert("Hello world")
console.log("Hello world")
let pessoa = "taniro"
console.log(pessoa)
console.log(5*6)
console.log("hello world " + pessoa);
console.log("hello", "world", pessoa);
console.log("Boa tarde")

let idade = 10
console.log(typeof idade)
idade = "dez"
console.log(typeof idade)
idade = "dez" + 10
console.log(typeof idade)
console.log(idade)

let homem = true
console.log(typeof homem)
let teste = "verdadeiro" + true
console.log(typeof teste)
console.log(teste)

function sayhello(mensagem){
    console.log(mensagem)
}

console.log(typeof sayhello)
sayhello("autoria web")

const minhavar = (arg) => {
    console.log("rapaz...." + arg)
}

console.log(typeof minhavar)
minhavar()
minhavar(true)
minhavar(10)

let carro = {
    cor: "verde",
    ano:1900,
    marca:"fiat"
}

console.log(typeof carro)
console.log(carro)


let i = 0
console.log(i);
for (;;){
    let pipoca = "teste"
    console.log(pipoca)
    console.log("contando...", i)
    if ( i == 2) break
    i++
} 
console.log(i)
//console.log(pipoca)
const escrevanodom = ()=> {
    document.writeln("Escrevi no DOM")
}
document.writeln("Escrevi no DOM pela primeira vez")