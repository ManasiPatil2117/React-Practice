import ReactDom from 'react-dom'
const d = new Date()
const h = d.getHours()
const m = d.getMinutes()
const c = d.getSeconds()
const dt = d.getDate()
const mt = d.getMonth()+1
const yr = d.getFullYear()
var greetings = ''
if(h>=1 && h<=12){
    greetings = 'Morning'
}else if(h>12 && h<16){
    greetings = "Afternoon"
}else{
    greetings = "Evening"
}
ReactDom.render(
    <>
        <h1>Time- {h} : {m} :{c}</h1>        
        <h2>Date- {dt}/{mt}/{yr}</h2>
        <p>{greetings}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda quas rem voluptatem quis pariatur, recusandae tenetur laboriosam provident, eius hic ducimus earum beatae veniam labore nihil laudantium corrupti. Voluptatibus.</p>
        <hr />
        <table border='5px'>
            <tr>
                <td>Message</td>
            </tr>
            <tr>
                <td>{greetings}</td>
            </tr>
        </table>
    </>,
    document.getElementById("root")
)