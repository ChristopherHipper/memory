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
    };

    start() {
        this.board.shuffleStack();
    };

    getOpponent(chosenPlayer: string): string {
        return chosenPlayer === 'blue' ?  'orange' : 'blue';
    };


    handleCardClick(e: PointerEvent) {
        const clickedElement = (e.target as HTMLElement).closest(".card") as HTMLElement;
        if (clickedElement) {
            const card = this.board.getCard(+clickedElement.id);
            card.DOMelement = clickedElement;
            if (this.isValidSelection(card)) return;
            if (this.timeout) return;
            this.gameUI.flipAnimation(card);
            this.matchCheck(card);
        };
    };

    isValidSelection(card: Card):boolean {
        return card.isSelected || card.isMatched;
    };

    matchCheck(card: Card) {
        card.isSelected = true;
        let selectedCards = this.board.stack.filter((card) => card.isSelected);
        if (selectedCards.length <= 1) return;
        if (this.isMatched(selectedCards)) {
            this.match(selectedCards);
        } else {
            this.noMatch(selectedCards);
        };
    };

    match(selectedCards: Card[]) {
        selectedCards.forEach(card => {
            card.isMatched = true;
            card.isSelected = false;
            this.gameUI.matchHighlight(card);
        });
        selectedCards = [];
        this.score();
    };

    score() {
        this.currentPlayer === this.chosenPlayer ? this.chosenPlayerPoints++ : this.opponentPoints++;
        this.gameUI.updatePoints(this.chosenPlayerPoints, this.opponentPoints);
    };

    noMatch(selectedCards: Card[]) {
        this.timeout = true;
        setTimeout(() => {
            selectedCards.forEach((card) => {
                card.isSelected = false;
                this.gameUI.flipAnimation(card);
            });
            selectedCards = [];
            this.changeCurrentPlayer();
            this.timeout = false;
        }, 500);
    };

    isMatched(selectecCards: Card[]): boolean {
        return selectecCards[0].value === selectecCards[1].value;
    };

    changeCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === this.chosenPlayer ? this.opponentPlayer : this.chosenPlayer;
        this.gameUI.updateCurrentPlayer(this.currentPlayer, this.board.gameTheme);
    };

};