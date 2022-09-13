function converteData(){
    let inputData = document.getElementById("inputData")
    let resultado = document.getElementById("resultado")

    let data_numeral = inputData.value

    let array_de_partes_data = data_numeral.split("/")
    console.log(array_de_partes_data)

    let mes = ""
    switch (array_de_partes_data[1]){
        case "01":
            mes = "janeiro"
            break
        case "02":
            mes = "fevereiro"
            break
        case "03":
            mes = "março"
            break
        case "04":
            mes = "abril"
            break
        case "05":
            mes = "maio"
            break
        case "06":
            mes = "junho"
            break
        case "07":
            mes = "julho"
            break
        case "08":
            mes = "agosto"
            break  
        case "09":
            mes = "setembro"
            break
        case "10":
            mes = "outubro"
            break
        case "11":
            mes = "novembro"
            break
        case "12":
            mes = "dezembro"
            break 
        default:
            mes = "indefinido"
    }

    let data_textual = array_de_partes_data[0] + " de " + mes + " de " + array_de_partes_data[2]
    resultado.innerText = data_textual
}