function executarExercicio08(){
    alert(" Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME  COMPRIMENTO * LARGURA * ALTURA.")

    let comprimento = parseInt(prompt("Informe o comprimento que corresponde a caixa: "))
    let largura = parseInt(prompt("Informe a largura que corresponde a caixa: "))
    let altura = parseInt(prompt("Informe a altura que corresponde a caixa: "))

    let volume = comprimento * largura * altura

    alert("O volume que corresponde a uma caixa retangular é: "+volume)
}