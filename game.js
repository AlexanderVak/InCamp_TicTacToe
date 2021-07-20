let field = [
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['x', 'o', 'o']
]

let grid =`| ${field[0][0]} | ${field[0][1]} | ${field[0][2]} |
=============
| ${field[1][0]} | ${field[1][1]} | ${field[1][2]} |
=============
| ${field[2][0]} | ${field[2][1]} | ${field[2][2]} |`
;
console.log();
console.log(grid)

function checkGameStatus(field) {
    field.forEach(row => {
        if (row.every()) {            
        }        
    });
    
}
