import ReactDom from 'react-dom'
import './index.css'
import add from './App'
ReactDom.render(
    <>
        <h1>React</h1>
        <ul>
            <li>Angular</li>
            <li>Mongo DB</li>
            <h2>{add(2,3)}</h2>
        </ul>
    </>,
    document.getElementById("root")
)