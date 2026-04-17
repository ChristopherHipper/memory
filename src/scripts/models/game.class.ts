import { Board } from "./board.class";
import { Card } from "./card.class";
import { UI } from "./UI.class";

export class Game {
    board: Board;
    gameUI: UI;
    currentPlayer;
    chosenPlayer;
    opponentPlayer;
    chosenPlayerPoints: number = 0;
    opponentPoints: number = 0;
    timeout = false




    constructor(chosenPlayer: string, gameTheme: string, size: number) {
        this.board = new Board(gameTheme, size);
        this.gameUI = new UI();
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
            const selectedCard = this.board.getCard(+card.id)
            if (this.isValidSelection(selectedCard)) return
            if (this.timeout) return;
            this.gameUI.flipAnimation(card);
            this.matchCheck(selectedCard);
        };
    };

    isValidSelection(card: Card) {
        return card.isSelected || card.isMatched
    }

    matchCheck(selectedCard: Card) {
        selectedCard.isSelected = true;
        let selectedCards = this.board.stack.filter((card) => card.isSelected)
        if (selectedCards.length <= 1) return;
        if (this.isMatched(selectedCards)) {
            this.match(selectedCards)
        } else {
            this.noMatch(selectedCards)
        };
    };

    match(selectedCards: Card[]) {
        selectedCards.forEach(card => {
            card.isMatched = true
            card.isSelected = false
        });
        this.gameUI.matchHighlight();
        selectedCards = [];
        this.currentPlayer === this.chosenPlayer ? this.chosenPlayerPoints++ : this.opponentPoints++;
        this.gameUI.updatePoints()
    }

    noMatch(selectedCards: Card[]) {
        this.board.stack.forEach((card) => card.isSelected = false);
        this.timeout = true;
        setTimeout(() => {
            this.gameUI.flipReverseAnimation();
            selectedCards = [];
            this.changeCurrentPlayer();
            this.gameUI.updateCurrentPlayer(this.currentPlayer, this.board.gameTheme);
            this.timeout = false;
        }, 500);
    }

    isMatched(selectecCards: Card[]): boolean {
        return selectecCards[0].value === selectecCards[1].value;
    };

    changeCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === this.chosenPlayer ? this.opponentPlayer : this.chosenPlayer;
    };
};