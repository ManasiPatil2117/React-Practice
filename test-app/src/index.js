import ReactDom from 'react-dom'
import './index.css'
// import course,{fees, text} from './App.js'
import * as x from './App'
ReactDom.render(
    <>
    <h1>React</h1>
    <ul>
        <li>Angular</li>
        <li>Mongo DB</li>
        <li>{x.default}</li>
        <li>{x.fees}</li>
        <li>{x.text()}</li>
    </ul>
    </>,
    document.getElementById("root")
)