import './styles/style.scss';

document.addEventListener("DOMContentLoaded", init);
const startBtn = document.getElementById('start-btn');

function init(): void {
  startBtn!.addEventListener('click', () => {
    window.location.href = './src/pages/settings.html';
  });

}


