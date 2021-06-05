
function clique() {
    document.getElementById("msg").innerHTML = "<div class=\"alert alert-success\"><b><i class=\"bi bi-check2-circle\"></i> Obrigado por clicar.</b></div>";
    console.clear();
    console.log(0);
    //alert("Obrigado por clicar.");
}

function limpar() {
    document.getElementById("msg").innerHTML = "";
    console.clear();
    console.log(1);
}

function redirect() {
    window.open("https://github.com/kdpsa");
    //window.location.href = "https://github.com/kdpsa";
    console.clear();
    console.log(10)
}

function trocar(elemento) {
    //alert("Trocar texto.")
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    console.clear();
    console.log(11);
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
    console.clear();
    console.log(100);
}

function load() {
    alert("Página carregada.");
    console.clear();
    console.log(101);
}

function change(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

//alert(soma(5, 23));

var validar;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite sua idade:")
validaIdade(idade);
console.log(validar)
*/

/*
var data = new Date();
var dia = data.getDay()-1;
var mes = data.getMonth()+1;
var ano = data.getFullYear();
alert("Data de hoje: " + dia + "/" + mes + "/" + ano);
*/

/*
var count;
for (count = 1; count <= 5; count++) {
    alert(count);
    console.log(count)
}
*/

/*
var count = 1;

while (count <= 5) {
    console.log(count);
    alert(count)
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?")

if (idade >= 18) {
    alert("Maior de idade.")
} else {
    alert("Menor de idade.")
}
*/

/*

//Dicionário em JS (JSON)

var frutas = [
    { nome:"maçã", cor:"vermelha" },
    { nome: "uva", cor: "roxa" },
    { nome: "pêra", cor: "verde" },
    { nome: "laranja", cor: "laranja" },
]

console.log(frutas)
alert(frutas[1].nome)
*/

//var fruta = { nome:"maçã", cor:"vermelha" }

//console.log(fruta.nome)
//alert(fruta.cor)

//var lista = ["maçã", "pêra", "laranja"]
//lista.push("uva");
//lista.pop()
//console.log(lista.reverse())
//console.log(lista)
//console.log(lista.toString());
//console.log(lista.join(" | "))
//console.log(lista.reverse())
//console.log(lista.length)

/*
var idade = 25
var idade2 = 10
var n1 = 25;
var n2 = 10;
var nome = "Carlos Eduardo";
var frase = "Japão é o melhor time do mundo"
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(frase.replace("Japão", "Brasil"))
alert(frase.replace("Japão", "Brasil"))
alert(nome +  " tem " + idade + " anos.");
alert(idade + idade2)
console.log(idade)
console.log(nome)
console.log(n1 * n2)

*/