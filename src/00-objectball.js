
function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12,
                    steals: 3, blocks: 1, slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12,
                    steals: 12, blocks: 12, slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10,
                    steals: 3, blocks: 1, slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6,
                    steals: 3, blocks: 8, slamDunks: 5
                },
                "Jason Terry": {
                    number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2,
                    steals: 4, blocks: 11, slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1,
                    steals: 2, blocks: 7, slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7,
                    steals: 7, blocks: 15, slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12,
                    steals: 4, blocks: 5, slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2,
                    steals: 1, blocks: 1, slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12,
                    steals: 22, blocks: 5, slamDunks: 12
                }
            }
        }
    }
}


function numPointsScored( player_name ) {
    const found = findPlayer( player_name )
    if ( found ) return found.points
}



function shoeSize( player_name ) {
    const found = findPlayer( player_name )
    if ( found ) return found.points
}



function findPlayer( player_name ) {
    const theGame = gameObject()
    for ( team in theGame ) {
        const wholeTeam = theGame[team].players
        for ( player in  wholeTeam ) {
           if ( player === player_name ) {
               return wholeTeam[player]
           }
        }
    }

    // if ( theGame.home.players[player_name] ) {
    //     return theGame.home.players[player_name].points
    // } else if ( theGame.away.players[player_name] ){
    //     return theGame.away.players[player_name].points
    // } else {
    //     return undefined
    // }
}


// another helper! 
function findTeam( team_name ) {
    const theGame = gameObject()
    for ( team in theGame ) {
        if ( theGame[team].teamName === team_name ) {
            return theGame[team]
        }
    }
}




function teamColors( team_name ) {
    // that takes in an argument of the team name and returns an array of 
    // that teams colors.
    // const theGame = gameObject()
    // for ( team in theGame ) {
    //     if ( theGame[team].teamName === team_name ) {
    //         return theGame[team].colors
    //     }
    // }
    const found = findTeam( team_name )
    if ( found ) return found.colors
}





/*
Build a function, teamNames, that operates on the game object to return an 
array of the team names.*/
const teamNames = () => 
    Object.values( gameObject() ).map( gameObj => gameObj.teamName )




/*
Build a function, playerNumbers, that takes in an argument of a team name and 
returns an array of the jersey number's for that team.
*/
const playerNumbers = team_name => {
   
    const found = findTeam( team_name )
    
    if ( found ) return Object.values( found.players ).map( obj => obj.number )

    //loop through team to create array of numbers
}

const playerStats = player_name => findPlayer( player_name )


