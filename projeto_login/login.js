/*
Codigo de validação de formulario de login
*/
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
    else{
        alert("Campos preenchidos com sucesso!")
    }
}

