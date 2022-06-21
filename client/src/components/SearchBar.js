import { useState } from "react"
const SearchBar = ({ setSearch }) => {

    return (
        <div className="search-container" >
            <form>
                <input
                    className="search-bar"
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                    autoComplete="off"
                    onChange = {e => setSearch(e.target.value)}
                />
                {/* <button type="submit" className="search-btn"> Search </button> */}
            </form>
        </div>
    );
}

export default SearchBar;