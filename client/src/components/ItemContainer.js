import "./css/ItemContainer.css"

import Item from "./Item"


const ItemContainer = ({ items, setItemId }) => {

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
            </div>
        </div>
    );
}

export default ItemContainer;