function executarExercicio10(){
    alert("Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.")
    
    let cotacaoDolar = parseInt(prompt("Informe o valor da cotação do dólar: "))
    let quantidadeDolar = parseInt(prompt("Informe a quantidade de  dólars que possui: "))

    let real = cotacaoDolar * quantidadeDolar


    alert("A quantidade equivale a R$: "+real)


}