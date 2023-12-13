function executarExercicio35(){
    alert("Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70")

    let numero = 50;
    let soma = 0;
    let contador = 0;

    while(numero <= 70){
        if (numero % 2 ===0) {
           soma += numero; 
           contador++;
        }
        numero++;
    }
    let media = soma / contador;

    alert("Soma dos números pares entre 50 e 70 é igual a: "+soma)
    alert("Média aritmética entre os dos números 50 e 70 pares: "+media)
}