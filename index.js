/* Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */


function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
        console.log('Substituindo ${array[i]} por 0...');
        array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 2, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(null));