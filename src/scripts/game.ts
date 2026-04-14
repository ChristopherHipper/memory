import '../styles/style.scss';
import { Game } from "./models/game.class";
import { renderMain } from "../pages/gameTemplate";
import { renderField } from "../pages/cardTemplate";

const content = document.getElementById('content') as HTMLElement;
let player:string;
let gameTheme:string;
let boardSize:number;


document.addEventListener("DOMContentLoaded", () => {
    getSettingsFromLocalStorage();
    const game = new Game(player, gameTheme, boardSize);
    content.innerHTML = renderMain(game);
    let field = document.getElementById('field') as HTMLElement;
    for (let index = 0; index < game.stack.length; index++) {
        field.innerHTML += renderField(game, index);
    };
    const exit = document.getElementById('exitButton') as HTMLButtonElement;
    exit.addEventListener('click', initDialog);
});

function getSettingsFromLocalStorage() {
     player = localStorage.getItem('player') || 'Blue';
     gameTheme = localStorage.getItem('theme') || 'Code';
     const board = localStorage.getItem('field') || '16 cards';
     boardSize = +board.split(' ')[0];
};



function initDialog() {
    const endGame = document.getElementById('endGame') as HTMLButtonElement;
    endGame.addEventListener('click', resetGame);
};

function resetGame() {
    console.log('back to home and reset game');
};
