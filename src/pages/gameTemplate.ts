import { Game } from "../scripts/models/game.class";

export function renderMain(game:Game):string {
    return `<main class="game" data-theme="${game.gameTheme}">
                <header>
                    <div class="players-wrapper">
                        <div>
                            <img src="../../assets/img/${game.gameTheme}-theme/${game.chosenPlayer}.png" alt="">
                            <p class="${game.chosenPlayer}">${game.chosenPlayerPoints}</p>
                        </div>
                        <div>
                            <img src="../../assets/img/${game.gameTheme}-theme/${game.opponent}.png" alt="">
                            <p class="${game.opponent}">${game.opponentPoints}</p>
                        </div>
                    </div>
                    <div class="current-player">
                        <p>Current player:</p>
                        <img src="../../assets/img/${game.gameTheme}-theme/${game.currentPlayer}.png" alt="">
                    </div>
                    <button class="button exit-btn">
                        <img src="../../assets/img//exit.png" alt="">
                        Exit game
                    </button>
                </header>
            </main>    
                `
    
}