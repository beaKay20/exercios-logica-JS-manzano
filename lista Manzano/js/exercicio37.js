function executarExercicio37(){
    alert("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.")


    let maiorValor = Number.MIN_SAFE_INTEGER; // Define o maior valor como o menor número possível
    let menorValor = Number.MAX_SAFE_INTEGER; // Define o menor valor como o maior número possível


    while (true) {
      let valor = parseInt(
        prompt(
          "Digite um valor positivo inteiro (ou um valor negativo para encerrar):"
        )
      );
      if (valor < 0) {
        break;
      }
      if (valor > maiorValor) {
        maiorValor = valor;
      }

      // Atualiza o menor valor, se necessário
      if (valor < menorValor) {
        menorValor = valor;
      }
    }

    // Exibe o maior e o menor valores informados pelo usuário
    if (maiorValor !== Number.MIN_SAFE_INTEGER) {
      alert("Maior valor informado: " + maiorValor);
    } else {
      alert("Nenhum valor positivo foi informado.");
    }

    if (menorValor !== Number.MAX_SAFE_INTEGER) {
      alert("Menor valor informado: " + menorValor);
    } else {
      alert("Nenhum valor positivo foi informado.");
    }
}