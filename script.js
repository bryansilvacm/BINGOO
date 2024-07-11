function verificarquantnumeros(numerosjogador) {
  if (numerosjogador.length !== 9) {
    alert(
      "Verifique os números! Devem ser exatamente 9 números, entre 1 e 15 e não devem se repetir"
    );
    return false;
  }
}

function verificarcartelajogador(numerosGerados) {
  let cartelajogador = document.getElementById("cartelajogador").value;
  let res = document.getElementById("resultado");
  let resultado = [];
  numerosjogador = cartelajogador.split(",").map((num) => parseInt(num.trim()));

  if (verificarquantnumeros(numerosjogador)) {
    return;
  } else {
    numerosGerados.forEach((numero) => {
      if (numerosjogador.includes(numero)) {
        resultado.push(numero);
      }
      res.innerHTML = `você acertou os números: ${resultado.join("-")}`;
    });
    if (resultado.length >= 6) {
      tocaraudiovencedor();
      res.innerHTML += `<br> Parabéns Você Ganhou!`;
    } else {
      tocaraudioperdedor();
      res.innerHTML += `<br>Que pena você perdeu, tente novamente!`;
    }
  }
}
function gerarcartela() {
  let cartela = document.querySelector(".cartela");
  cartela.innerHTML = "";

  let numerosGerados = []; // array para amarmazenar os nummeros

  while (numerosGerados.length < 9) {
    //continuar gerando numeros até ter 9 numeros  unicos
    let numero = Math.floor(Math.random() * 15) + 1;

    //verificar se o numero já foi gerado
    if (!numerosGerados.includes(numero)) {
      numerosGerados.push(numero); // adicionar o numeros ao array

      // criar um elemento div para representar cada numero na cartela
      let box = document.createElement("div");
      box.className = "box";
      box.textContent = numero;
      cartela.appendChild(box);
    }
  }
  verificarcartelajogador(numerosGerados);
}
function tocaraudiovencedor() {
  let audiovencedor = document.getElementById("vencedor");
  audiovencedor.play();
}
function tocaraudioperdedor() {
  let audioperdedor = document.getElementById("perdedor");
  audioperdedor.play();
}
