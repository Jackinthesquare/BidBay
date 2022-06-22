import "./css/bidmodal.css"
import { useState } from 'react'

const BidForm = ({ isVisible, setIsVisible, itemPage, counter }) => {
    const [priceChange, setPriceChange] = useState(0)

    // const num = 12312.11111
    // console.log(num.toFixed(2))
    const handleBid = (e) => {
        e.preventDefault();
        if (counter > 0 && priceChange > itemPage.item_price) {
            fetch("/bids", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ priceChange })
            })
        }
        else {
            alert("Bid has not been accepted. Please try again")
        }
        
    }

    return (
        <div className="bid-modal" style={{ display: isVisible ? "block" : "none" }}>
            <button className="modal-x-btn" onClick={() => setIsVisible(false)}>x</button>
            <p className="bid-price">US ${itemPage.item_price}</p>
            <p className="bid-end">Time Ends : {itemPage.end_time_str}</p>
            <p style={{fontWeight: 'bold'}}>Time left : {counter} seconds</p>
            <div className="bid-div">
                <p>Place your bid</p>
                <form className="bid-form">
                    <input
                        className="search-bar"
                        type="number"
                        // prevents "e" in numbers
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        name="bid"
                        placeholder="US$"
                        autoComplete="off"
                        onChange={e => setPriceChange(e.target.value)}
                    />
                    <button onClick={handleBid}>bid</button>
                </form>
                <p className="bid-disclaimer">When you bid, it means you're committing to buy this item if you're the winning bidder.</p>
            </div>
        </div>
    );
}

export default BidForm;