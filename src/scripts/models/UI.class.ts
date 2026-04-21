import { Card } from "./card.class";

export class UI {

    flipAnimation(card: Card) {
        if (card.DOMelement) {
            card.DOMelement.classList.toggle('is-flipped');
        };
    };

    updateCurrentPlayer(currentPlayer: string, theme: string) {
        const img = document.getElementById('playerImg') as HTMLImageElement;
        img.src = `../../assets/img/${theme}-theme/${currentPlayer}.png`;
    };

    matchHighlight(card: Card) {
        if (card.DOMelement) {
            card.DOMelement.classList.add('highlight');
        };
    };

    updatePoints(playerScore: number, opponentScore: number) {
        const playerScoreRef = document.getElementById('chosenPlayerScore');
        const opponentScoreRef = document.getElementById('opponentPlayerScore');
        if (playerScoreRef && opponentScoreRef) {
            playerScoreRef.innerHTML = `${playerScore}`;
            opponentScoreRef.innerHTML = `${opponentScore}`;
        };
    };

    gameOverOverlay(){
        const gameOverRef = document.getElementById('game-over');
        if (gameOverRef) {
            gameOverRef.classList.remove('d_none')
        }
        
    }
};