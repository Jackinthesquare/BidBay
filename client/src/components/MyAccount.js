import { useEffect, useState } from "react"
import "./css/my_account.css"

const MyAccount = ({ user }) => {
  const [userAccount, setUserAccount] = useState([])

  console.log(user)

  useEffect(() => {
    (async () => {
      let req = await fetch(`/users/${user}`)
      let res = await req.json()
      setUserAccount(res)
    })()
  }, [])

  return (
    <div className="account-container">
      <div className="pfp-container">
        <div>
          <img className="account-pfp" src={userAccount.pfp} />
        </div>
        <button className="acct-btn">Change profile picture</button>
      </div>

      <div className="account-text">
        <h1>My account</h1>
        <li>Username : {userAccount.username}</li>
        <li>Balance : $ {userAccount.balance}</li>
        <div className="change-pwd-container">
        <button className="acct-btn">Change password</button>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;