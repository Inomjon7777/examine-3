/*
    input: [1, 1, 2] 
    output: [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1]
    ]

    input: [1, 2, 3] 
    output: [
        [1, 2, 3],ok
        [1, 3, 2],ok
        [2, 1, 3],ok
        [2, 3, 1],ok
        [3, 1, 2],ok
        [3, 2, 1]
    ]
*/

let tempArray = [];
let array = [1, 1, 2];

tempArray.push([array[0], array[1], array[2]], [array[0], array[2], array[1]], [array[2], array[1], array[0]]);
console.log(tempArray);

let tempMassiv = [];
let massiv = [1, 2, 3];

tempMassiv.push(
        [massiv[0], massiv[1], massiv[2]], [massiv[0], massiv[2], massiv[1]], [massiv[1], massiv[0], massiv[2]], [massiv[1], massiv[2], massiv[0]], [massiv[2], massiv[0], massiv[1], ], [massiv[2], massiv[1], massiv[0]]

    ),
    console.log(tempMassiv);