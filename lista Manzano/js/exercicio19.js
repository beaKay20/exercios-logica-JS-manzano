function executarExercicio19(){
    alert(
      "Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente"
    );
    var a, b, c;

    // Lê os valores das variáveis.
    a = prompt("Digite o valor de A:");
    b = prompt("Digite o valor de B:");
    c = prompt("Digite o valor de C:");

    
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (a > b) {
      var temp = a;
      a = b;
      b = temp;
    }

    if (b > c) {
      var temp = b;
      b = c;
      c = temp;
    }

    if (a > b) {
      var temp = a;
      a = b;
      b = temp;
    }
    alert("Os valores em ordem crescente são:"+ a , + b , + c);

}