export function applyRoundBonuses(players){

  const winners = players.filter(p => p.tricks === p.actual)

  if(winners.length === 1){
    winners[0].score += 10
  }

  if(winners.length === 3){
    const loser = players.find(p => p.tricks !== p.actual)
    loser.score -= 10
  }

  return players
}

export function isCancelled(players){
  return players.every(p => p.tricks !== p.actual)
}
