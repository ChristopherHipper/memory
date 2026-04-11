export class Game {
    chosenPlayer;
    gameTheme;
    boardSize;
    currentPlayer;
    opponent;
    chosenPlayerPoints;
    opponentPoints;

    constructor(chosenPlayer: string, gameTheme: string, size: string) {
        this.chosenPlayer = chosenPlayer;
        this.gameTheme = gameTheme;
        this.boardSize = size
        this.currentPlayer = chosenPlayer;
        this.opponent = this.getOpponent(chosenPlayer);
        this.chosenPlayerPoints = 0 
        this.opponentPoints = 0 
    }

    getOpponent(chosenPlayer:string):string{
        if (chosenPlayer === 'blue') {
            return 'orange'
        } else {
            return 'blue'
        }
    }
}