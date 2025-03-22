
import change_text from "../src/utils/example"

export default function index() {
    /**
     * Renders the index page of the application.
     * 
     * This function is the default export for the index page in a Next.js application.
     * It renders a simple UI with a heading and a button that can change the text of the heading.
     * 
     * @returns {JSX.Element} A React component representing the index page layout.
     */
    return (
        <div>
            <h1 id="main">Hello, Next.js!</h1>
            <button onClick={() => change_text("main")}>change upper text</button>
        </div>
    )
}