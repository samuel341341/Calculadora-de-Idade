let anoatual = new Date().getFullYear()

const anoDeNascimento = document.getElementById("ano")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")
botao.addEventListener("click" , function () {calcular(anoDeNascimento)})

function calcular  (ano){
    ano = Number(ano.value)

    let idade = anoatual - ano
    mensagem.innerText=`Sua Idade é ${idade}`
}