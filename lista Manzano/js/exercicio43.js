function executarExercicio43() {
    alert("Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.")

let soma = 0;
let media = 0;
let totalValores = 0;
let valor;

// Loop para leitura dos valores
do {
  valor = Number(prompt("Digite um número: "));
  if (valor >= 0) {
    // Acumulação do valor
    soma += valor;
    totalValores++;
  }
} while (valor >= 0);

//se numero positivo calcular media
if (totalValores > 0) {
  media = soma / totalValores;
}

alert(`A soma dos valores informados é igual a: ${soma}`);
alert(`A média aritmética dos valores informados corresponde a: ${media}`);
alert(`O total de valores lidos foi equivalente a: ${totalValores}`);}