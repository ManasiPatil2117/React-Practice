import React from "react"
class App extends React.Component{
    state = {
        name : "Rahul",
        place : "India"
    }

    render(){
        return (
            <>
            <h1>Hello {this.state.name}</h1>
            <h3>Place is {this.state.place}</h3>
            </>
        )
    }
}
export default App