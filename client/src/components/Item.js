import { useHistory, Link } from 'react-router-dom'

const Item = ({ item, setItemId }) => {
  const history = useHistory()

  const handleRedirect = () => {
    setItemId(item.id)
    console.log(item.id)
    history.push(`/signup`) // tested routing works
    history.push(`/items/${item.id}`)
  }

  return (
    <div className="pic-card">
      <h1 className="item-title">{item.title}</h1>
      <img className="pic-card-img" src={item.image.url} onClick={handleRedirect} />
      <p><span>Description : </span>{item.description}</p>
      <p><span>Time left : </span> {item.price}</p>
      {/* <Link to={`/items/${item.id}`}>items link</Link> */}

    </div>
  );
}

export default Item;