let paragrafosTotal = document.getElementsByTagName("p")
let resultGeral = document.getElementById("resultgeral")
resultGeral.innerText = "Numero de paragrafos: " + paragrafosTotal.length

let articlesTotal = document.getElementsByTagName("article")
console.log(articlesTotal)

let resultArticle = document.getElementById("resultarticle")


for (let article of articlesTotal){
    let paragrafosEmArticles = article.getElementsByTagName("p")
    console.log(paragrafosEmArticles.length)

    resultArticle.innerText += paragrafosEmArticles.length + " | "
}