export class UI {

    flipAnimation(card: HTMLElement) {
        card.classList.toggle('is-flipped')
    }

    flipReverseAnimation(){
        const cards = document.querySelectorAll('.is-flipped')
        cards.forEach((card)=>{
            card.classList.remove('is-flipped')
        })
        
    }

    updateCurrentPlayer(currentPlayer: string, theme: string) {
        const img = document.getElementById('playerImg') as HTMLImageElement;
        img.src = `../../assets/img/${theme}-theme/${currentPlayer}.png`
    }

    matchHighlight(){

    }

    updatePoints(){
        
    }

}