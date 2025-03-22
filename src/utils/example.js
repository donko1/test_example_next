
export default function change_text(tag) {
    const element = document.getElementById(tag);
    if (element) {
        if (element.innerText.toUpperCase() === element.innerText) {
            element.innerText = element.innerText.toLowerCase();
        }
        else {
            element.innerText = element.innerText.toUpperCase();
        }
    }
}
