function executarExercicio14() {
  alert(
    "Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor."
  );
   function lerNumeroInteiro(mensagem) {
    return parseInt(prompt(mensagem));
}


function calcularDiferenca() {
    var primeiroNumero = lerNumeroInteiro("Digite o primeiro número inteiro:");
    var segundoNumero = lerNumeroInteiro("Digite o segundo número inteiro:");

    
    var maiorValor = Math.max(primeiroNumero, segundoNumero);
    var menorValor = Math.min(primeiroNumero, segundoNumero);

    
    var diferenca = maiorValor - menorValor;

    alert("A diferença entre o maior e o menor valor é: " + diferenca);
}

// Chama a função para calcular e mostrar a diferença
calcularDiferenca();
  
}

