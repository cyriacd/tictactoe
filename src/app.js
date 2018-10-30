import express from 'express';
import {Game} from './models/game';
const app = express()


//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('src/public'))


//routes
app.get('/', (req, res) => {
	res.render('index')
})

//Listen on port 3000
const server = app.listen(3000)

const games = [];
games.push(new Game(0));
console.log(games[0].isFull());

//socket.io instantiation
const io = require("socket.io")(server)

// const game = new Game();
// game.board.echoBoard();
// game.play('x', 0, 0, 0, 0);
// game.board.echoBoard();

//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')
    socket.on('subscribe', function(data) { socket.join(data.room); })

    socket.on('unsubscribe', function(data) { socket.leave(data.room); })
	//default username
	socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_game', (data) => {
        let currGame = undefined;
        console.log(games);
        // for(let game in games){
        for(let i=0; i<games.length; i++){
            let game = games[i];
            console.log(game);
            if(!game.isFull()){
                currGame = game;
                break;
            }
        }
        if(currGame==undefined){
            currGame = new Game(games.length);    
            games.push(currGame);
        }
        let value = undefined;
        if(currGame.playerX == -1){
            value = 'x';
            currGame.playerX = Math.floor(Math.random()*99);
        }else{
            value = 'y'
            currGame.playerY = Math.floor(Math.random()*99);
            while(currGame.playerY == currGame.playerX){
                currGame.playerY = Math.floor(Math.random()*99);
            }
        }
        currGame.addPlayer();
        socket.emit('join',{gameid: currGame.id, value: value});
        socket.join(`game${currGame.id}`);
        //TO SEND TO EVERYONE EXCEPT SENDER
        socket.to(`game${currGame.id}`).emit('new_player_joined',{game: currGame});
        //TO SEND TO EVERYONE IN ROOM
        // io.in(`game${currGame.id}`).emit('new_player_joined',{game: currGame});
    })

    //listen on typing
    socket.on('play', (data) => {
        // let gameid = data[gameid];
        let currGame = undefined;
        let clientGame = data['game'];
        for(let game in games){
            if(game.id == clientGame.gameid){
                currGame = game;
                break;
            }
        }
        if(currGame != undefined){
            let p = data['point'];
            currGame.play(clientGame.playerid,p[0],p[1],p[2],p[3]);
            data.value = currGame.getValue(clientGame.playerid);
            socket.to(`game${currGame.id}`).emit('update_board',data);
        }
    });
})