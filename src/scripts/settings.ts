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