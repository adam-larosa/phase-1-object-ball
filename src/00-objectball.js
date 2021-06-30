function gameObject() {
    const someObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
            	"Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    return someObject
}


function homeTeamName() {
  let object = gameObject()
  return object['home']['teamName']
}

const awayTeamName = () => gameObject().away.teamName

// findPlayer helper function so we Don't Repeat Yourself
// a.k.a. keeping code "DRY"
function findPlayer(name) {

    // O(1) refactor
    const data = gameObject()
    const { home, away } = data // destructuring
    return home.players[name] ? home.players[name] :away.players[name]

    // O(1) solution
    // ---------------
    // let player
    // const data = gameObject()
    // if (data.home.players[name]) {
    //     player = data.home.players[name]
    // }
    // if (data.away.players[name]) {
    //     player = data.away.players[name]
    // }
    // return player

    // O(n)^2 solution
    // -----------------
    // const data = gameObject()
    // for (key in data) {
    //     for (player in data[key].players) {
    //         if (player === name) {
    //             return data[key].players[player].points
    //         }
    //     }
    // }
}


function numPointsScored(name) { // no wet code here.
    return findPlayer(name).points
}

const shoeSize = name => findPlayer(name).shoe // super DRY code!

function teamColors(name){
    const data = gameObject()
    for (key in data) {
        if (data[key].teamName === name) {
            return data[key].colors
        }
    }
}

// otherStuff function created to show array methods used to find certain
// team players

// e.g. otherStuff().home.players.find(e => e.name === "Alan Anderson")
// would return the WHOLE PLAYER OBJECT.  :)
function otherStuff() {
    const theObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [
                {name: "Alan Anderson",
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
            	{name:"Reggie Evans",
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                {name:"Brook Lopez",
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                {name: "Mason Plumlee",
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                {name: "Jason Terry",
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }]
            }
        }
        return theObject
    }
