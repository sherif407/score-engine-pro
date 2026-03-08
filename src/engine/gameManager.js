
import { v4 as uuidv4 } from "uuid"

export function createGame(players){

return {
id:uuidv4(),
players,
startTime:Date.now(),
endTime:null,
rounds:[],
status:"playing"
}
}

export function finishGame(game){

game.endTime = Date.now()
game.status = "completed"
game.duration = game.endTime - game.startTime

return game
}
