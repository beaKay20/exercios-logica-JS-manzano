function executarExercicio20(){
    alert(
      "Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3."
    );
    let numeros = [];
for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt("Digite um número inteiro: "));
    numeros.push(numero);
}

let numerosDivisiveis = numeros.filter(numero => numero % 2 === 0 && numero % 3 === 0);

if (numerosDivisiveis.length > 0) {
    alert("Números divisíveis por 2 e 3: " + numerosDivisiveis.join(", "));
} else {
    alert("Nenhum dos números digitados é divisível por 2 e 3.");
}

}