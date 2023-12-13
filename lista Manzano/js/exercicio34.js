function executarExercicio34(){
    alert("Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos. ")
    

    let contador = 0; 
   let total = 0;

while (contador < 10) {
    let valor = parseFloat(prompt("Digite um valor numérico: "));
    

    if (!isNaN(valor)) {
    
        total += valor;
        contador++;
    } else {
        alert("Por favor, insira um valor numérico válido.");
    }
}

let media = total / 10;

alert("Total do somatório: " + total);
alert("Média aritmética: " + media);}
