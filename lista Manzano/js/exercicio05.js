function executarExercicio05(){
    alert("Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).")

    let valorAtual = parseInt(prompt("Informe o valor atual da prestação: "))
    let taxa = parseInt(prompt("Informe o valor da taxa por mês: "))
    let tempo = parseInt(prompt("Informe o tempo de atraso da prestação: "))

    var prestacao = (valorAtual + (valorAtual * taxa / 100 * tempo))

    alert("O valor da prestação com a taxa de atraso é igual a R$: "+prestacao)
}