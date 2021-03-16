var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var form = document.querySelector("#form-adiciona")
// obtem dados do form 
var paciente = obtemDadosForm(form);
var pacientes = document.querySelectorAll(".paciente"); // cria um array com todos os elementos com a classe .paciente no html
// Validação do peso e altura
for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        paciente.classList.add("campo-invalido");
        tdImc.textContent = "Peso inválido";
        
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        paciente.classList.add("campo-invalido");
        tdImc.textContent = "Altura inválida";
        
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        
    }

}
var form = document.querySelector("#form-adiciona");

var linha = document.createElement("tr");
var coluna = document.createElement("td");
linha.appendChild(coluna);
form.appendChild(linha);

coluna.textContent = "TO AQUI, OLHA AQUI Ó";
console.log(document);
//var nomeNovo = document.querySelector("#nome").textContent;
//var pesoNovo = document.querySelector("#peso").textContent;
//var alturaNova = document.querySelector("#altura").textContent;
//var gorduraNova = document.querySelector("#gordura").textContent;

//var botao = document.querySelector("#adicionar-paciente");
//botao.addEventListener( "click" , function(event ){
  //  event.defaultPrevented();


//});

//tabela-pacientes -- add tr
function obtemDadosForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

