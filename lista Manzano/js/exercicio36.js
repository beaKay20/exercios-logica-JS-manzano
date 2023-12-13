function executarExercicio36(){
    alert("Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área")

    let areaTotal = 0;


while (true) {
    let nomeComodo = prompt("Digite o nome do cômodo (ou digite 'fim' para encerrar):");

    if (nomeComodo.toLowerCase() === 'fim') {
        break;
    }
    let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));

    // Calcula a área do cômodo
    let areaComodo = largura * comprimento;

    areaTotal += areaComodo;

 
    alert(`A área do ${nomeComodo} é: ${areaComodo} metros quadrados.`);
}
alert(`A área total da residência é: ${areaTotal} metros quadrados.`);
}