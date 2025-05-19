let numP = 0; // Cria a variável que armazenará o número positivo.

do {
    numP = parseInt(prompt("Digite um número positivo!")); // Pede ao usuário un número positivo.

    if (isNaN(numP)) {
        alert("Você nem conseguiu digitar um número sequer, eu pedi um número!") // Indica a invalidez de uma entrada de informação que não seja um número.

    } else if (numP >= 0) {
        alert("Parabéns, você digitou um número, muito inteligente em!") // Informa ao usuário que o número digitado é válido.
    }

} while (numP < 0 || (isNaN(numP))); // Verifica e continua o looping se o número for inválido ou negativo.FFf