import "./css/ItemContainer.css"
import { useState } from "react"
import { useHistory } from 'react-router-dom'

const ItemContainer = ({ items }) => {
    const [itemId,setItemId] = useState(0)
    const history = useHistory()

    const handleRedirect = () => {
        setItemId(item.id)
        console.log(item.id)
        // history.push(`/signup`) // tested routing works
        history.push(`/item${itemID}`)
    }
    return (
        <div>
            <div className="pic-container">
                {
                    items.map((item) => {
                        
                        return (
                            <div className="pic-card">
                            <h4 className="item-title">{item.title}</h4>
                            <img className="pic-card-img" src={item.image.url} onClick={handleRedirect} />
                            <p>{item.description}</p>
                            <p>{item.price} <span>Time left : </span></p>
                        
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ItemContainer;