function executarExercicio04(){
    alert("Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula lITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.")

    let tempo = parseInt(prompt("Informe o tempo gasto na viajem: "))
    let velocidade = parseInt(prompt("Informe a velocidade média: "))

    let distancia = tempo * velocidade
    let litrosUsados = distancia / 12

    alert("Velocidade média: " + velocidade + "km/h");
    alert("Tempo gasto na viagem: " + tempo + "h");
    alert("Distância percorrida na viagem: "+ distancia + "km");
    alert(
      "Quantidade de litros ultilizados na viagem: "
      +litrosUsados+
      "L"
    );

}