let saldo = 550; // Saldo simbólico inicial.
let saque; // Variável que armazena o saque.

do {
    saque = prompt("Seu saldo é: R$" + saldo + "Quanto deseja sacar?"); // Mostra ao usuário o seu saldo e pergunta quanto deseja sacar.
    saque = Number(saque); // Indica a validez da variável saque como número.

    if (saque <= saldo) {
        saldo = saldo - saque;
        alert("Saque concluido, Novo saldo: R$" + saldo); // Se o saque for menor ou igual ao saldo, então ocorrerá a diferença entre o saldo e o saque. informando ao usuário o novo saldo.
    } else
        alert("Saldo insuficiente. Tente outro valor."); // Se não ocorrer a primeira a opção, o código informará que o saldo é insuficiente.

    } while (saldo > 0); // Repetição do looping.

    alert("Seu saldo zerou em, sem dinheiro!"); // Fim do código após acabar o saldo.

