function executarExercicio32(){
    alert("Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc")

    let primeiroTermo = 1;
    let segundoTermo = 1;
    let termoAtual = 2;
    let contador = 2; 

    alert("Série de Fibonacci até o décimo quinto termo:");
    alert(primeiroTermo); 
    alert(segundoTermo);

    while(contador < 15){
        var proximoTermo = primeiroTermo + segundoTermo;
        alert(proximoTermo);

        primeiroTermo = segundoTermo;
        segundoTermo = proximoTermo;
        contador++;
    }
}