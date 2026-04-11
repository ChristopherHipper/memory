import '../styles/style.scss';
import { Game } from "./models/game.class";
import { renderMain } from "../pages/gameTemplate";

const content = document.getElementById('content') as HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
    const player = localStorage.getItem('player') || 'Blue'
    const gameTheme = localStorage.getItem('theme') || 'Code'
    const boardSize = localStorage.getItem('field') || '16 cards'
    const game = new Game(player, gameTheme, boardSize);
    content.innerHTML = renderMain(game)
});
