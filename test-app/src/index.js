import React  from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App'
function test(){
    alert("HELLOZ")
}
const ele = (
    <button onClick={test}>Click me</button>
)
ReactDom.render(
    ele,
    document.getElementById("root")
)