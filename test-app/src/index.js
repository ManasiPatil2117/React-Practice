import ReactDom from 'react-dom'
import './index.css'
import Head from './Heading'
import Content from './Content'
import Footer from './Footer'
ReactDom.render(
    <>
    <h1>React</h1>
    <Head/>
    <Content/>
    <Footer/>
    </>,
    document.getElementById("root")
)