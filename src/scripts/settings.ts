import '../styles/style.scss';
import { Settings } from './interface';

document.addEventListener("DOMContentLoaded", init);
const previewSettings = document.getElementById('settings') as HTMLElement;

let gameSettings: Settings = {
    theme: "",
    player: "",
    field: "",
};

function init(): void {
    const form = document.querySelector("form") as HTMLFormElement;
    if (form) {
        form.addEventListener('click', (e) => { selectSettings(e) });
    };
    if (previewSettings) {
        previewSettings.innerHTML = settingsTemplate();
    };
};

function selectSettings(e: PointerEvent): void {
    if (e.target) {
        const label = (e.target as HTMLElement).closest("label") as HTMLLabelElement;
        if (label) {
            if (label.parentElement) {
                const fieldset = label.parentElement;
                if (fieldset) {
                    setSelectClass(fieldset, label);
                    setGameSetting(label);
                    setBtnState();
                };
            };
        };
    };
};

function setSelectClass(fieldset: HTMLElement, label: HTMLLabelElement): void {
    const activeImges = fieldset.querySelectorAll(".active");
    activeImges.forEach(img => {
        img.classList.remove('active');
    });
    const img = label.querySelector(".line");
    if (img) {
        img.classList.add('active');
    };
};

function setGameSetting(label: HTMLLabelElement): void {
    if (label.parentElement) {
        const value = label.innerText;
        const valueArr = value.split(" ");
        const listId = label.parentElement.id;
        if (listId === "field") {
            gameSettings.field = value;
        } else if (listId === "theme") {
            gameSettings.theme = valueArr[0].toLocaleLowerCase();
        } else if (listId === "player") {
            gameSettings.player = value.toLocaleLowerCase();
        } else {
            return
        };
        if (previewSettings) {
            previewSettings.innerHTML = settingsTemplate();
        };
    };
};

function setBtnState(): void {
    const gameBtn = document.getElementById('game-btn') as HTMLButtonElement;
    if (gameBtn) {
        if (gameSettings.field && gameSettings.player && gameSettings.theme) {
            (gameBtn).disabled = false;
            gameBtn.addEventListener('click', startGame);
        };
    };
};

function settingsTemplate(): string {
    return `<img class="preview-theme" src="../../assets/img/${gameSettings.theme}-theme.png" alt="choosen Theme">
            <div class="choosen-settings" >
                <p>${gameSettings.theme.charAt(0).toUpperCase()+ gameSettings.theme.slice(1)} Theme</p>
                <img class="seperator" src="../../assets/img/seperator.png" alt="seperator">
                <p>${gameSettings.player} Player</p>
                <img class="seperator" src="../../assets/img/seperator.png" alt="seperator">
                <p>Board ${gameSettings.field}</p>
                <button disabled class="primary-btn game-btn" id="game-btn">
                    <img class="start-img" src="../../assets/img/start.png" alt="start">
                    Start
                </button>
             </div>
        `
};

function startGame() {
    localStorage.setItem('theme',gameSettings.theme);
    localStorage.setItem('player',gameSettings.player);
    localStorage.setItem('field',gameSettings.field);
    window.location.href = './game.html';
};
