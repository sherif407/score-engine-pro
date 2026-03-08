export function calculateStats(games){

  const stats = {}

  games.forEach(game =>{

    game.players.forEach(p =>{

      if(!stats[p]){
        stats[p]={
          calls:0,
          with:0,
          dash:0,
          super:0,
          wins:0,
          losses:0
        }
      }

    })

  })

  return stats
}
