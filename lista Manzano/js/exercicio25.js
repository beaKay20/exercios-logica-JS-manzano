function executarExercicio25(){
    alert("Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: Ilmo Sr., se o sexo informado como masculino, ou a mensagem Ilma Sra., para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado. ")

    let nome = prompt("Informe seu nome por favor: ")
    let sexo = prompt("Informe seu sexo sendo F para feminino e M para masculino, por favor: ")
    
    if (sexo === "F" || sexo === "f") {
        alert("Olá Ilma Sra. " +nome)
    } else if (sexo === "M" || sexo === "m") {
        alert("Olá Ilmo Sr. " + nome);
    } else{
        alert("Digite apenas M ou F")
    }

}