import "./css/ItemContainer.css"
import { Route, useRouteMatch } from 'react-router-dom'

import Item from "./Item"
import ItemPage from "./ItemPage"


const ItemContainer = ({ items, setItemId }) => {
    const match = useRouteMatch()
        

    return (
        <div>
            <div className="pic-container">
                {
                    items.map((item) => {
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