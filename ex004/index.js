const faturamentos = [
    { "estado": "SP", "valor" : 67836.43 },
    { "estado": "RJ", "valor" : 36678.66 },
    { "estado": "MG", "valor" : 29229.88 },
    { "estado": "ES", "valor" : 27165.48 },
    { "estado": "outros", "valor" : 19849.53 }
]

const somaFaturamento = faturamentos.reduce((acc, estado) => acc + estado.valor, 0)

function calcularPorcentagem(local) {
    const faturamentoEstado = faturamentos.find(faturamento => faturamento.estado == local)

    const fatEstadoX100 = faturamentoEstado.valor * 100 

    const porcentagemDeCadaEstado = fatEstadoX100 / somaFaturamento

    console.log(`A porcentagem do faturamento de ${local} em relação ao faturamento total é de ${porcentagemDeCadaEstado.toFixed(2)}%`)
}

calcularPorcentagem('SP')
calcularPorcentagem('RJ')
calcularPorcentagem('MG')
calcularPorcentagem('ES')
calcularPorcentagem('outros')