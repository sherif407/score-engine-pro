export function rankPlayers(players){

  return players.sort((a,b)=>b.score - a.score)
}
