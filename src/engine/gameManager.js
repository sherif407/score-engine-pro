export function createGame(players){

  const now = new Date()

  const id =
    now.toISOString().replace(/[-:T]/g,"").slice(0,14) +
    "-" +
    Math.random().toString(36).substring(2,6).toUpperCase()

  return {
    id,
    players,
    startTime:Date.now(),
    rounds:[],
    status:"playing"
  }
}

export function finishGame(game){

  game.endTime = Date.now()
  game.duration = game.endTime - game.startTime
  game.status = "completed"

  return game
}
