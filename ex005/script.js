const palavra = window.prompt('Digite uma palavra:')

function inverterPalavra() {
    const arrayDeLetras = palavra.split('')
    let arrayDeLetrasInvertidas = []
    
    for (let i = arrayDeLetras.length - 1; i >= 0; i--) {
        arrayDeLetrasInvertidas.push(arrayDeLetras[i])
    }
    const palavraIvertida = arrayDeLetrasInvertidas.join('')

    window.alert(`A palavra escolhida invertida fica: ${palavraIvertida}`)
}

inverterPalavra()