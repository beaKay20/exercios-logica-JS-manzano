function executarExercicio15(){
    alert("Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo umvalor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. ")
    function lerNumeroInteiro(mensagem) {
    return parseInt(prompt(mensagem));
}
function calcularModulo() {
    var numero = lerNumeroInteiro("Digite um número inteiro:");

    if (numero < 0) {
        numero = numero * -1;
    }

    alert("O módulo do número fornecido é: " + numero);
}

calcularModulo();}
