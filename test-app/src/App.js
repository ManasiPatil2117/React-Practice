import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Message</div>}></Route>
            <Route path='/about' element={<div>About us</div>}></Route>
    </Routes>
    </BrowserRouter >
    )
}
export default App