import { useState, useEffect } from "react"
import { useRouteMatch } from 'react-router-dom'

import './css/itemPage.css'
import BidForm from "./BidForm"

const ItemPage = () => {
    const [itemPage, setItemPage] = useState({})
    const [selectImg, setSelectImg] = useState('')
    const [isSelected, setIsSelected] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [counter, setCounter] = useState(0)
    
    const match = useRouteMatch()

    useEffect(() => {
        (async () => {
            // let req = await fetch(`/items/${itemID}`)
            let req = await fetch(match.url)
            let res = await req.json()
            setItemPage(res)
            setCounter(res.time_diff)
        })()
    }, [])
    // console.log(itemPage.images && itemPage.images[0].url)

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [])
    console.log("date is " + Date.now())


    return (
        <div>
        <div className="item-page-container">
            <div className='selected-img-container'>
                {
                    itemPage.images && itemPage.images.map((image, index) => {
                        return (
                            <img key={index} className={isSelected ? 'isSelected-img' : 'selected-img'} src={image.url} onClick={() => setSelectImg(image.url)} />
                        )
                    })
                }
            </div>

            <div>
                <img className="show-img" src={selectImg || itemPage.images && itemPage.images[0].url} />
            </div>

            <div className="desc-box">
                <h1>{itemPage.title}</h1>
                {itemPage && <p><span>Description</span> : {itemPage.description}</p>}
                <p><span>Current Bid : </span>{itemPage.item_price}</p>
                <p><span>Ends : </span>{itemPage.end_time_str}</p>
                <p style={{fontWeight: 'bold'}}>Time left : {counter} seconds</p>
                <button className="bid-btn" onClick={() => setIsVisible(true) }>Bid</button>
            </div>
        </div>
        <BidForm isVisible={isVisible} setIsVisible={setIsVisible} itemPage={itemPage} counter={counter}/>
    </div>
    );
}

export default ItemPage;