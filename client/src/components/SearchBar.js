const SearchBar = () => {

    return (
        <div className="search-container">
            <form>
                <input
                    className="search-bar"
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                    autoComplete="off"
                />
            </form>
        </div>
    );
}

export default SearchBar;