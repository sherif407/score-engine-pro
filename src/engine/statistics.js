```javascript
// src/engine/statistics.js

export function calculateStatistics(games){

  const stats = {}

  games.forEach(game => {

    const players = game.players

    players.forEach(player => {

      if(!stats[player]){

        stats[player] = {
          calls:0,
          dashCalls:0,
          riskTaken:0,
          onlyWinner:0,
          onlyLoser:0,
          wins:0,
          losses:0,
          rounds:0,
          winLossRatio:0
        }

      }

    })


    game.rounds.forEach(round => {

      const calls = round.tricks
      const actual = round.actual

      const results = []

      let totalCalls = 0

      calls.forEach(c => {
        if(typeof c === "number"){
          totalCalls += c
        }
      })


      const difference = Math.abs(totalCalls - 13)


      players.forEach((player,index)=>{

        const tricks = calls[index]
        const actualTricks = actual[index]

        const hit = tricks === actualTricks

        results.push({
          player,
          tricks,
          actual:actualTricks,
          hit
        })

      })


      const winners = results.filter(r => r.hit)
      const losers = results.filter(r => !r.hit)


      results.forEach((r,index)=>{

        const playerStats = stats[r.player]

        playerStats.rounds += 1


        // CALL tracking
        if(r.tricks !== "-"){
          playerStats.calls += 1
        }

        // DASH tracking
        if(r.tricks === "-"){
          playerStats.dashCalls += 1
        }


        // RISK tracking
        // Only for LAST PLAYER
        if(index === players.length - 1){

          if(difference > 0 && difference % 2 === 0){

            playerStats.riskTaken += 1

          }

        }


        // WIN / LOSS
        if(r.hit){
          playerStats.wins += 1
        }else{
          playerStats.losses += 1
        }

      })


      // ONLY WINNER
      if(winners.length === 1){

        const p = winners[0].player

        stats[p].onlyWinner += 1

      }


      // ONLY LOSER
      if(losers.length === 1){

        const p = losers[0].player

        stats[p].onlyLoser += 1

      }

    })

  })


  // CALCULATE WIN / LOSS RATIO
  Object.keys(stats).forEach(player => {

    const s = stats[player]

    if(s.losses === 0){
      s.winLossRatio = s.wins
    }else{
      s.winLossRatio = (s.wins / s.losses).toFixed(2)
    }

  })


  return stats

}
```
