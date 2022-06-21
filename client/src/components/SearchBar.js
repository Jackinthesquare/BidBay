import { useState } from "react"
import "./css/searchbar.css"

const SearchBar = ({ setSearch }) => {

    const [newSearch, setNewSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(newSearch)
    }

    return (
        <div className="search-container" onSubmit={handleSubmit} >
            <form>
                <input
                    className="search-bar"
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                    autoComplete="off"
                    onChange = {e => setNewSearch(e.target.value)}
                />
                <button type="submit" className="search-btn"> Search </button>
            </form>
        </div>
    );
}

export default SearchBar;