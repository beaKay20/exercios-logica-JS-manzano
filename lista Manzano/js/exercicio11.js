function executarExercicio11(){
    alert("Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.")

    let cotacaoDolar = parseInt(prompt("Informe o valor da cotação do dolar: "))
    let quantidadeDeReal = prompt('Digite a quantidade de reais que você deseja converter')

    let dolares = quantidadeDeReal / cotacaoDolar;

    alert(`O valor em dólares é: ${dolares}`);
}