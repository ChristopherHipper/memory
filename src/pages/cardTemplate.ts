import { Game } from "../scripts/models/game.class";

export function renderBoard(game:Game ,i:number):string {
return `
        <button 
            class="card" 
            id="${i}" 
            type="button"
            aria-label="${game.board.stack[i].state} memory card">
            <div class="card__inner">
                <img class="card__face card__face--back" src="../../assets/img/${game.board.gameTheme}-theme/background.png" alt="">
                <img class="card__face card__face--front" src="../../assets/img/${game.board.gameTheme}-theme/${game.board.stack[i].value}.png" alt="">
            </div>
            
        </button>
        `
}
    