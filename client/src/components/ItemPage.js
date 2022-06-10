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
            console.log(res)
        })()
    }, [])

    return (
        <div className="item-page">
            <h1>{match.url}</h1>
    <h2>{itemPage.id}</h2>
        </div>
    );
}

export default ItemPage;