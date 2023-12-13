function executarExercicio26() {
  alert(
    "Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer"
  );
 function tabuada(numero) {
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
  }
  return tabuada;
}
alert(tabuada(5));
}
