let num = 0; // Variável que armazena as notas do usuário.
let i = 0; // variável que avalia o número de atividades avaliativas.
let calculo= 0; // Variável que armazena a soma das notas.

do {
    num = parseInt(prompt("Digite números de 0 a 10, por favor. Se quiser parar, digite um número negativo.")); // Pede ao usuário notas de 0 a 10, permitindo encerrar o código e apresentar a média se o usuário digitar um número negativo.
    if (isNaN(num) || num > 10){
        alert("Você não digitou um número válido!") // Indica a invalidez de uma entrada de informação que não seja um número.
    } else if (num < 0) {
        alert("Você optou por parar o código.") // Indica que o usuário parou o código colocando um número negativo.
    } else {
        i++; // Adiciona mais um número ao i.
        calculo = calculo + num; // Indica a soma das notas seguintes.
    }
} while (num > 0 || isNaN(num)) // Repetição do looping.
media = calculo/i // Média dos números obtidos.
alert(`A média das notas é ${media}`) // Resposta ao usuário da média.
 