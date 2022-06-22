import "./css/bidmodal.css"
import { useState,useEffect } from 'react'

const BidForm = ({ isVisible, setIsVisible, itemPage, counter }) => {
    const [priceChange, setPriceChange] = useState(0)
    const [itemPrice, setItemPrice] = useState(itemPage.item_price)

    const handleBid = async (e) => {
        e.preventDefault();
        // if (counter > 0 && priceChange > itemPage.item_price) {
        if (priceChange > itemPage.item_price) {
            let req = await fetch("/bids", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "bid_price": parseFloat(priceChange),
                    "item_id": parseInt(itemPage.id),
                    "user_id": parseInt(6)
                })
            })
            let res = await req.json()

            setItemPrice(res)
        }
        else {
            alert("Bid has not been accepted. Please try again")
        }

    }

    return (
        <div className="bid-modal" style={{ display: isVisible ? "block" : "none" }}>
            <button className="modal-x-btn" onClick={() => setIsVisible(false)}>x</button>
            <p className="bid-price">US ${itemPrice} <span className="bid-history-span">[{itemPage.bids && itemPage.bids.length} bids]</span></p>
            <p className="bid-end">Time Ends : {itemPage.end_time_str}</p>
            <p style={{ fontWeight: 'bold' }}>Time left : {counter} seconds</p>
            <div className="bid-div">
                <p>Place your bid</p>
                <form className="bid-form">
                    <input
                        className="bid-input"
                        type="number"
                        // prevents "e" in numbers
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        name="bid[bid_price]"
                        placeholder="US$"
                        autoComplete="off"
                        onChange={e => setPriceChange(e.target.value)}
                    />
                    <button className="handleBid-btn" onClick={handleBid}>Bid</button>
                </form>
                <p className="bid-disclaimer">When you bid, it means you're committing to buy this item if you're the winning bidder.</p>
            </div>
        </div>
    );
}

export default BidForm;