let nome = ""; // Variável que armazena o nome.
let sobrenome = ""; // Variável que armazena o sobrenome.

do{
    nome = prompt("Digite o seu primeiro nome"); // Pede para o usuário digitar seu primeiro nome.

    if (!isNaN(nome) || nome == "") {
        alert("Você não digitou o seu nome") // Indica se o usuário não digitou seu nome.
    } else {
       sobrenome = prompt("Digite o seu sobrenome agora");{ // Pede para o usuário digitar seu sobrenome.
        if (!isNaN(sobrenome || sobrenome == "" )) {
            alert("Você não digitou o seu nome") // Indica se o usuário não digitou seu sobrenome.
       }
    }}

}while (!isNaN(nome || nome == "")) // Repetição do looping.
    alert(nome) // Informa ao usuário seu nome.
    alert(sobrenome) // Informa oa usuário o seu sobrenome.
