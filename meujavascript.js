function media(){


var nome = document.getElementById("iNome").value; 
var nota1 = document.getElementById("iNota1").value;
var nota2 = document.getElementById("iNota2").value;

if(nome === ""|| nota1 === "" || nota2 === ""){
    alert("digite todos os campos")
}else{
    var valor1 = parseFloat(nota1);
    var valor2 = parseFloat(nota2);

    var media = (valor1 + valor2) / 2;

    alert("A media do aluno "+nome+": " + media)
    }
}