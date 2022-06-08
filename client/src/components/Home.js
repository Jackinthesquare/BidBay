import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemContainer from "./ItemContainer"
import "../App.css"
import BBlogo from "./assets/BBlogo.png"
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
        <div className="home">
            <h1 className="home-header"><img className="home-logo" src={BBlogo} /></h1>
            <NavBar />
            <ItemContainer items = { items } />
            <Footer />
        </div>
    );
}

export default Home;