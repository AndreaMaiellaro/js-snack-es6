//es 1
var bici = [
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

var [ biciOne, biciTwo, biciThree, biciFour ] = bici;
console.log(
    'prima',biciOne.peso, 
    'seconda',biciTwo.peso, 
    'terza',biciThree.peso, 
    'quarta',biciFour.peso
);



var biciLeggera = biciOne;
console.log(biciLeggera);

for (var i = 0; i < bici.length; i++ ) {
    var thisBici = bici[i]

    if (thisBici.peso < biciLeggera.peso) {
        biciLeggera = thisBici;
    }
}

console.log(biciLeggera);

//es 2
// var squadre = [
//     {
//         'nome': 'Torino',
//         'punti fatti': 0,
//         'falli subiti': 0
//     },
//     {
//         'nome': 'Inter',
//         'punti fatti': 0,
//         'falli subiti': 0
//     },
//     {
//         'nome': 'Juve',
//         'punti fatti': 0,
//         'falli subiti': 0
//     },
//     {
//         'nome': 'Milan',
//         'punti fatti': 0,
//         'falli subiti': 0
//     },
// ];


// for ( var i = 0; i < squadre.length; i++) {
//     var nuoviPunti = Math.floor((Math.random() * 50) + 1);
//     var nuoviFalli = Math.floor((Math.random() * 30) + 1);

//     console.log(nuoviPunti);
//     console.log(nuoviFalli);

//     var thisSquadra = squadre[i];

// }