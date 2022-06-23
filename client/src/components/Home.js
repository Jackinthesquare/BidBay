import "../App.css"
import BBlogo from "./assets/BBlogo.png"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemContainer from "./ItemContainer"
import ItemPage from "./ItemPage"
import MyAccount from "./MyAccount"
import Auctions from "./Auctions"
import Purchases from "./Purchases"
import Login from "./Login"
import Signup from "./Signup"

import { Route, Switch, Redirect } from 'react-router-dom'
import { useState, useEffect } from "react"



const Home = () => {
    const [items, setItems] = useState([])
    const [itemId, setItemId] = useState(0)
    const [user, setUser] = useState(3);
    const [userData, setUserData] = useState([])

    // useEffect(() => {
    //   fetch("/me").then((response) => {
    //     if (response.ok) {
    //       response.json().then((user) => setUser(user));
    //     }
    //   });
    // }, [])

    useEffect(() => {
        (async () => {
            let req = await fetch('/items')
            let res = await req.json()
            setItems(res)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let req = await fetch(`/users/${user}`)
            let res = await req.json()
            setUserData(res)
            console.log(res)
        })()
    }, [])

    return (
        <div className="home">
            <h1 className="home-header"><img className="home-logo" src={BBlogo} /><span className="hi-header"><img className="pfp-icon" src={userData.pfp}/>Hi <span className="user-header">{userData.username}</span> !</span></h1>
            {/* <button className="logout-btn">Logout</button> */}

            <NavBar />

            <Switch>
                <Redirect exact from="/" to="/items" />
                <Route exact path="/login">
                    <Login onLogin={setUser} />
                </Route>

                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/items">
                    <ItemContainer items={items} setItemId={setItemId} />
                </Route>

                <Route path="/my_account">
                    <MyAccount user={user} />
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
            </Switch>

            <Footer />
        </div>
    );
}

export default Home;