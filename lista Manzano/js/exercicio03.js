function executarExercicio03(){
    alert("Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:Volume *Raio * Altura")

    var raio = parseInt(prompt("Informe o valor que corresponde ao  raio da lata de óleo: ")) 
    var altura= parseInt(prompt("Informe o valor da altura que corresponde a altura da lata de óleo: "))

    var volume = Math.PI * (raio ^ 2) * altura;

    alert("O valor que corresponde ao volume da lata de óleo é igual a: "+volume.toFixed(2))

}