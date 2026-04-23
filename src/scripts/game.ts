import '../styles/style.scss';
import { Game } from "./models/game.class";
import { renderMain } from "../pages/gameTemplate";
import { renderBoard } from "../pages/cardTemplate";

const content = document.getElementById('content') as HTMLElement;
let player: string;
let gameTheme: string;
let boardSize: number;

/**
 * Initializes the game after the DOM has fully loaded.
 * Loads settings from localStorage, creates a new game instance,
 * starts the game, renders the UI, and binds event handlers.
 */
document.addEventListener("DOMContentLoaded", () => {
    getSettingsFromLocalStorage();
    const game = new Game(player, gameTheme, boardSize);
    game.start();
    renderGame(game);
    renderField(game);
    bindEvents(game);
});

/**
 * Binds UI event listeners to the game controls.
 * Handles card interactions, exit dialog activation, and returning to home/resetting the game.
 *
 * @param game - The current game instance used for handling user interactions.
 */
function bindEvents(game: Game) {
    let field = document.getElementById('field') as HTMLElement;
    field.addEventListener('click', e => game.handleCardClick(e));
    const exit = document.getElementById('exitButton') as HTMLButtonElement;
    exit.addEventListener('click', initDialog);
    const homeBtn = document.getElementById('home-btn') as HTMLButtonElement;
    homeBtn.addEventListener('click', resetGame);
};

/**
 * Renders the game board field based on the current board state.
 * Iterates through the card stack and appends each rendered card to the field container.
 *
 * @param game - The current game instance containing the board data.
 */
function renderField(game: Game) {
    let field = document.getElementById('field') as HTMLElement;
    for (let index = 0; index < game.board.stack.length; index++) {
        field.innerHTML += renderBoard(game, index);
    };
};

/**
 * Renders the main game UI.
 *
 * @param game - The current game instance used to generate the UI.
 */
function renderGame(game: Game) {
    content.innerHTML = renderMain(game);
};

/**
 * Loads game settings from localStorage.
 * Applies fallback values if no stored settings are found.
 */
function getSettingsFromLocalStorage() {
    player = localStorage.getItem('player') || 'Blue';
    gameTheme = localStorage.getItem('theme') || 'Code';
    const board = localStorage.getItem('field') || '16 cards';
    boardSize = +board.split(' ')[0];
};

/**
 * Initializes the end-game dialog interactions.
 * Attaches an event listener to the end game button to reset the game state.
 */
function initDialog() {
    const endGame = document.getElementById('endGame') as HTMLButtonElement;
    endGame.addEventListener('click', resetGame);
};

/**
 * Resets the current game by navigating back to the settings page.
 */
function resetGame() {
    window.location.href = './settings.html';
};
