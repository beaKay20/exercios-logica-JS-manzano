function executarExercicio07(){
    alert("Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.")

    let A = parseInt(prompt("Informe o valor de A: "))
    let B = parseInt(prompt("Informe o valor de B: "))
    let C = parseInt(prompt("Informe o valor de C: "))
    let D = parseInt(prompt("Informe o valor de D: "))

    var resultado_soma = A + B;
    alert("A + B = "+resultado_soma);
    let resultado_multiplicacao = A * B;
    alert("A * B = "+resultado_multiplicacao);


    var resultado_soma = A + C;
    alert("A + C = " +resultado_soma);
    resultado_multiplicacao = A * C;
    alert("A * C = " +resultado_multiplicacao);

    resultado_soma = A + D;
    alert("A + D = " +resultado_soma);
    resultado_multiplicacao = A * D;
    alert("A * D = "+ resultado_multiplicacao);

    resultado_soma = B + C;
    alert("B + C = "+resultado_soma);
    resultado_multiplicacao = B * C;
    alert("B * C = "+resultado_multiplicacao);

    resultado_soma = B + D;
    alert("B + D = " +resultado_soma);
    resultado_multiplicacao = B * D;
    alert("B * D = " +resultado_multiplicacao);

    resultado_soma = C + D;
    alert("C + D = "+ resultado_soma);
    resultado_multiplicacao = C * D;
    alert("C * D = "+ resultado_multiplicacao);
   
}