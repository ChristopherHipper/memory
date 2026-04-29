import '../styles/style.scss';
import { Settings } from './interface';
import { settingsTemplate } from "../pages/settingsTemplate";
import { settingsTheme } from "../pages/settingsTemplate";
import { settingsPlayer } from "../pages/settingsTemplate";
import { settingsBoard } from "../pages/settingsTemplate";

document.addEventListener("DOMContentLoaded", init);
const previewSettings = document.getElementById('settings') as HTMLElement;

let gameSettings: Settings = {
    theme: "",
    player: "",
    field: "",
};

/**
 * Initializes the settings page by wiring UI interactions and rendering the preview.
 * Attaches a click listener to the form to handle setting selection and
 * populates the preview container with the current settings template.
 */
function init() {
    const form = document.querySelector("form") as HTMLFormElement;
    if (form) {
        form.addEventListener('click', (e) => { selectSettings(e) });
        form.addEventListener('mouseover', (e) => { setPreviewImg(e); });
    };
    if (previewSettings) {
        previewSettings.innerHTML = settingsTemplate(gameSettings);
    };
};

/**
 * Resets the preview image to the currently selected theme.
 * Restores the default preview after a hover interaction ends.
 *
 * @param e - The mouse event triggered on mouse leave.
 */
function resetPreviewImg(e: MouseEvent) {
    const gamePrevImgRef = document.getElementById('gamePrevImg') as HTMLImageElement;
    if (gamePrevImgRef) {
        gamePrevImgRef.src = `../../assets/img/${gameSettings.theme}-theme.png`;
    };
};

/**
 * Updates the preview image on hover over a theme option.
 * Temporarily changes the preview image based on the hovered label
 * and restores it on mouse leave.
 *
 * @param e - The mouse event triggered by hovering over a label.
 */
function setPreviewImg(e: MouseEvent) {
    if (e.target) {
        const label = (e.target as HTMLElement).closest("label") as HTMLLabelElement;
        const gamePrevImgRef = document.getElementById('gamePrevImg') as HTMLImageElement;
        if (label) {
            const fieldset = label.parentElement as HTMLElement;
            label.addEventListener('mouseleave', (e) => { resetPreviewImg(e); });
            if (fieldset) {
                if (fieldset.id !== 'theme') {
                    return;
                };
                if (gamePrevImgRef) {
                    const value = label.innerText;
                    const valueArr = value.split(" ");
                    gamePrevImgRef.src = `../../assets/img/${valueArr[0].toLocaleLowerCase()}-theme.png`;
                };
            };
        };
    };
};

/**
 * Handles user interaction within the settings form.
 * Determines the clicked label, updates the selected UI state,
 * applies the corresponding game setting, and refreshes the button state.
 *
 * @param e - The pointer event triggered by a user click.
 */
function selectSettings(e: PointerEvent) {
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

/**
 * Updates the visual selection state within a fieldset.
 * Removes the 'active' class from all elements and applies it
 * to the selected label's indicator element.
 *
 * @param fieldset - The container holding selectable elements.
 * @param label - The label element that was selected.
 */
function setSelectClass(fieldset: HTMLElement, label: HTMLLabelElement) {
    const activeImges = fieldset.querySelectorAll(".active");
    activeImges.forEach(img => {
        img.classList.remove('active');
    });
    const img = label.querySelector(".line");
    if (img) {
        img.classList.add('active');
    };
};

/**
 * Updates game settings based on the selected label and refreshes
 * the corresponding UI section.
 * Determines which setting to update via the parent element's ID
 * and renders the updated partial template.
 *
 * @param label - The label element containing the selected setting value.
 */
function setGameSetting(label: HTMLLabelElement) {
    const settingsThemeRef = document.getElementById('settings-theme') as HTMLElement;
    const settingsPlayerRef = document.getElementById('settings-player') as HTMLElement;
    const settingsBoardRef = document.getElementById('settings-board') as HTMLElement;
    if (label.parentElement) {
        const value = label.innerText;
        const valueArr = value.split(" ");
        const listId = label.parentElement.id;
        if (listId === "field") {
            gameSettings.field = value;
            settingsBoardRef.innerHTML = settingsBoard(gameSettings);
        } else if (listId === "theme") {
            gameSettings.theme = valueArr[0].toLocaleLowerCase();
            settingsThemeRef.innerHTML = settingsTheme(gameSettings);
        } else if (listId === "player") {
            gameSettings.player = value.toLocaleLowerCase();
            settingsPlayerRef.innerHTML = settingsPlayer(gameSettings);
        } else {
            return
        };
        
    };
};

/**
 * Updates the state of the game start button.
 * Enables the button when all required game settings are defined
 * and attaches the click handler to start the game.
 */
function setBtnState() {
    const gameBtn = document.getElementById('game-btn') as HTMLButtonElement;
    if (gameBtn) {
        if (gameSettings.field && gameSettings.player && gameSettings.theme) {
            (gameBtn).disabled = false;
            gameBtn.addEventListener('click', startGame);
        };
    };
};

/**
 * Generates the HTML template for the current game settings preview.
 */


/**
 * Starts the game by persisting selected settings to localStorage,
 * resetting the current settings state, and navigating to the game page.
 */
function startGame() {
    localStorage.setItem('theme', gameSettings.theme);
    localStorage.setItem('player', gameSettings.player);
    localStorage.setItem('field', gameSettings.field);
    resetSettings();
    window.location.href = './game.html';
};

/**
 * Resets all input elements in the settings form.
 * Unchecks all input fields to restore the default state.
 */
function resetSettings() {
    const settings = document.querySelectorAll('input');
    settings.forEach((input) => {
        input.checked = false;
    });
};
