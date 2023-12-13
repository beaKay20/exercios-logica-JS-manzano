function executarExercicio02(){
    alert("Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Ce")

    var fahrenheit = parseInt(prompt("Informe o gruas em fahrenheit: "))
    var celsius = (fahrenheit - 32) * 5 / 9

    alert("A temperarura convertida para celsius correspomde a: " + celsius+ "C º")
}