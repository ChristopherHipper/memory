import { Card } from "./card.class";

export class Board {
    stack: Card[] = [];
    gameTheme;
    boardSize

    constructor(gameTheme: string, size: number) {
        this.gameTheme = gameTheme;
        this.boardSize = size;
        this.stack = this.createStack(gameTheme, size);
    }

    createStack(gameTheme: string, size: number): Card[] {
        for (let i = 0; i < 2; i++) {
            for (let index = 0; index < size / 2; index++) {
                const card = gameTheme + '-' + (index + 1);
                this.stack.push(new Card(card));
            };
        };
        return this.stack

    };

    shuffleStack() {
        this.stack.sort(() => Math.random() - 0.5);
        console.log(this.stack);
    };

    getCard(index: number) {
        return this.stack[index]
    }

}