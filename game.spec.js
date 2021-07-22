const { it, expect } = require("@jest/globals")
import { moves, hlw, vlw, dw,  cellTaken, isFieldEmpty, play, drawGrid} from "./game";

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
        expect(hlw(field.empty)).toBeUndefined()
    })
    it('vertical line win', () => {
        expect(vlw(field.lineV)).toBe(true)
    })
    it('vertical line on empty field', () => {
        expect(vlw(field.empty)).toBeUndefined()
    })
    it('diagonal win', () => {
        expect(dw(field.diagonal)).toBeTruthy()
    })
    it('diagonal on empty field', () => {
        expect(dw(field.empty)).toBeFalsy()
    })
    it('diagonal lose on line win field', () => {
        expect(dw(field.lineH)).toBeTruthy()
    })
    it('is cell taken', () => {
        expect(cellTaken(field.withEmptyCell, [0, 0])).toBeTruthy()
    })
    it('is cell empty', () => {
        expect(cellTaken(field.withEmptyCell, [2, 2])).toBeFalsy()
    })
    it('is field empty', () => {
        expect(isFieldEmpty(field.empty)).toBeTruthy()
    })
    it('play game by steps', () => {
        expect(play(field.empty, moves)).toEqual(field.lineH)
    })
    it('X wins', () => {
        expect(play(field.empty, moves)).toMatch('x wins!')
    })
    it('draws game field', () => {
        expect(drawGrid(field.lineH)).toMatch(filledGrid)
    });
})