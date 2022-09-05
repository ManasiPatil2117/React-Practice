import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import About from './About'
import Contact from './Contact'
function App() {
    return(
    <BrowserRouter>
    <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact us</a> */}
        {/* Instead of a href use LINK as it will loads the links very faster */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
        <Routes>
            <Route path="/" element={<div>Message</div>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter >
    )
}
export default App