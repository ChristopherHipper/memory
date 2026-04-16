import { Game } from "../scripts/models/game.class";

export function renderBoard(game:Game ,i:number):string {
return `
        <div class="card" id="${i}">
            <div class="card__inner">
                <img class="card__face card__face--back" src="../../assets/img/${game.board.gameTheme}-theme/background.png" alt="">
                <img class="card__face card__face--front" src="../../assets/img/${game.board.gameTheme}-theme/${game.board.stack[i].value}.png" alt="">
            </div>
            
        </div>
        `
}