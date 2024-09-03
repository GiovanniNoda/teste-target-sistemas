const chosenNumber = parseInt(window.prompt('Digite um número:'))

function fibonacci() {
    let secondToLast = 0
    let lastTerm = 1

    if (chosenNumber === 0 || chosenNumber === 1) {
        window.alert(`O número ${chosenNumber} pertence à sequência de Fibonacci e está na posição ${chosenNumber === 0 ? 1 : '2 e 3'}`)
        return
    }

    for (let positionNumber = 3; lastTerm < chosenNumber; positionNumber++) {
        let auxVar = secondToLast + lastTerm
        secondToLast = lastTerm
        lastTerm = auxVar

        if (lastTerm === chosenNumber) {
            window.alert(`O número ${chosenNumber} pertence à sequência de Fibonacci e está na posição ${positionNumber}`)
            return
        }
    }
    
    window.alert(`O número ${chosenNumber} não pertence à sequência de Fibonacci`)
}

fibonacci()
