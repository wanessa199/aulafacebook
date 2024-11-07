
function Cadastrar() {
    const nome = document.getElementById("nome");
    const apelido = document.getElementById("apelido");
    const nascimento = document.getElementById("nascimento");
    const genero = document.getElementById("genero");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const nomeValor = nome.value;
    const apelidoValor = apelido.value;
    const nascimentoValor = nascimento.value;
    const generoValor = genero.value;
    const emailValor = email.value;
    const senhaValor = senha.value;

    if(nomeValor === ""){
        nome.style.borderColor = "red"
        return
      }else{
        
      }
    
}

