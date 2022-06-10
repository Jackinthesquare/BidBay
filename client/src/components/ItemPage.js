import { useState, useEffect } from "react"
import { useRouteMatch } from 'react-router-dom'

const ItemPage = ({ items }) => {
    const [itemPage, setItemPage] = useState([])
    const match = useRouteMatch()

    useEffect(() => {
        (async () => {
            // let req = await fetch(`/items/${itemID}`)
            let req = await fetch(match.url)
            let res = await req.json()
            setItemPage(res)
        })()
    }, [])
    
        // console.log(Array.isArray(itemPage.images))
        console.log(itemPage)

    return (
        
        <div className="item-page-container">
        <h1>{itemPage.title}</h1>
        {itemPage && <p>Description: {itemPage.description}</p>}
        <p>Category: {itemPage.item_tag}</p>
        {/* <p>price: {itemPage.price}</p> */}
        {/* <button>Bid</button> */}
        {/* <img src /> */}
        <p>{itemPage.title}</p>
        

        </div>
    );
}

export default ItemPage;