function jogar() {
 
  const palavras = [
    "javascript", "programacao", "computador", "internet", "teclado",
    "monitor", "algoritmo", "variavel", "funcoes", "array",
    "objeto", "codigo", "software", "hardware", "sistema"
  ];

 
  const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  const letras = palavraSecreta.split("");
  let tabuleiro = Array(letras.length).fill("_"); 

  let tentativas = 6; 

 
  while (tentativas > 0 && tabuleiro.includes("_")) {
   
    let entrada = prompt(
      "Chances restantes: " + tentativas +
      "\nPalavra: " + tabuleiro.join(" ") +
      "\nDigite uma letra:"
    );

    if (!entrada) {
      alert("Você não digitou nada!");
      continue;
    }

    let letra = entrada.trim().toLowerCase();

    if (letras.includes(letra)) {
      for (let i = 0; i < letras.length; i++) {
        if (letras[i] === letra) {
          tabuleiro[i] = letra;
        }
      }
      alert("Boa! A letra '" + letra + "' está na palavra.");
    } else {
      tentativas--;
      alert("A letra '" + letra + "' não está na palavra. Restam " + tentativas + " chances.");
    }
  }

  if (!tabuleiro.includes("_")) {
    alert(" Parabéns, jogador! Você acertou a palavra: " + palavraSecreta);
  } else {
    alert(" Suas chances acabaram! A palavra era: " + palavraSecreta);
  }
}

jogar();
