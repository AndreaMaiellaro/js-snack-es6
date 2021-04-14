//es 1
const bici = [
    {
        'nome': 'alfredo',
        'peso': 10
    },
    {
        'nome': 'gennaro',
        'peso': 15
    },
    {
        'nome': 'ciro',
        'peso': 7
    },
    {
        'nome': 'astolfo',
        'peso': 5
    },
];

const [ biciOne, biciTwo, biciThree, biciFour ] = bici;
console.log(
    'prima',biciOne.peso, 
    'seconda',biciTwo.peso, 
    'terza',biciThree.peso, 
    'quarta',biciFour.peso
);

let biciLeggera = biciOne;
console.log(biciLeggera);

for (let i = 0; i < bici.length; i++ ) {
    const thisBici = bici[i];

    if (thisBici.peso < biciLeggera.peso) {
        biciLeggera = thisBici;
    }
}

console.log(biciLeggera);

const { nome, peso } = biciLeggera;

const testoLiteral = `
    <ul>
        <li>${nome}</li>
        <li>${peso}</li>
    </ul>
`

//es 2
const squadre = [
    {
        'nome': 'Torino',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Inter',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Juve',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        'nome': 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
];

const [ squadreOne, squadreTwo, squadreThree, squadreFour ] = squadre;
console.log(
    squadreOne.nome,
    squadreTwo.nome,
    squadreThree.nome,
    squadreFour.nome
);

for ( let i = 0; i < squadre.length; i++) {

    const thisSquadra = squadre[i];
    var nuoviPunti = Math.floor((Math.random() * 50) + 1);
    var nuoviFalli = Math.floor((Math.random() * 30) + 1);

    console.log(nuoviPunti);
    console.log(nuoviFalli);

    console.log(thisSquadra.nome, 'Falli subiti', nuoviFalli)
}