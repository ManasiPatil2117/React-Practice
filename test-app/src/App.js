import React from "react"
class App extends React.Component{
    state = {
        name : "Rahul",
        place : "India"
    }

    changeName=()=>{
        this.setState({
            name:"Manasi"
        })
    }
    render(){
        return (
            <>
            <h1>Hello {this.state.name}</h1>
            <h3>Place is {this.state.place}</h3>
            <button onClick={this.changeName}>click</button>
            </>
        )
    }
}
export default App