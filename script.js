function cadastro(email, senha, senha1){
  var email_tested = /\S+@\S+\.\S+/;
  if (email_tested.test(email)){
    validate(senha, senha1);
    if (validate == false){
      email.value = email;
    }
  }else{
    alert("email invalido");
    email.value = "123";
  }
}

function validate(senha, senha1){
  if(senha != senha1){
    alert("Senhas incompativeis");
    return false;
  }else{
    alert("senhas compativeis");
  }
}
