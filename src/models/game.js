'use strict'
import {Board} from './board';
import {Player} from './player';
export class Game {
    constructor(id){
        this.id = id;
        this.players = 0;
        this.playerX = -1;
        this.playerY = -1;
        this.board = new Board();
    }
    isFull(){
        return this.players>=2;
    }
    addPlayer(){
        return this.players = this.players +1;
    }
    play(value,a,b,c,d){
        this.board.play(value, a, b, c, d);
    }
    getValue(playerid){
        if(playerid == this.playerX){
            return 'x';
        }else if(playerid == this.playerY){
            return 'y';
        }else{
            return '-'
        }
    }
}
