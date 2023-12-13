function executarExercicio21(){
    alert(
      "Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores"
    );
     let maior = 0;
     let menor = 0;
     for (let i = 0; i < 5; i++) {
       const numero = parseInt(prompt("Digite um número inteiro: "));


       if (numero > maior) {
         maior = numero;
       }
       if (numero < menor) {
         menor = numero;
       }
     }

     alert("O maior valor é: "+maior);
     alert("O menor valor é: "+menor);

}