export class Game {
    chosenPlayer;
    gameTheme;
    boardSize;
    currentPlayer;
    opponent;
    chosenPlayerPoints;
    opponentPoints;
    stack: string[];

    constructor(chosenPlayer: string, gameTheme: string, size: number) {
        this.stack = []
        this.chosenPlayer = chosenPlayer;
        this.gameTheme = gameTheme;
        this.boardSize = size
        this.currentPlayer = chosenPlayer;
        this.opponent = this.getOpponent(chosenPlayer);
        this.chosenPlayerPoints = 0
        this.opponentPoints = 0
        this.createStack();
    }

    getOpponent(chosenPlayer: string): string {
        if (chosenPlayer === 'blue') {
            return 'orange';
        } else {
            return 'blue';
        };
    };

    createStack() {
        for (let i = 0; i < 2; i++) {
            for (let index = 0; index < this.boardSize / 2; index++) {
                this.stack.push(this.gameTheme + '-' + (index + 1));
            };
        };
        this.shuffleStack();
    };

    shuffleStack() {
        this.stack.sort(() => Math.random() - 0.5);
        console.log(this.stack);
    };
};