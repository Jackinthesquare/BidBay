import {useState, useEffect} from "react"

const ItemPage = ({itemID}) => {
    const [itemPage,setItemPage] = useState([])

    useEffect (() => {
        (async () => {
            let req = await fetch(`/items/${itemID}`)
            let res = await req.json()
            setImagepage(res)
        }) ()
    },[])

    return (
        <div className="item-page">
            

        </div>
      );
    }
    
    export default ItemPage;