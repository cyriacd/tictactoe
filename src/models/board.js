'use strict'

export class Board{
    constructor(){
        this.create2dArray = (rows, columns, value) => [...Array(rows).keys()].map(i => Array(columns).fill(value))
        this.board = this.create2dArray(3,3,undefined);
        this.board[0][0] = this.create2dArray(3,3,'-');
        this.board[0][1] = this.create2dArray(3,3,'-');
        this.board[0][2] = this.create2dArray(3,3,'-');
        this.board[1][0] = this.create2dArray(3,3,'x');
        this.board[1][1] = this.create2dArray(3,3,'x');
        this.board[1][2] = this.create2dArray(3,3,'x');
        this.board[2][0] = this.create2dArray(3,3,'-');
        this.board[2][1] = this.create2dArray(3,3,'-');
        this.board[2][2] = this.create2dArray(3,3,'-');
    }

    echoBoard(){
        console.log(`_________________________`);
        console.log(`|                       |`);
        console.log(`| ${this.board[0][0][0][0]} ${this.board[0][0][0][1]} ${this.board[0][0][0][2]} | ${this.board[0][1][0][0]} ${this.board[0][1][0][1]} ${this.board[0][1][0][2]} | ${this.board[0][2][0][0]} ${this.board[0][2][0][1]} ${this.board[0][2][0][2]} |`);
        console.log(`| ${this.board[0][0][1][0]} ${this.board[0][0][1][1]} ${this.board[0][0][1][2]} | ${this.board[0][1][1][0]} ${this.board[0][1][1][1]} ${this.board[0][1][1][2]} | ${this.board[0][2][1][0]} ${this.board[0][2][1][1]} ${this.board[0][2][1][2]} |`);
        console.log(`| ${this.board[0][0][2][0]} ${this.board[0][0][2][1]} ${this.board[0][0][2][2]} | ${this.board[0][1][2][0]} ${this.board[0][1][2][1]} ${this.board[0][1][2][2]} | ${this.board[0][2][2][0]} ${this.board[0][2][2][1]} ${this.board[0][2][2][2]} |`);
        console.log(`| ______|_______|______ |`);
        console.log(`|       |       |       |`);
        console.log(`| ${this.board[1][0][0][0]} ${this.board[1][0][0][1]} ${this.board[1][0][0][2]} | ${this.board[1][1][0][0]} ${this.board[1][1][0][1]} ${this.board[1][1][0][2]} | ${this.board[1][2][0][0]} ${this.board[1][2][0][1]} ${this.board[1][2][0][2]} |`);
        console.log(`| ${this.board[1][0][1][0]} ${this.board[1][0][1][1]} ${this.board[1][0][1][2]} | ${this.board[1][1][1][0]} ${this.board[1][1][1][1]} ${this.board[1][1][1][2]} | ${this.board[1][2][1][0]} ${this.board[1][2][1][1]} ${this.board[1][2][1][2]} |`);
        console.log(`| ${this.board[1][0][2][0]} ${this.board[1][0][2][1]} ${this.board[1][0][2][2]} | ${this.board[1][1][2][0]} ${this.board[1][1][2][1]} ${this.board[1][1][2][2]} | ${this.board[1][2][2][0]} ${this.board[1][2][2][1]} ${this.board[1][2][2][2]} |`);
        console.log(`| ______|_______|______ |`);
        console.log(`|       |       |       |`);
        console.log(`| ${this.board[2][0][0][0]} ${this.board[2][0][0][1]} ${this.board[2][0][0][2]} | ${this.board[2][1][0][0]} ${this.board[2][1][0][1]} ${this.board[2][1][0][2]} | ${this.board[2][2][0][0]} ${this.board[2][2][0][1]} ${this.board[2][2][0][2]} |`);
        console.log(`| ${this.board[2][0][1][0]} ${this.board[2][0][1][1]} ${this.board[2][0][1][2]} | ${this.board[2][1][1][0]} ${this.board[2][1][1][1]} ${this.board[2][1][1][2]} | ${this.board[2][2][1][0]} ${this.board[2][2][1][1]} ${this.board[2][2][1][2]} |`);
        console.log(`| ${this.board[2][0][2][0]} ${this.board[2][0][2][1]} ${this.board[2][0][2][2]} | ${this.board[2][1][2][0]} ${this.board[2][1][2][1]} ${this.board[2][1][2][2]} | ${this.board[2][2][2][0]} ${this.board[2][2][2][1]} ${this.board[2][2][2][2]} |`);
        console.log(`|_______________________|`);
    }

    play(value,a,b,c,d){
        if(value == 'x' || value == 'o'){
            this.board[a][b][c][d] = value;
        }
     }

}