import ReactDom from 'react-dom'
import './index.css'
import course,{fees, text} from './App.js'
ReactDom.render(
    <>
    <h1>React</h1>
    <ul>
        <li>Angular</li>
        <li>Mongo DB</li>
        <li>{course}</li>
        <li>{fees}</li>
        <li>{text()}</li>
    </ul>
    </>,
    document.getElementById("root")
)