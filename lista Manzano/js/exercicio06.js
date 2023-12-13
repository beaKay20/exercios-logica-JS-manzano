function executarExercicio06(){
    alert("Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor davariável A. Apresentar os valores trocados")

   var A = prompt("Digite o valor de A: ");
   var B = prompt("Digite o valor de B: ");

   alert("Valores originais: A = " + A + " e B = " + B);

   var temp = A;
   A = B;
   B = temp;

   alert("Valores trocados: A = " + A + " e B = " + B);
}