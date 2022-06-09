import { useHistory } from 'react-router-dom'

const Item = ({item, setItemId}) => {
    const history = useHistory()

    const handleRedirect = () => {
        setItemId(item.id)
        console.log(item.id)
        // history.push(`/signup`) // tested routing works
        history.push(`/item/${item.id}`)
    }

    return (
        <div className="pic-card">
        <h4 className="item-title">{item.title}</h4>
        <img className="pic-card-img" src={item.image.url} onClick={handleRedirect} />
        <p>{item.description}</p>
        <p>{item.price} <span>Time left : </span></p>
        </div>
      );
    }
    
    export default Item;