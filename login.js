function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!email || !senha){
        alert("Favor preencha os campos para acessar o site");
    }
    else{
        window.location.href = "aula2.html";
    }
}
// cria lista de usuario dentro de um array

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById("nomeUser").value = '';

    }
    else{
        alert("Usuário, por favor preencher o campo Nome");
    }
}

// funcão para criação de lista na tabela

function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    // laço de repetição para colocar nomes na tabela
    for(let i=0;i <= (dadosLista.length-1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        
        document.getElementById("tabela").innerHTML = tabela;
    } 
}

function editar(i){

    document.getElementById("nomeUser").value = dadosLista[(i - 1)];

    dadosLista.splice(dadosLista[(i - 1)], 1);

}

function excluir(i){
    dadosLista.splice((i - i), 1);
    document.getElementById('tabela').deleteRow(i);
}