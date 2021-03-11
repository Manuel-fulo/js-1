var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
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
// Inserção de um novo paciente
var nomeNovo = document.querySelector("#nome").value;
var pesoNovo = document.querySelector("#peso").value;
var alturaNova = document.querySelector("#altura").value;
var gorduraNova = document.querySelector("#gordura").value;

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener( "click" , function(event){
    event.defaultPrevented();

} 
);


//tabela-pacientes -- add tr


