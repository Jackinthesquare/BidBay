import { useEffect, useState } from "react"
import "./css/my_account.css"

const MyAccount = ({ user }) => {
  const [userAccount, setUserAccount] = useState([])


  useEffect(() => {
    (async () => {
      let req = await fetch(`/users/${user}`)
      let res = await req.json()
      setUserAccount(res)
    })()
  }, [])

  return (
    <div className="account-container">
      <div className="account-text">
        <h1>Username : {userAccount.username}</h1>
        <h1>Balance : $ {userAccount.balance}</h1>
        <h1>Address :
          11 Broadway<br />
          New York, New York, 10004
        </h1>
        <h1>Credit card: 1234 4567 8912 3456</h1>
      </div>
    </div>
  );
}

export default MyAccount;