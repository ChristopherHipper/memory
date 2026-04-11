import { Game } from "../scripts/models/game.class";

export function renderMain(game:Game):string {
    return `<header>
                <div class="players-wrapper">
                    <div>
                        <img src="../../assets/img/${game.gameTheme}-theme/${game.chosenPlayer}.png" alt="">
                        <p>${game.chosenPlayerPoints}</p>
                    </div>
                    <div>
                        <img src="../../assets/img/${game.gameTheme}-theme/${game.opponent}.png" alt="">
                        <p>${game.opponentPoints}</p>
                    </div>
                </div>
                <div class="current-player">
                    <p>Current Player:</p>
                    <img src="../../assets/img/${game.gameTheme}-theme/${game.currentPlayer}.png" alt="">
                </div>
                <button class="exit-btn">
                    <img src="../../assets/img//exit.png" alt="">
                    Exit Game
                </button>
            </header>`
    
}