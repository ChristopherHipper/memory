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

    updatePoints(playerScore: number, opponentScore: number, id: string) {
        const playerScoreRef = document.getElementById(id + 'chosenPlayerScore') as HTMLElement;
        const opponentScoreRef = document.getElementById(id + 'opponentPlayerScore') as HTMLElement;
        if (playerScoreRef && opponentScoreRef) {
            playerScoreRef.innerHTML = `${playerScore}`;
            opponentScoreRef.innerHTML = `${opponentScore}`;
        };
    };

    gameOverOverlay() {
        document.getElementById('content')?.classList.add('stopScroll')
        const gameOverRef = document.getElementById('game-over') as HTMLElement;
        if (gameOverRef) {
            gameOverRef.classList.remove('d_none');
        };
    };

    endScreen(winner: string, theme:string) {
        const endSceenrRef = document.getElementById('end-screen')as HTMLElement;
        const winnerRef = document.getElementById('winner')as HTMLElement;
        const winnerImg = document.getElementById('winner-img') as HTMLImageElement;
        if (endSceenrRef) {
            winnerRef.innerHTML = `${winner.charAt(0).toUpperCase() + winner.slice(1)} Player`;
            winnerRef.classList.add(winner)
            winnerImg.src = `../../assets/img/${theme}-theme/${winner}-winner.png`;
            endSceenrRef.classList.remove('d_none');
        };
    };
};