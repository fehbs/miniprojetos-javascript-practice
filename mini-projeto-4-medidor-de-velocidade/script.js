// MEDIDOR DE VELOCIDADE //
// Velocidade máxima de até 70 km.
// A cada 5 km acima do limite você ganha um ponto.
// Usar a função Math.floor() para arredondar o número.
// Caso os pontos sejam maiores que 12 -> "Carteira Suspendida"

verificarVelocidade(70);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log('Ok .');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >= 12)
            console.log('Carteira Suspensa .');
        else
            console.log(`${pontos} pontos .`);    
    }
}



