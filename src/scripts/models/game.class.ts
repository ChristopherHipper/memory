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
    timeout = false;
    winner;

    constructor(chosenPlayer: string, gameTheme: string, size: number) {
        this.board = new Board(gameTheme, size);
        this.gameUI = new UI();
        this.currentPlayer = chosenPlayer;
        this.chosenPlayer = chosenPlayer;
        this.winner = ''
        this.opponentPlayer = this.getOpponent(chosenPlayer);
    };

    /**
     * Starts the game logic.
     * Shuffles the board stack.
     */
    start() {
        this.board.shuffleStack();
        console.log(this.board.stack);
    };

    /**
     * Returns the opponent player based on the currently selected player.
     *
     * @param chosenPlayer - The active player identifier.
     * @returns The opponent player identifier.
     */
    getOpponent(chosenPlayer: string): string {
        return chosenPlayer === 'blue' ? 'orange' : 'blue';
    };

    /**
     * Handles user interaction when a card is clicked.
     * Identifies the clicked card, validates the selection, triggers flip animation,
     * and performs match checking logic.
     *
     * @param e - The pointer event triggered by clicking a card.
     */
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

    /**
     * Checks whether a card selection is valid.
     * A selection is invalid if the card is already selected or already matched.
     *
     * @param card - The card to validate.
     * @returns True if the card cannot be selected, otherwise false.
 */
    isValidSelection(card: Card): boolean {
        return card.isSelected || card.isMatched;
    };

    /**
     * Checks the current selected cards for a match.
     * Marks the card as selected, compares selected cards, and triggers
     * match or no-match logic accordingly.
     *
     * @param card - The card that was just selected.
     */
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

    /**
     * Handles logic when a matching pair is found.
     * Marks cards as matched, updates UI, resets selection,
     * updates score, and checks for game completion.
     *
     * @param selectedCards - Array of currently selected cards.
     */
    match(selectedCards: Card[]) {
        selectedCards.forEach(card => {
            card.isMatched = true;
            card.isSelected = false;
            this.gameUI.matchHighlight(card);
        });
        selectedCards = [];
        this.score();
        this.checkGameEnd();
    };

    /**
     * Checks whether the game has ended.
     * Counts all matched cards and compares them to the board size.
     * Triggers game end logic if all cards are matched.
     */
    checkGameEnd() {
        this.board.stack.forEach(card => {
            if (card.isMatched) { this.board.playedCards++; };
        });
        if (this.board.playedCards == this.board.boardSize) {
            this.gameEnd();
        } else {
            this.board.playedCards = 0;
        };
    };

    /**
     * Handles the end of the game sequence.
     * Updates final scores, shows the game over overlay, determines the winner,
     * and displays the end screen after a delay.
     */
    gameEnd() {
        this.gameUI.updatePoints(this.chosenPlayerPoints, this.opponentPoints, 'final');
        setTimeout(() => {
            this.gameUI.gameOverOverlay();
            this.getWinner();
            setTimeout(()=>{
                this.gameUI.endScreen(this.winner, this.board.gameTheme);
            },3000);
        }, 700);
    };

    /**
     * Determines the winner of the game based on the current scores.
     */
    getWinner(){
        if (this.chosenPlayerPoints >= this.opponentPoints) {
            this.winner = this.chosenPlayer;
        } else if(this.chosenPlayerPoints < this.opponentPoints){
            this.winner = this.opponentPlayer;
        };
    };

    /**
     * Updates the score for the current player.
     * Increments the appropriate player's score and updates the UI.
     *
     * @returns void
     */
    score() {
        this.currentPlayer === this.chosenPlayer ? this.chosenPlayerPoints++ : this.opponentPoints++;
        this.gameUI.updatePoints(this.chosenPlayerPoints, this.opponentPoints, '');
    };

    /**
     * Handles logic when selected cards do not match.
     * Temporarily locks input, flips cards back after a delay,
     * resets selection, and switches the current player.
     *
     * @param selectedCards - Array of currently selected cards.
     */
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

    /**
     * Checks whether two selected cards form a match.
     *
     * @param selectecCards - Array containing the two selected cards.
     * @returns True if both cards have the same value, otherwise false.
     */
    isMatched(selectecCards: Card[]): boolean {
        return selectecCards[0].value === selectecCards[1].value;
    };

    /**
     * Switches the active player.
     * Toggles between the chosen player and the opponent player,
     * and updates the UI to reflect the change.
     */
    changeCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === this.chosenPlayer ? this.opponentPlayer : this.chosenPlayer;
        this.gameUI.updateCurrentPlayer(this.currentPlayer, this.board.gameTheme);
    };

};