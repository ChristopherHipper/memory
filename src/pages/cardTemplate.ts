import { Game } from "../scripts/models/game.class";

export function renderField(game:Game ,i:number):string {
return `
        <div class="card">
            <img src="../../assets/img/${game.gameTheme}-theme/${game.stack[i]}.png" alt="">
            
        </div>
        `
}