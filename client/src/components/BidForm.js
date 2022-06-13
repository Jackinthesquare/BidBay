import "./css/bidmodal.css"
const BidForm = (isVisible) => {

    return (
        <div className="bid-modal" style={{display: isVisible ? "block ": "none"}}>
            <h1> hi from bidform</h1>
            {/* <form>
                <input
                    className="search-bar"
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                    autoComplete="off"
                />
            </form> */}
        </div>
    );
}

export default BidForm;