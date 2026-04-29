import { Card } from "./card.class";

export class Board {
    stack: Card[] = [];
    gameTheme;
    boardSize;
    playedCards:number = 0;

    constructor(gameTheme: string, size: number) {
        this.gameTheme = gameTheme;
        this.boardSize = size;
        this.stack = this.createStack(gameTheme, size);
    }

    /**
     * Creates the card stack for the game board.
     * Generates pairs of cards based on the selected theme and board size.
     *
     * @param gameTheme - The selected theme used for card values.
     * @param size - The total number of cards to generate.
     * @returns The generated stack of cards.
    */
    createStack(gameTheme: string, size: number): Card[] {
        for (let i = 0; i < 2; i++) {
            for (let index = 0; index < size / 2; index++) {
                const card = gameTheme + '-' + (index + 1);
                this.stack.push(new Card(card));
            };
        };
        return this.stack;
    };

    /**
     * Shuffles the card stack randomly.
     * Reorders the stack using a random sort comparator.
     */
    shuffleStack() {
        this.stack.sort(() => Math.random() - 0.5);
    };

    /**
     * Retrieves a card from the stack by its index.
     *
     * @param index - The position of the card in the stack.
     * @returns The card at the specified index.
     */
    getCard(index: number):Card {
        return this.stack[index];
    };
}