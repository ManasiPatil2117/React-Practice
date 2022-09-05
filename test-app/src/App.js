import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import About from './About'
import Contact from './Contact'
function App() {
    return(
    <BrowserRouter>
    <>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact us</a> */}
        {/* Instead of a href use LINK as it will loads the links very faster */}
        <Link to="/" className="link"><img src="./logo192.png" alt="" width={35}/></Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact Us</Link>
    </ >
        <Routes>
            <Route path="/" element={<div>Message</div>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter >
    )
}
export default App