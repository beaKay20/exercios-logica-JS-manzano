function executarExercicio42() {
    alert("Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.")

    //pode declarar mais de uma var na mesma linha
    let numero,fatorial,soma = 0;

    // Laço de repetição para leitura dos valores
    for (let i = 1; i <= 15; i++) {
      numero = parseInt(prompt(`Digite o ${i}º número:`));

      // Cálculo do fatorial debtro do laço for
      fatorial = 1;
      for (let j = 2; j <= numero; j++) {
        fatorial *= j;
      }
      soma += fatorial;
    }
    alert(`O somatório das fatoriais dos valores lidos é ${soma}.`);

}