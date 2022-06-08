import "./css/ItemContainer.css"

const ItemContainer = ({ items }) => {
    
    return (
        <div>
            <div className="pic-container">
                {
                    items.map((item) => {
                        
                        return (
                            
                            <div className="pic-card">
                            <h4 className="item-title">{item.title}</h4>
                            <img className="pic-card-img" src={item.image.url} />
                            <p>{item.description}</p>
                            <p>{item.price} <span>Time left</span></p>
                        
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ItemContainer;