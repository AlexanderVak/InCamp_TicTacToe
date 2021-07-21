const { it, expect } = require("@jest/globals")
let fieldLineH = [
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['x', 'x', 'x'],
]
let fieldLineV = [
    ['o', 'x', 'o'],
    ['o', 'x', 'x'],
    ['x', 'x', 'o'],
]
let fieldDiagonal = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['o', 'x', 'x'],
]

let fieldWithEmpty = [
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['x', 'x', ''],
]
let moves = [[0, 0], [0, 1], [1, 2], [0, 2], [2, 0], [1, 0], [2, 1], [1, 1], [2, 2]]

function hlw(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return true
        }
    }
}

function vlw(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return true
        }
    }
}

function dw(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]
        || field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return true
    }
}

function cellTaken(field, coords) {

    if (field[coords[0]][coords[1]] === '' || field[coords[0]][coords[1]] === ' ' || field[coords[0]][coords[1]] === null) {
        return false
    }
    else return true
}

function play(moves, field) {
    for (let i = 0; i < 9; i++) {
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
        }
    }
    return field
}

function checkResults(field, moves, player) {
    if (dw(field) || hlw(field) || vlw(field)) {
        
    }
}

describe('tic-tac-toe', () => {
    it('horizontal line win', () => {
        expect(hlw(fieldLineH)).toBe(true)
    })
    it('vertical line win', () => {
        expect(vlw(fieldLineV)).toBe(true)
    })
    it('diagonal win', () => {
        expect(dw(fieldDiagonal)).toBe(true)
    })
    it('is cell taken', () => {
        expect(cellTaken(fieldWithEmpty, [0, 0])).toBe(true)
    })
    it('is cell empty', () => {
        expect(cellTaken(fieldWithEmpty, [2, 2])).toBe(false)
    })
    it('play game by steps', () => {
        expect(play(moves, [['', '', ''], ['', '', ''], ['', '', '']])).toEqual(fieldLineH)
    })
})