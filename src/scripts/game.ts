import '../styles/style.scss';
import { Game } from "./models/game.class";
import { renderMain } from "../pages/gameTemplate";
import { renderBoard } from "../pages/cardTemplate";

const content = document.getElementById('content') as HTMLElement;
let player: string;
let gameTheme: string;
let boardSize: number;


document.addEventListener("DOMContentLoaded", () => {
    getSettingsFromLocalStorage();
    const game = new Game(player, gameTheme, boardSize);
    game.start();
    renderGame(game);
    renderField(game);
    bindEvents(game);

});

function bindEvents(game: Game) {
    let field = document.getElementById('field') as HTMLElement;
    field.addEventListener('click', e => game.handleCardClick(e));
    const exit = document.getElementById('exitButton') as HTMLButtonElement;
    exit.addEventListener('click', initDialog);
};

function renderField(game: Game) {
    let field = document.getElementById('field') as HTMLElement;
    for (let index = 0; index < game.board.stack.length; index++) {
        field.innerHTML += renderBoard(game, index);
    };
};

function renderGame(game: Game) {
    content.innerHTML = renderMain(game);
};

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
