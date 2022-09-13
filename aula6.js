function inverte(){

    let palavra1 = document.getElementById("palavra1")
    let palavra2 = document.getElementById("palavra2")
    let palavra3 = document.getElementById("palavra3")
    let palavra4 = document.getElementById("palavra4")
    let palavra5 = document.getElementById("palavra5")

    let texto_palavra1 = palavra1.value
    let texto_palavra2 = palavra2.value
    let texto_palavra3 = palavra3.value
    let texto_palavra4 = palavra4.value
    let texto_palavra5 = palavra5.value

    let resultado_palavra1 = ""
    let resultado_palavra2 = ""
    let resultado_palavra3 = ""
    let resultado_palavra4 = ""
    let resultado_palavra5 = ""

    for (let i = texto_palavra1.length-1; i >= 0 ; i--){
        resultado_palavra1 += texto_palavra1[i]
    }

    for (let i = texto_palavra2.length-1; i >= 0 ; i--){
        resultado_palavra2 += texto_palavra2[i]
    }

    for (let i = texto_palavra3.length-1; i >= 0 ; i--){
        resultado_palavra3 += texto_palavra3[i]
    }

    for (let i = texto_palavra4.length-1; i >= 0 ; i--){
        resultado_palavra4 += texto_palavra4[i]
    }

    for (let i = texto_palavra5.length-1; i >= 0 ; i--){
        resultado_palavra5 += texto_palavra5[i]
    }

    palavra1.value = resultado_palavra1
    palavra2.value = resultado_palavra2
    palavra3.value = resultado_palavra3
    palavra4.value = resultado_palavra4
    palavra5.value = resultado_palavra5
}

function inverteInteligente(){
    let inputs = document.getElementsByTagName("input")
    
    for (let i of inputs){
        let palavra  = i.value
        let resultado = ""

        for (let letra = palavra.length-1; letra >= 0; letra --){
            resultado+= palavra[letra]
        }

        i.value = resultado
    }
}