let field = [
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['x', 'x', 'x'],
]

export const moves = [[0, 0], [0, 1], [1, 2], [0, 2], [2, 0], [1, 0], [2, 1], [1, 1], [2, 2]]

export function lineWictory(field) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (cellTaken(field, [i, j]) && field[i].every((x) => x === field[i][0])) {
                return true
            }
        }
    }
    return false
}

export function transpose(field) {
    let transpose = [[], [], []]
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            transpose[j][i] = field[i][j]
        }
    }
    return transpose
}

export function diagonalWictory(field) {

    for (let i = 1; i < field.length; i++) {
        if ((field[i][i] !== field[0][0])) {
            return false
        }
    }
    return true
}

export function cellTaken(field, coords) {

    if (field[coords[0]][coords[1]] === '' || field[coords[0]][coords[1]] === ' ' || field[coords[0]][coords[1]] === null) {
        return false
    }
    else return true
}

export function fieldIsEmpty(field) {
    return field.every(row => row.every((cell) => cell === ''))
}

export function fieldIsFull(field) {
    return field.every(row => row.every((cell) => cell === 'x' || cell === 'o'))
}

export function play(field, moves) {
    let index = 0
    let results = ''

    while (!fieldIsFull(field)) {
        if (!cellTaken(field, moves[index])) {
            let player = ''
            if (index % 2 == 0) {
                field[moves[index][0]][moves[index][1]] = 'x'
                player = 'x'
            }
            else {
                field[moves[index][0]][moves[index][1]] = 'o'
                player = 'o'
            }
            results = checkResults(field, player)
        }
        index ++
    }
    return results

    // for (let i = 0; i < 9; i++) {
    //     if (!cellTaken(field, moves[i])) {
    //         let player = ''
    //         if (i % 2 == 0) {
    //             field[moves[i][0]][moves[i][1]] = 'x'
    //             player = 'x'
    //         }
    //         else {
    //             field[moves[i][0]][moves[i][1]] = 'o'
    //             player = 'o'
    //         }
    //         checkResults(field, player)
    //     }
    // }
}
export function checkResults(field, player) {
    if (!fieldIsEmpty(field)) {
        if (lineWictory(field) || lineWictory(transpose(field)) || diagonalWictory(field) || diagonalWictory(transpose(field))) {
            return `${player} wins!`
        }else if (fieldIsFull(field)) {
            return 'It`s draw!'        
        }
    }
}

export function drawGrid(field) {
    return `| ${field[0][0]} | ${field[0][1]} | ${field[0][2]} |
=============
| ${field[1][0]} | ${field[1][1]} | ${field[1][2]} |
=============
| ${field[2][0]} | ${field[2][1]} | ${field[2][2]} |`
}

