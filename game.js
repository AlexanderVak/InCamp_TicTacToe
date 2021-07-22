let field = [
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['x', 'x', 'x'],
]

export const moves = [[0, 0], [0, 1], [1, 2], [0, 2], [2, 0], [1, 0], [2, 1], [1, 1], [2, 2]]

export function hlw(field) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if(cellTaken(field, [i, j]) && field[i].every((x) => x === field[i][0] )){
                return true
            }
            else continue
        }        
    }
}

export function cellsAreSame(field, firstIndex, secondIndex) {
    if ((field[firstIndex][secondIndex] !== field [firstIndex][0])) {
        return false
    }
    else return true     
}

export function vlw(field) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if(cellTaken(field, [j, i])){
                return cellsAreSame(field, j, i)             
            }
            else continue
        }
    }
}

export function dw(field) {

    for (let i = 0; i < field.length; i++) {
 
        for (let j = field[i].length - 1; j >= 0 ; j--) {
            if (cellTaken(field, [i, i])) {
                return cellsAreSame(field, i, i)
            }
            else if (cellTaken(field, [i, j])) {
                return cellsAreSame(field, i, j)
            }
            else continue
        }
    }
}

export function cellTaken(field, coords) {

    if (field[coords[0]][coords[1]] === '' || field[coords[0]][coords[1]] === ' ' || field[coords[0]][coords[1]] === null) {
        return false
    }
    else return true
}

export function isFieldEmpty(field) {
    return field.every(row => row.every((x) => x === ''))
}

export function play(field, moves) {
    for (let i = 0; i <= 8; i++) {
        if (!cellTaken(field, moves[i])) {
            let player = ''
            if (i % 2 == 0) {
                field[moves[i][0]][moves[i][1]] = 'x'
                player = 'x'
            }
            else {
                field[moves[i][0]][moves[i][1]] = 'o'
                player = 'o'
            }
            checkResults(field, player)
        }
    }    
}


export function checkResults(field, player) {
    if (!isFieldEmpty(field)) {
        if (dw(field) || hlw(field) || vlw(field)) {
            return `${player} wins!`
        }    else{
            return 'It`s a draw !'
        }
    }
}

export function drawGrid(field) {
    return`| ${field[0][0]} | ${field[0][1]} | ${field[0][2]} |
=============
| ${field[1][0]} | ${field[1][1]} | ${field[1][2]} |
=============
| ${field[2][0]} | ${field[2][1]} | ${field[2][2]} |`
}
console.log(drawGrid(field));
