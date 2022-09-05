import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About'
import Contact from './Contact'
function App() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Message</div>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter >
    )
}
export default App