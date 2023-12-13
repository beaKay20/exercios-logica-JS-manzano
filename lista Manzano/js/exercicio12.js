function executarExercicio12(){
    alert("Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.")

    let A = parseInt(prompt("Informe o valor de A: "))
    let B = parseInt(prompt("Informe o valor de B: "))
    let C = parseInt(prompt("Informe o valor de C: "))

    let quadradoValores = A ** 2 + B ** 2 + C ** 2

    alert("A soma do quadrado dos 3 valores corresponde a: "+quadradoValores)
}