export function saveGame(game){

  const games =
    JSON.parse(localStorage.getItem("games") || "[]")

  games.push(game)

  localStorage.setItem("games",JSON.stringify(games))
}

export function getGames(){
  return JSON.parse(localStorage.getItem("games") || "[]")
}
