alert("bem vindo ao jogo do número secreto!");
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
  chute = parseInt(prompt(`Digite um número entre 1 e ${numeroMaximo}.`));
  if (numeroSecreto == chute) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert(`o numero secreto é maior que ${chute}`);
    } else {
      alert(`o numero secreto é menor que ${chute}`);
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Você acertou com ${tentativas} ${palavraTentativa}! o numero secreto é ${numeroSecreto}.`
);
