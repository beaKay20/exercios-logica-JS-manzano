function executarExercicio18(){
    alert("Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. ")


let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));

if (a !== 0) {
  let discriminante = b * b - 4 * a * c;

  if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    alert("As raízes da equação são: x1 = " + x1 + " e x2 = " + x2);
  } else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert(`A equação possui uma raiz real: x = ${x}`);
  } else {
    alert("A equação não possui raízes reais.");
  }
} else {
  alert("O valor de A deve ser diferente de zero para uma equação de segundo grau.");
}}