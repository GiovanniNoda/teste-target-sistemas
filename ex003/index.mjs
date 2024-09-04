import { data } from './data.mjs'

//menor faturamento sem ser 0
const menorFaturamento = data
  .filter(item => item.valor > 0) 
  .reduce((min, item) => item.valor < min ? item.valor : min, data[0].valor)

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi: ${menorFaturamento}`)

//maior faturamento
const maiorFaturamento = data.reduce((max, item) => item.valor > max ? item.valor : max, data[0].valor)

console.log(`O maior valor de faturamento ocorrido em um dia do mês foi: ${maiorFaturamento}`)

//número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
const diasComFaturamento = data.filter(dia => dia.valor > 0)

const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0)

const mediaFaturamento = somaFaturamento / diasComFaturamento.length

console.log(`A média de faturamento dos dias em que a empresa faturou é de ${mediaFaturamento}`)