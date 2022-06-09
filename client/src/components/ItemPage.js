import { useState, useEffect } from "react"

const ItemPage = ({ itemID }) => {
    const [itemPage, setItemPage] = useState([])

    useEffect(() => {
        (async () => {
            // let req = await fetch(`/items/${itemID}`)
            let req = await fetch('/items/1')
            let res = await req.json()
            setItemPage(res)
        })()
    }, [])

    return (
        <div className="item-page">
       
            <h1>hi</h1>

        </div>
    );
}

export default ItemPage;