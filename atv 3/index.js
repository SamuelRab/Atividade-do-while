let compras = 0; // Variável que armazena os valores digitados.
let i = 0; // variável que avalia o número de atividades avaliativas.
let soma= 0; // Variável que armazena a soma dos valores.

do {
    compras = parseInt(prompt("Digite o valor das compras, se quiser somar, pare e digite zero.")); // Pede ao usuário os valores das compras, permitindo para se o usuário digitar zero.
    if (isNaN(compras) || compras < 0){
        alert("Você não digitou um número válido!") // Indica a invalidez de uma entrada de informação que não seja um número.
    } else if (compras == 0) {
        alert("Você optou por parar o código.") // Indica que o usuário parou o código colocando o zero.
    } else {
        i++; // Adiciona mais um número ao i.
        soma = soma + compras; // Indica a soma dos valores seguintes.
    }
} while (compras > 0 || isNaN(compras)) // Repetição do looping.
alert(`A soma das compras é ${soma}`) // Resposta ao usuário da soma dos valores.
 