import { useState } from "react"
import pluss from "../images/pluss.png"

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
interface apiData {
  id: string,
  urls: { small: string },
  description: string
}
interface pictureState {
  id: string,
  name: string,
  url: string,
  description: string
}

const CardCreator = () => {
  const [imageData, setImageData] = useState<pictureState[] | []>([])
  const fetchRandomDogs = () => {
    fetch(`https://api.unsplash.com/photos/random?orientation=squarish&query=dog&client_id=${API_KEY}&count=6`)
      .then(data => data.json())
      .then((res: apiData[]) => setImageData(res.map(ele => ({
        id: ele.id,
        name: 'name',
        url: ele.urls.small,
        description: ele.description
      }))));
  }

  return (
    <div className="card-container" key="">
    <h1 className="card__title">Add New Dog</h1>
    <img className="card__image--creator" src={pluss} alt="add new dog" />
    </div >
  )
}

export default CardCreator