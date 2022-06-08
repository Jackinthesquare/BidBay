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
                            <p>{item.description}</p>
                            <img className="pic-card-img" src={item.image.url} />
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