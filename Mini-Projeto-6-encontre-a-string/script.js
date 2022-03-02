// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

/*
const filme = {
    titulo : 'Taxi Driver',
    ano : 1976,
    diretor : 'Martin Scorsese',
    protagonista : 'Travis'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}*/

/*
const feira = {
    fruta : 'ameixa',
    valorkg : 5,
    legume : 'pepino',
    precokg : 3,
    verdura : 'alface',
    valor : Number('1')
}

exibirPropiedades(feira);
function exibirPropiedades(obj) {
    for (prop in obj)
    if (typeof obj[prop] === 'string')
    console.log(prop, obj[prop])
}*/

/*
const dadospessoais = {
    nome : 'Luke',
    sobrenome : 'SkyWalker',
    idade : 60,
    altura : 1.73,
    peso : 72,
    profissao : 'Jedi'
}

exibirPropiedades(dadospessoais);
function exibirPropiedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
        console.log(prop, obj[prop])
}*/

/*
const endereco = {
    rua : 'Manoel Pires',
    numero : 13,
    ap : 109,
    bairro: 'meridiano',
    cep : 10233343,
    cidade : 'Jales'        
}

exibirPropiedades(endereco)
function exibirPropiedades(obj) {
    for (prop in obj)
    if (typeof obj[prop] !== 'string')
    console.log(prop, obj[prop])
}*/

const peixaria = {
    frutodomar : 'camarao',
    posta : 'rubalo',
    anchovaprecokg : 2,
    precotainhakg : 27,
    sardinhaprecokg : 19
}

exibirPropriedades(peixaria);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'number')
            console.log(prop, obj[prop])
}







