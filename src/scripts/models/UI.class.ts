import { Card } from "./card.class";

export class UI {

    /**
     * Triggers the flip animation for a card.
     * Toggles the "is-flipped" CSS class on the card's DOM element.
     *
     * @param card - The card whose visual state should be toggled.
     */
    flipAnimation(card: Card) {
        if (card.DOMelement) {
            card.DOMelement.classList.toggle('is-flipped');
        };
    };

    /**
     * Updates the current player indicator in the UI.
     * Sets the player image based on the active player and selected theme.
     *
     * @param currentPlayer - The identifier of the current player.
     * @param theme - The selected game theme used to determine the image path.
     */
    updateCurrentPlayer(currentPlayer: string, theme: string) {
        const img = document.getElementById('playerImg') as HTMLImageElement;
        img.src = `../../assets/img/${theme}-theme/${currentPlayer}.png`;
    };

    /**
     * Highlights a matched card in the UI.
     * Adds the "highlight" CSS class to the card's DOM element.
     *
     * @param card - The card to visually mark as matched.
     */
    matchHighlight(card: Card) {
        if (card.DOMelement) {
            card.DOMelement.classList.add('highlight');
        };
    };

    /**
     * Updates the score display for both players in the UI.
     * Sets the current scores for player and opponent based on the provided values.
     *
     * @param playerScore - The current score of the active player.
     * @param opponentScore - The current score of the opponent player.
     * @param id - The base DOM id used to locate score elements.
     */
    updatePoints(playerScore: number, opponentScore: number, id: string) {
        const playerScoreRef = document.getElementById(id + 'chosenPlayerScore') as HTMLElement;
        const opponentScoreRef = document.getElementById(id + 'opponentPlayerScore') as HTMLElement;
        if (playerScoreRef && opponentScoreRef) {
            playerScoreRef.innerHTML = `${playerScore}`;
            opponentScoreRef.innerHTML = `${opponentScore}`;
        };
    };

    /**
     * Displays the game over overlay and disables background scrolling.
     */
    gameOverOverlay() {
        document.getElementById('content')?.classList.add('stopScroll')
        const gameOverRef = document.getElementById('game-over') as HTMLElement;
        if (gameOverRef) {
            gameOverRef.classList.remove('d_none');
        };
    };

    /**
     * Displays the end screen with the game winner information.
     * Updates winner text, applies styling based on winner, and sets the winner image.
     *
     * @param winner - The winning player identifier.
     * @param theme - The selected game theme used for the winner image path.
     */
    endScreen(winner: string, theme: string) {
        const endSceenrRef = document.getElementById('end-screen') as HTMLElement;
        const winnerRef = document.getElementById('winner') as HTMLElement;
        if (endSceenrRef) {
            winnerRef.innerHTML = `${winner.charAt(0).toUpperCase() + winner.slice(1)} Player`;
            winnerRef.classList.add(winner)
            endSceenrRef.classList.remove('d_none');
        };
    };

    /**
     * Sets the winner image.
     *
     * @param winner - The winning player identifier.
     * @param theme - The selected game theme used for the winner image path.
     */
    winnerSrc(winner: string, theme: string) {
        const winnerImg = document.getElementById('winner-img') as HTMLImageElement;
        winnerImg.src = `../../assets/img/${theme}-theme/${winner}-winner.png`;
    }
};