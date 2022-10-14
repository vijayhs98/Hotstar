import {useState ,useEffect} from "react"

const Favourites = (props) => {

    let title = props.data

    let [favourites,setFav] = useState([])
    
    let handleDelete = (id) => {
        setFav(favourites.filter(x => x.id !== id))
    }

    useEffect(() =>{
        fetch("http://localhost:4000/favourites")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setFav(data)
        })

    }, [] ) 
    return ( 
        <div className="favs">
            <h1>{title}</h1>
            { favourites.map((data)=>{
                return(
                    <div className="list">
                        <h1>{data.title}</h1>
                        <p>{data.genre},{data.language}</p>
                        <p>{data.rating}</p>
                        <button onClick={()=> handleDelete(data.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );  
}
 
export default Favourites;