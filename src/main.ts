import './styles/style.scss';

document.addEventListener("DOMContentLoaded", init);
const startBtn = document.getElementById('start-btn') as HTMLElement;


/**
 * Initializes the application by attaching event listeners.
 * Redirects the user to the settings page when the start button is clicked.
 */
function init(){
  startBtn!.addEventListener('click', () => {
    window.location.href = './src/pages/settings.html';
  });
};


