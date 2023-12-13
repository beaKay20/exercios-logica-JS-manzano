function executarExercicio09(){
    alert("Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.")

    let A = parseInt(prompt("Inform o valor de A: "))
    let B = parseInt(prompt("Inform o valor de B: "))

    let quadrado = A ** 2 - B ** 2

    alert("A diferença do quadrado do primeiro valor pelo segundo é: "+quadrado);
}