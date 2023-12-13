function executarExercicio16(){
    alert("c. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição. ")

    let valor1 = parseInt(prompt("Informe o primeiro valor: "))
    let valor2 = parseInt(prompt("Informe o segundo valor: "))
    let valor3 = parseInt(prompt("Informe o terceiro valor: "))
    let valor4 = parseInt(prompt("Informe o quarto valor: "))

    let mediaNotas = (valor1 + valor2 + valor3 + valor4 )/ 4

    if (mediaNotas >= 5) {
        alert("Sua média é igual a " +mediaNotas+ " aluno aprovado")
    } else {
         alert("Sua média é igual a " +mediaNotas+ " aluno reprovado")
    }
}