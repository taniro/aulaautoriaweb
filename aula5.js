let paragrafos = document.getElementsByTagName("p")
console.log(paragrafos)
console.log(paragrafos.length)

let i = 0;

for (p of paragrafos){
    console.log(p.innerText);
    p.innerText = "Novo Paragrafo" + i++;
    if (i % 2 == 0) {
        p.setAttribute("style", "background-color: grey;")
    }
}