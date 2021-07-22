const { it, expect } = require("@jest/globals")
import { moves, hlw, vlw, dw,  cellTaken, isEmptyField, play} from "./game";

const field = {
    lineH: [
        ['x', 'o', 'o'],
        ['o', 'o', 'x'],
        ['x', 'x', 'x'],
    ],
    lineV: [
        ['o', 'x', 'o'],
        ['o', 'x', 'x'],
        ['x', 'x', 'o'],
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
        expect(hlw(field.lineH)).toBeTruthy()
    })
    it('horizontal line on empty field', () => {
        expect(hlw(field.empty)).toBeFalsy()
    })
    it('vertical line win', () => {
        expect(vlw(field.lineV)).toBe(true)
    })
    it('vertical line on empty field', () => {
        expect(vlw(field.empty)).toBe(false)
    })
    it('diagonal win', () => {
        expect(dw(field.diagonal)).toBeTruthy()
    })
    it('diagonal on empty field', () => {
        expect(dw(field.empty)).toBe(false)
    })
    it('is cell taken', () => {
        expect(cellTaken(field.withEmptyCell, [0, 0])).toBeTruthy()
    })
    it('is cell empty', () => {
        expect(cellTaken(field.withEmptyCell, [2, 2])).toBeFalsy()
    })
    it('is field empty', () => {
        expect(isEmptyField(field.empty)).toBeTruthy()
    })
    it('play game by steps', () => {
        expect(play(moves, [['', '', ''], ['', '', ''], ['', '', '']])).toEqual(fieldLineH)
    })
    it('X wins', () => {
        expect(play(field.empty, moves)).toMatch('x wins!')
    })
    it('draws game fie', () => {
        expect(drawGrid(field.empty)).toMatch(filledGrid)
    });
})