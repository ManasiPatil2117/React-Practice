import React, {useState} from 'react'
function App(){
    const [data,setData] = useState(20)
    return(
        <>
            <h1>Hello {data}</h1>
            <button onClick={()=>setData("50")}>Click me</button>
        </>
    )
}
export default App