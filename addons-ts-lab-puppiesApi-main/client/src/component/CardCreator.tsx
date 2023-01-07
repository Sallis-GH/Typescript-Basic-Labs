import { useState } from "react"
import { PuppyState } from "./Gallery"
import pluss from "../images/pluss.png"

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
export interface apiData {
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

const CardCreator = ({ puppyData, setPuppyData }: { puppyData: PuppyState[], setPuppyData: React.Dispatch<React.SetStateAction<PuppyState[]>> }) => {
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
  const createNewPuppyCard = () => {
    setPuppyData([...puppyData, {
      birthDate: 'string',
      breed: 'string',
      id: `${puppyData.length}`,
      name: 'string',
      url: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg'
    }])
    createDog({
      birthDate: 'string',
      breed: 'string',
      id: `${puppyData.length}`,
      name: 'string',
      url: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg'
    })
  }

  async function createDog(bodyData: PuppyState) {
      const response = await fetch('/api/puppies', {
        method: 'POST',
        body: JSON.stringify(
          {
            birthDate: 'string',
            breed: 'string',
            id: `${puppyData.length}`,
            name: 'string',
            url: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg'
          }
        ),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
  })
  return response;
}

  return (
    <div onClick={() => createNewPuppyCard()} className="card-container" key="">
      <h1 className="card__title">Add New Dog</h1>
      <img className="card__image--creator" src={pluss} alt="add new dog" />
    </div >
  )
}

export default CardCreator