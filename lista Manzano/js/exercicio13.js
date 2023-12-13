function executarExercicio13(){
    alert("Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.")

    
    let A = parseInt(prompt("Informe o valor de A: "));
    let B = parseInt(prompt("Informe o valor de B: "));
    let C = parseInt(prompt("Informe o valor de C: "));

    let quadradoDaSoma = A + B + C ** 2

    alert("O quadrado da soma dos três valores corresponde a: "+quadradoDaSoma)
}