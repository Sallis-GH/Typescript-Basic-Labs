import { useState } from "react"
import { PuppyState } from "./Gallery"
import pluss from "../images/pluss.png"

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
export interface apiData {
  id: string,
  urls: { small: string },
}
interface pictureState {
  id: string,
  url: string,
}
interface formState {
  id: string,
  birthdate: string,
  name: string,
  breed: string,
  url: string,
}

const CardCreator = ({ puppyData, setPuppyData }: { puppyData: PuppyState[], setPuppyData: React.Dispatch<React.SetStateAction<PuppyState[]>> }) => {
  const [imageData, setImageData] = useState<pictureState[] | []>([])
  const [createState, setCreateState] = useState(false);
  const [formState, setFormState] = useState<formState>({} as formState)
  const [zoom, setZoom] = useState(false);
  const fetchRandomDogs = () => {
    fetch(`https://api.unsplash.com/photos/random?orientation=squarish&query=dog&client_id=${API_KEY}&count=6`)
      .then(data => data.json())
      .then((res: apiData[]) => setImageData(res.map(ele => ({
        id: ele.id,
        url: ele.urls.small,
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

  const handleClick = () => {
    fetchRandomDogs()
    setCreateState(!createState)
  }

  return !createState ? (
    <div onClick={handleClick} className="card-container">
      <h1 className="card__title">Add New Dog</h1>
      <img className="card__image--creator" src={pluss} alt="add new dog" />
    </div >
  )
    :
    (
      <div className="card-container">
        <button className="create-card-close-button" onClick={handleClick}>X</button>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <input onChange={(e) => console.log(e.currentTarget.value)} className="card__title" placeholder="Name" value={formState.name} required />
          <input onChange={(e) => console.log(e.currentTarget.value)} className="card__title" placeholder="Breed" value={formState.breed} required />
        </form>
        <h2 className="create-card-title">Choose a Picture</h2>
        <div className="image-selection__container">
          {imageData.map(image => <img id={image.id} className={`card__image--selection ${zoom ? "zoom" : ""}`} src={image.url} alt="add new dog" key={image.id} />)}
        </div>
        <button>Submit</button>
      </div >
    )
}

export default CardCreator