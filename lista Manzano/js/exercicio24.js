function executarExercicio24(){
    alert("Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.")

    let valor = parseInt(prompt("Informe um valor inteiro: "))

    if (valor < 3) {
        alert(valor)
    } else {
       alert ("O valor informado é maior que 3")
    }
}