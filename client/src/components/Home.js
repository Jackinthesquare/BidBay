import NavBar from "./NavBar"
import ItemContainer from "./ItemContainer"
import { useState, useEffect } from "react"

const Home = () => {
    const [items,setItems] = useState([])
    useEffect (() => {
        (async () => {
            let req = await fetch('/items')
            let res = await req.json()
            setItems(res)
        }) ()
    },[])

    return (
        <div className="Home">
            <NavBar />
            <h1>hello from home!</h1>
            <ItemContainer items = { items } />

        </div>
    );
}

export default Home;