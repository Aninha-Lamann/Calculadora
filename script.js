const inputnum1 = document.querySelector("#num1");
const inputnum2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

function somar(num1, num2) {
    let soma = Number(inputnum1.value) + Number(inputnum2.value);
    resultado.innerHTML = `O resultado da soma é:<strong> ${soma} </strong>`;
    resultado.style.height = "50px";
}

function sub(num1, num2) {
    let sub = Number(inputnum1.value) - Number(inputnum2.value);
    resultado.innerHTML = `O resultado da subtração é:<strong> ${sub} </strong>`;
    resultado.style.height = "50px";
}

function mult(num1, num2) {
    let mult = Number(inputnum1.value) * Number(inputnum2.value);
    resultado.innerHTML = `O resultado da multiplicação é:<strong> ${mult} </strong>`;
    resultado.style.height = "50px";
}

function div(num1, num2) {
    let div = Number(inputnum1.value) / Number(inputnum2.value);
    resultado.innerHTML = `O resultado da divisão é:<strong> ${div} </strong>`;
    resultado.style.height = "50px";
}