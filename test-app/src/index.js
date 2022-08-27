import React  from 'react'
import ReactDom from 'react-dom'
import './index.css'
class Test extends React.Component{
    render(){
        return <h2>Class Component</h2>
    }
}
ReactDom.render(
    <>
    <Test/>
    </>,
    document.getElementById("root")
)