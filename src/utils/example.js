
export default function change_text(tag) {
    /*/+
    * Changes the text content of an HTML element identified by its tag.//+
    * If the text is already in uppercase, it converts it to lowercase.//+
    * If the text is already in lowercase, it converts it to uppercase.//+
    * @param {string} tag - The tag name of the HTML element to be changed.//+
    * @returns {void}
    /*/
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
