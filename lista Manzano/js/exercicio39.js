function executarExercicio39() {
    alert("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. ")

    let somatorio = 0;
    let numero = 1;


    do {
      if (numero % 2 === 0) {
        somatorio += numero;
      }

      // Incrementa o número para verificar o próximo na próxima iteração
      numero++;
    } while (numero <= 500);
    alert("Somatório dos valores pares de 1 a 500: " + somatorio);
    
}