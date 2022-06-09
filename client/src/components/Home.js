import "../App.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemContainer from "./ItemContainer"

import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'
import ItemPage from "./ItemPage"
import MyAccount from "./MyAccount"

import { useState, useEffect } from "react"

import BBlogo from "./assets/BBlogo.png"


const Home = () => {
    let { path, url } = useRouteMatch();
    const { id } = useParams()

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
                <ItemContainer items={items} setItemId={setItemId} />

                <Route exact path="/my_account">
                    <MyAccount />
                </Route>

                <Route exact path="/item/1">
                    <ItemPage />
                </Route>
            </Switch>


            <Footer />
        </div>
    );
}

export default Home;