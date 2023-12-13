function executarExercicio22(){
    alert("Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. ")

    let numero = parseInt(prompt("Informe um número inteiro: "))

    if (numero % 2 === 0 ) {
        alert("O numero " +numero+ " par.")
    } else {
         alert("O numero " + numero + " impar.");
    }
}