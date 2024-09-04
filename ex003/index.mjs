import { data } from './data.mjs'

const menorFaturamento = data
  .filter(item => item.valor > 0) 
  .reduce((min, item) => item.valor < min ? item.valor : min, data[0].valor);

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi: ${menorFaturamento}`);

