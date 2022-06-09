import "./App.css"
import { Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import MyAccount from "./components/MyAccount"
import ItemPage from "./components/ItemPage"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      

      {/* <Route exact path="/my_account">
        <MyAccount />
      </Route>

      <Route exact path="/items/1">
        <ItemPage />
      </Route> */}




    </div>
  );
}

export default App;
