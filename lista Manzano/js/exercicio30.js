function executarExercicio30(){
    alert("Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^)")

    for (var expoente = 0; expoente <= 15; expoente++) {
      resultado = 1;
      for (var i = 1; i <= expoente; i++) {
        resultado *= 3;
      }
      alert("3^" + expoente + " = " + resultado);
    }
}