let nome = "";
let sobrenome = "";

do{
    nome = prompt("Digite o seu primeiro nome");

    if (!isNaN(nome) || nome == "") {
        alert("Você não digitou o seu nome")
    } else {
       sobrenome = prompt("Digite o seu sobrenome agora");{
        if (!isNaN(sobrenome || sobrenome == "" )) {
            alert("Você não digitou o seu nome")
       }
    }}

}while (!isNaN(nome || nome == ""))
    alert(nome)
    alert(sobrenome)