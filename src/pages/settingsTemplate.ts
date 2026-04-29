import { Settings } from "../scripts/interface"

export function settingsTemplate(gameSettings:Settings): string {
    return `<img id="gamePrevImg" class="preview-theme" src="../../assets/img/${gameSettings.theme}-theme.png" alt="choosen Theme">
            <div class="choosen-settings" >
                <p id="settings-theme" class="choosen-settings__theme">${gameSettings.theme.charAt(0).toUpperCase() + gameSettings.theme.slice(1)} Theme</p>
                <img class="seperator" src="../../assets/img/seperator.png" alt="seperator">
                <p id="settings-player" class="choosen-settings__player">${gameSettings.player} Player</p>
                <img class="seperator" src="../../assets/img/seperator.png" alt="seperator">
                <p id="settings-board" class="choosen-settings__board">Board ${gameSettings.field}</p>
                <button disabled class="primary-btn game-btn" id="game-btn">
                    <img class="start-img" src="../../assets/img/start.png" alt="start">
                    Start
                </button>
             </div>
        `
};

export function settingsTheme(gameSettings:Settings){
    return `<p id="settings-theme" class="choosen-settings__theme">${gameSettings.theme.charAt(0).toUpperCase() + gameSettings.theme.slice(1)} Theme</p>`
}

export function settingsPlayer(gameSettings:Settings){
    return `<p id="settings-player" class="choosen-settings__player">${gameSettings.player} Player</p>`
}

export function settingsBoard(gameSettings:Settings){
    return `<p id="settings-board" class="choosen-settings__board">Board ${gameSettings.field}</p>`
}