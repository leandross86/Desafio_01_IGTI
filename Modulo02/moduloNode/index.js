import operacoes from './operacoes.js';
import multiplicacao from './operacoes2.js';
import { divisao, resto } from './operacoesNomeadas.js';

console.log(operacoes.sum(2, 3));
console.log(operacoes.sub(6, 9));
console.log(operacoes.nome);
console.log(multiplicacao(3, 4));
console.log(divisao(16, 4));
console.log(resto(50, 11));