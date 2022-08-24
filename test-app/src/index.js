import ReactDom from 'react-dom'
import './index.css'
import App from './App'
ReactDom.render(
    <>
        <h1>React</h1>
        <ul>
            <li>Angular</li>
            <li>Mongo DB</li>
        </ul>
        <App name = "Manasi"/>
    </>,
    document.getElementById("root")
)