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
