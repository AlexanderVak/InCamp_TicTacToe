const { it, expect } = require("@jest/globals")
import { moves, lineWictory, vlw, diagonalWictory,  cellTaken, fieldIsEmpty, play, drawGrid, transpose, fieldIsFull} from "./game";

const field = {
    lineH: [
        ['x', 'o', 'o'],
        ['o', 'o', 'x'],
        ['x', 'x', 'x'],
    ],
    transposeLineH:[
        ['x', 'o', 'x'],
        ['o', 'o', 'x'],
        ['o', 'x', 'x'],
    ],
    lineV: [
        ['o', 'x', 'o'],
        ['o', 'x', 'x'],
        ['x', 'x', 'o'],
    ],
    transposeLineV:[
        ['o', 'o', 'x'],
        ['x', 'x', 'x'],
        ['o', 'x', 'o'],
    ],
    diagonal:[
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'x'],
    ],
    withEmptyCell:[
        ['x', 'o', 'o'],
        ['x', 'x', 'x'],
        ['o', 'o', ''],
    ],
    withOneTakenCell:[
        ['x', '', ''],
        ['', '', ''], 
        ['', '', '']
    ],
    empty:[
        ['', '', ''],
        ['', '', ''], 
        ['', '', '']
    ]
}

const filledGrid = `| x | o | o |
=============
| o | o | x |
=============
| x | x | x |`

const grid = `| ${field.empty} | ${field.empty} | ${field.empty} |
=============
| ${field.empty} | ${field.empty} | ${field.empty} |
=============
| ${field.empty} | ${field.empty} | ${field.empty} |`

describe('tic-tac-toe', () => {
    it('horizontal line win', () => {
        expect(lineWictory(field.lineH)).toBeTruthy()
    })
    it('horizontal line on empty field', () => {
        expect(lineWictory(field.empty)).toBe(false)
    })
    it('vertical line win', () => {
        expect(lineWictory(transpose(field.lineV))).toBe(true)
    })
    it('vertical line on empty field', () => {
        expect(lineWictory(transpose(field.empty))).toBe(false)
    })
    it('vertical lose on hline field', () => {
        expect(lineWictory(transpose(field.lineH))).toBe(false)
    })
    it('diagonal win', () => {
        expect(diagonalWictory(field.diagonal)).toBeTruthy()
    })
    it('diagonal lose on line win field', () => {
        expect(diagonalWictory(transpose(field.lineH))).toBe(false)
    })
    it('is cell taken', () => {
        expect(cellTaken(field.withEmptyCell, [0, 0])).toBeTruthy()
    })
    it('is cell empty', () => {
        expect(cellTaken(field.withEmptyCell, [2, 2])).toBeFalsy()
    })
    it('is field empty', () => {
        expect(fieldIsEmpty(field.empty)).toBeTruthy()
    })

    it('is field full', () => {
        expect(fieldIsFull(field.diagonal)).toBeTruthy()
    })
    it('play game by steps', () => {
        expect(play(field.empty, moves)).toEqual(field.lineH)
    })
    it('X wins', () => {
        expect(play(field.empty, moves)).toMatch('x wins!')
    })
    it('returns transposed field', () => {
        expect(transpose(field.lineH)).toEqual(field.transposeLineH)
    });
    it('draws game field', () => {
        expect(drawGrid(field.lineH)).toMatch(filledGrid)
    });
})