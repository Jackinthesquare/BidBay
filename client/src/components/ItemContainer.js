import "./css/ItemContainer.css"
import { useState } from "react"
import { useRouteMatch } from 'react-router-dom'

import Item from "./Item"
import SearchBar from "./SearchBar"


const ItemContainer = ({ items, setItemId }) => {
    const match = useRouteMatch()
    const [search, setSearch] = useState("")

    const displayedItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="pic-container">
                {
                    displayedItems.map((item) => {
                        return (
                            // <div className="pic-card">
                            // <h4 className="item-title">{item.title}</h4>
                            // <img className="pic-card-img" src={item.image.url} onClick={() => handleRedirect} />
                            // <p>{item.description}</p>
                            // <p>{item.price} <span>Time left : </span></p>
                            // </div>
                            <Item key={item.id} item={item} setItemId={setItemId} />
                        )
                    })
                }
                {/* <Route path={`${match.url}`}>
                    <ItemPage items={items} />
                </Route> */}
               
            </div>
        </div>
    );
}

export default ItemContainer;