function cadastro(email, senha, senha1){
  var email_tested = /\S+@\S+\.\S+/;
  if (email_tested.test(email)){
    validate(senha, senha1);
    if (validate == false){
      email.value = email;
    }
  }else{
    alert("email invalido, seu email precisa ter o formato:  XXXX@XXXX.XXX");
    email.value = "123";
  }
}

function validate(senha, senha1){
  if(senha != senha1){
    alert("Senhas incompativeis");
    return false;
  }else{
    alert("Ainda não configurei o banco de dados, mas sua conta seria criada se eu tivesse");
  }
}
