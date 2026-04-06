import './styles/style.scss';


const startScreen = document.getElementById('start-screen')!;
const settingsScreen = document.getElementById('settings-screen')!;
const gameScreen = document.getElementById('game-screen')!;

document.getElementById('start-btn')!.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  settingsScreen.classList.remove('hidden');
});

document.getElementById('settings-start-btn')?.addEventListener('click', () => {
  settingsScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
});