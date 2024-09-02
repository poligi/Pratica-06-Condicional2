/*
Reescreva o exercício 3, utilizando apenas o SWITCH. 
*/

let diaDaSemana = parseInt(prompt("Digite um dia da semana (1 a 7):"))

switch (diaDaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Dia da semana não reconhecido.")
        break
}