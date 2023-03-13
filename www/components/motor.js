

function calcIMC(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var IMC = peso/(altura*altura);
    var nome = document.getElementById('nome').value;
    var estado;
    if(IMC <= 18.5){
        estado = "De Magreza";
    }
    else if((IMC > 18.5) && (IMC <= 24.9)){
        estado = "Saudavel"
    }
    else if((IMC => 25.0) && (IMC < 29.9)){
        estado = "De Sobreso"
    }
    else if((IMC => 30.0) && (IMC < 34.9)){
        estado = "De Obesidade Grau I"
    }
    else if((IMC => 35.0) && (IMC <=39.9)){
        estado = "De Obesidade Grau II"
    }
    else{
        estado = "De Obesidade Grau III";
    }
    document.getElementById('resultado').textContent = nome + ' seu IMC é: '+IMC.toFixed(2) + ' e você está em estado '+estado;


}