import { useState, useEffect } from "react"
import { useRouteMatch } from 'react-router-dom'

import './css/itemPage.css'

const ItemPage = ({ items }) => {
    const [itemPage, setItemPage] = useState({})
    const [selectImg, setSelectImg] = useState('')
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
    console.log(itemPage.images && itemPage.images[0].url)

    return (

        <div className="item-page-container">
            <div className='selected-img-container'>
                {
                    itemPage.images && itemPage.images.map((image, index) => {
                        return (
                            <img className='selected-img' src={image.url} onClick={() => setSelectImg(image.url)} />
                        )
                    })
                }
            </div>

            <div>
                <img className="show-img" src={selectImg || itemPage.images && itemPage.images[0].url} />
            </div>

            <div className="desc-box">
                <h1>{itemPage.title}</h1>
                {itemPage && <p>Description: {itemPage.description}</p>}
                <p>Category: {itemPage.item_tag}</p>
                <p>price: {itemPage.price}</p>
                <button className="bid-btn">Bid</button>
            </div>
        </div>
    );
}

export default ItemPage;