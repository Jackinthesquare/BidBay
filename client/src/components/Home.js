import "../App.css"
import BBlogo from "./assets/BBlogo.png"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemContainer from "./ItemContainer"
import ItemPage from "./ItemPage"
import MyAccount from "./MyAccount"
import Auctions from "./Auctions"
import Purchases from "./Purchases"

import { Route, Switch, Redirect } from 'react-router-dom'
import { useState, useEffect } from "react"



const Home = () => {
    const [items, setItems] = useState([])
    const [itemId, setItemId] = useState(0)

    useEffect(() => {
        (async () => {
            let req = await fetch('/items')
            let res = await req.json()
            setItems(res)
        })()
    }, [])

    return (
        <div className="home">
            <h1 className="home-header"><img className="home-logo" src={BBlogo} /></h1>

            <NavBar />

            <Switch>
                <Route exact path="/items">
                    <ItemContainer items={items} setItemId={setItemId} />
                </Route>

                <Route path="/my_account">
                    <MyAccount />
                </Route>

                <Route path="/my_auctions">
                    <Auctions />
                </Route>

                <Route path="/my_purchases">
                    <Purchases />
                </Route>

                <Route exact path="/items/:id">
                    <ItemPage />
                </Route>
                <Redirect exact from="/" to="/items" />
            </Switch>

            <Footer />
        </div>
    );
}

export default Home;