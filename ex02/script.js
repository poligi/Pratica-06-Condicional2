/*
Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. 
*/

let idade = parseInt(prompt("Digite sua idade:"))
let habilitacao = prompt("Você possui habilitação (S ou N?")

if (idade >= 18 && habilitacao === 'S') {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}