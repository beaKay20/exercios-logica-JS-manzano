function executarExercicio01() {
  alert(
    "Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius"
  );

  var celsius = parseInt(prompt("Informe a temperatura em graus celsius: "));
  var Fahrenheit = (9 * celsius + 160) / 5;

  alert(
    "A temperatura convertida para fahrenheit corresponde a: " +
      Fahrenheit +
      " º"
  );
}