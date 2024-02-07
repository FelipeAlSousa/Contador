let contador = document.querySelector('.contar')
let mensagemContagem = document.querySelector('span')
let botaoParar = document.querySelector(".parar")
let contagem = 0
let numeroLimite = sortearLimite()
console.log(numeroLimite)


function sortearLimite() {
    return parseInt(Math.floor(Math.random() * 100))
}

function contar() {
    if(contagem <= 100) {
        setTimeout(contar, 250)
    }
    contagem++
    mensagemContagem.innerHTML = `${contagem}`

    if(contagem > 0) {
        contador.setAttribute('disabled', true)
    }
}

function parar() {
    clearTimeout(contagem)
    if(contagem === numeroLimite) {
        exibirMensagem("Parabéns! Você parou a contagem na hora certa <br> F5 para recomeçar")
    } else if (contagem > numeroLimite) {
        exibirMensagem("Errou! Você parou a contagem tarde demais <br> F5 para recomeçar")
    } else {
        exibirMensagem("Errou! Você parou a contagem antes da hora <br> F5 para recomeçar")
    }
}

function exibirMensagem(texto) {
    let campo = document.querySelector('h2')
    campo.innerHTML = texto
}


contador.addEventListener('click', contar)
botaoParar.addEventListener('click', parar)
