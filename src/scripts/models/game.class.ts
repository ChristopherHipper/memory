import { Board } from "./board.class";
import { Card } from "./card.class";

export class Game {
    board: Board;
    currentPlayer;
    chosenPlayer;
    opponentPlayer;
    chosenPlayerPoints: number = 0;
    opponentPoints: number = 0;




    constructor(chosenPlayer: string, gameTheme: string, size: number) {
        this.board = new Board(gameTheme, size);
        this.currentPlayer = chosenPlayer;
        this.chosenPlayer = chosenPlayer;
        this.opponentPlayer = this.getOpponent(chosenPlayer);
    }

    start() {
        this.board.shuffleStack()
    }

    getOpponent(chosenPlayer: string): string {
        if (chosenPlayer === 'blue') {
            return 'orange';
        } else {
            return 'blue';
        };
    };


    flipCard(e: PointerEvent) {
        const card = (e.target as HTMLElement).closest(".card") as HTMLElement;
        if (card) {
            card.classList.toggle('is-flipped')
            const selectedCard = this.board.getCard(+card.id)
            selectedCard.isSelected = true;
            this.matchCheck();
        }
    }

    matchCheck(){
        let selectedCards = this.board.stack.filter((card) => card.isSelected)
        if (selectedCards.length <= 1) return;
        if (this.isMatched(selectedCards)) {
            console.log('match');
        } else {
            this.board.stack.forEach((card) => card.isSelected = false)
            selectedCards = []
            console.log(selectedCards);
            
        }
        
    }

    isMatched(selectecCards:Card[]):boolean{
        return selectecCards[0].value === selectecCards[1].value;
    };

    changeCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === this.chosenPlayer ? this.opponentPlayer : this.chosenPlayer;
    };
};