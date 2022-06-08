import NavBar from "./NavBar"
import { useState, useEffect } from "react"

const Home = () => {
    const [items,setItems] = useState([])
    useEffect (() => {
        (async () => {
            let req = await fetch('http://localhost:3000/items')
            let res = await req.json()
            setItems(res)
        }) ()
    },[items])
    
    return (
        <div className="Home">
            <h1>hello from home!</h1>
            <NavBar />

        </div>
    );
}

export default Home;