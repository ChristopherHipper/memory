import { Game } from "../scripts/models/game.class";

export function renderMain(game: Game): string {
    return `
<main class="game" data-theme="${game.board.gameTheme}">

    <header>
        <section class="players-wrapper" aria-label="Players">
            <ul>
                <li>
                    <figure>
                        <img src="../../assets/img/${game.board.gameTheme}-theme/${game.chosenPlayer}.png" alt="Chosen player ${game.chosenPlayer}">
                        <figcaption>
                            <output id="chosen-player-score" class="${game.chosenPlayer}">
                                ${game.chosenPlayerPoints}
                            </output>
                        </figcaption>
                    </figure>
                </li>

                <li>
                    <figure>
                        <img src="../../assets/img/${game.board.gameTheme}-theme/${game.opponentPlayer}.png" alt="Opponent player ${game.opponentPlayer}">
                        <figcaption>
                            <output id="opponent-player-score" class="${game.opponentPlayer}">
                                ${game.opponentPoints}
                            </output>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>

        <section class="current-player" aria-live="polite">
            <h2>Current player</h2>
            <img id="playerImg" src="../../assets/img/${game.board.gameTheme}-theme/${game.currentPlayer}.png" alt="Current player ${game.currentPlayer}">
        </section>

        <button id="exitButton" class="button secondary-btn" command="show-modal" commandfor="my-dialog">
            <svg class="btn-icon" width="26" height="23" viewBox="0 0 26 23" aria-hidden="true">
                <path d="M21.4375 12.5H7.5C7.14583 12.5 6.84896 12.3802 6.60938 12.1406C6.36979 11.901 6.25 11.6042 6.25 11.25C6.25 10.8958 6.36979 10.599 6.60938 10.3594C6.84896 10.1198 7.14583 10 7.5 10H21.4375L20.375 8.9375C20.125 8.6875 20.0052 8.39583 20.0156 8.0625C20.026 7.72917 20.1458 7.4375 20.375 7.1875C20.625 6.9375 20.9219 6.80729 21.2656 6.79688C21.6094 6.78646 21.9062 6.90625 22.1562 7.15625L25.375 10.375C25.625 10.625 25.75 10.9167 25.75 11.25C25.75 11.5833 25.625 11.875 25.375 12.125L22.1562 15.3438C21.9062 15.5938 21.6094 15.7135 21.2656 15.7031C20.9219 15.6927 20.625 15.5625 20.375 15.3125C20.1458 15.0625 20.026 14.7708 20.0156 14.4375C20.0052 14.1042 20.125 13.8125 20.375 13.5625L21.4375 12.5Z"/>
            </svg>
            Exit game
        </button>
    </header>


    <dialog class="dialog" id="my-dialog" aria-labelledby="dialog-title">
        <h2 id="dialog-title">Exit game</h2>
        <p>Are you sure you want to quit the game?</p>
        <div class="btn-wrapper">
            <button class="continue-btn secondary-btn" commandfor="my-dialog" command="close">
                No, back to game
            </button>
            <button id="endGame" class="button secondary-btn exit-btn">
                Exit game
            </button>
        </div>
    </dialog>


    <section class="field" id="field" data-field="${game.board.boardSize}" aria-label="Game board">
    </section>


    <section class="game-over d_none" id="game-over" data-field="${game.board.gameTheme}" >
        <header class="game-over__header">
            <h1 class="game-over__headline">Game Over</h1>
            <p class="game-over__text">Final score</p>
        </header>

        <ul class="game-over__score-board">
            <li>
                <figure>
                    <img src="../../assets/img/${game.board.gameTheme}-theme/${game.chosenPlayer}.png" alt="Chosen player ${game.chosenPlayer}">
                    <figcaption>
                        <output id="final-chosen-player-score" class="${game.chosenPlayer}">
                            ${game.chosenPlayerPoints}
                        </output>
                    </figcaption>
                </figure>
            </li>

            <li>
                <figure>
                    <img src="../../assets/img/${game.board.gameTheme}-theme/${game.opponentPlayer}.png" alt="Opponent player ${game.opponentPlayer}">
                    <figcaption>
                        <output id="final-opponent-player-score" class="${game.opponentPlayer}">
                            ${game.opponentPoints}
                        </output>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </section>


    <section class="end-screen d_none" id="end-screen" data-field="${game.board.gameTheme}" >
        <header class="end-screen__header">
            <p class="end-screen__text">The winner is</p>
            <h2 class="end-screen__winner" id="winner"></h2>
        </header>

        <figure>
            <img class="winner-img" id="winner-img" src="" alt="Winner">
        </figure>

        <button id="home-btn" class="button secondary-btn">
            Back to start
        </button>
    </section>

</main>
`;
}