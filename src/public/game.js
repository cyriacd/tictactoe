$(function(){
    //make connection
    class GameData {
        constructor(gameid, value, playerid){
            this.gameid = gameid;
            this.value = value;
            this.playerid = playerid;
        }
    }
    let game = new GameData(-1,-1,-1);
    let socket = io.connect('http://localhost:3000')
    let newGameButton = $("#start-game");
    let waiting = $('#waiting');
    waiting.hide();

    $(".square").click((data) => {
        console.log(data.target.id);
        socket.emit('play',{
            game: game,
            point: data.target.id.split()
        })
    });

    newGameButton.click((data)=> {
        socket.emit('new_game',null);
    });

    socket.on('update_board', (data) => console.log(data))

    socket.on('new_player_joined', (data) => {
        console.log("new player joined");
        waiting.hide();
        // if(data.game.players<2){
        //     waiting.show();
        // }else{
        //     waiting.hide();
        // }
        $('body').append(data.game);
    });
    socket.on('join', (data) => {
        game.gameid = data['gameid'];
        game.value = data['value'];
        newGameButton.hide();
        // socket.emit("subscribe", { room: `game${game.gameid}` });
        // socket.join(`game${gameid}`,function(){
        //     console.log(`joined room ${gameid}`);
        // });
        alert(`game ${game.gameid} value ${game.value}`);
    });
//  //Emit message
//     send_message.click(function(){
//         socket.emit('new_message', {message : message.val()})
//     })

    //Listen on new_message
    socket.on("play", (data) => {
        
    })

    // //Emit a username
    // send_username.click(function(){
    //     socket.emit('change_username', {username : username.val()})
    // })

    // //Emit typing
    // message.bind("keypress", () => {
    //     socket.emit('typing')
    // })

    //Listen on typing
    socket.on('typing', (data) => {
        feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
    })
});