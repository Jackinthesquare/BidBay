import "./css/bidmodal.css"
import ItemPage from "./ItemPage";
const BidForm = ({ isVisible, setIsVisible, itemPage }) => {
    const num = 12312.11111
    console.log(num.toFixed(2))

    return (
        <div className="bid-modal" style={{ display: isVisible ? "block" : "none" }}>
            <button className="modal-x-btn" onClick={() => setIsVisible(false)}>x</button>
            <p className="bid-price">US ${itemPage.price}</p>
            <p className="bid-timer">ends in : </p>
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
                    />
                    <button>bid</button>
                </form>
                <p className="bid-disclaimer">When you bid, it means you're committing to buy this item if you're the winning bidder.</p>
            </div>
        </div>
    );
}

export default BidForm;