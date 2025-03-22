
import change_text from "../src/utils/example"

export default function index() {
    return (
        <div>
            <h1 id="main">Hello, Next.js!</h1>
            <button onClick={() => change_text("main")}>change upper text</button>
        </div>
    )
}