import '../styles/style.scss';


document.addEventListener("DOMContentLoaded", init);

function init(): void {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener('click', (e) => {
            const label = (e.target as HTMLElement).closest("label") as HTMLLabelElement;
            const field = label.parentElement;
            console.log(field);
            
            const line = label.querySelector(".line")
            if (line) {
                line.classList.add('active');
            }
        })
    }


}


document.addEventListener("DOMContentLoaded", init)
const previewSettings = document.getElementById('settings')
const previewImg = document.getElementById('img')

let gameSettings = {
    theme: "Code vibes theme",
    player: "Blue",
    field: "16 cards",
}


function init() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener('click', (e) => { selectSettings(e) })
    }
    previewSettings.innerHTML = displaySetting();
}

function selectSettings(e) {
    const label = (e.target).closest("label");
    const fieldset = label.parentElement;
    const activeImges = fieldset.querySelectorAll(".active")
    activeImges.forEach(img => {
        img.classList.remove('active')
    });
    const img = label.querySelector(".line")
    if (img) {
        img.classList.add('active');
    }
    setGameSetting(label);
}

function setGameSetting(label) {
    const value = label.innerText;
    const listId = label.parentElement.id;
    if (listId === "field") {
        gameSettings.field = value;
    } else if (listId === "theme") {
        gameSettings.theme = value;
    } else if (listId === "player"){
        gameSettings.player = value
    } else {
        return
    }
    previewSettings.innerHTML = displaySetting()
}

function displaySetting() {
    return `         <p>${gameSettings.theme}</p>
                    <div>/</div>
                    <p>${gameSettings.player}</p>
                    <div>/</div>
                    <p>${gameSettings.field}</p>
                    <div>/</div>
                    <button id="start-game-btn" class="start-game-btn play-btn">
                        Start
                    </button>
                `
}
