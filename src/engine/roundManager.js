
export function checkCancelledRound(players){
const misses = players.filter(p=>p.tricks !== p.actual)
return misses.length === 4
}

export function applyWinnerBonus(players){

const winners = players.filter(p=>p.tricks === p.actual)

if(winners.length === 1){
winners[0].score += 10
}

if(winners.length === 3){
const loser = players.find(p=>p.tricks !== p.actual)
loser.score -= 10
}

return players
}
