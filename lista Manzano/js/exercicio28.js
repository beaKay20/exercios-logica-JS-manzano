function executarExercicio28(){
    alert(" Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. ")

     let soma = 0;
     let i = 2;

     while (i <= 500) {
        if (i % 2 == 0) {
         soma += i;
          
        }
        i++;
     }
     alert(soma);
}