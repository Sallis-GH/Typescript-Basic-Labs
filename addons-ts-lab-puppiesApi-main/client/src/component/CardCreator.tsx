import pluss from "../images/pluss.png"
import { useState } from "react"
import { PuppyState } from "./Gallery"
import { useForm, SubmitHandler } from "react-hook-form"

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
  birthDate: string,
  name: string,
  breed: string,
}

const CardCreator = ({ puppyData, setPuppyData }: { puppyData: PuppyState[], setPuppyData: React.Dispatch<React.SetStateAction<PuppyState[]>> }) => {
  const [imageData, setImageData] = useState<pictureState[]>([])
  const [createState, setCreateState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('')
  const { register, handleSubmit} = useForm<formState>();
  
  const onSubmit: SubmitHandler<formState> = (data: formState) => {
    createNewPuppyCard({...data, url: selectedImage})
    setImageData([])
    setCreateState(!createState)
  }
  
  const fetchRandomDogs = () => {
    fetch(`https://api.unsplash.com/photos/random?orientation=squarish&query=dog&client_id=${API_KEY}&count=6`)
      .then(data => data.json())
      .then((res: apiData[]) => setImageData(res.map(ele => ({
        id: ele.id,
        url: ele.urls.small,
      }))));
  }

  const createNewPuppyCard = (data: PuppyState) => {
    setPuppyData([...puppyData, data])
    createDog(data)
  }

  async function createDog(bodyData: PuppyState) {    
    const response = await fetch('/api/puppies', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    return response;
  }

  const handleClick = () => {
    setCreateState(!createState)
    if (!imageData.length) {
      fetchRandomDogs()
    }
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
        <button className="create-card-close-button" onClick={handleClick}>Close</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
          <input type="text" placeholder="Breed" {...register("breed", { required: true, maxLength: 80 })} />
          <input type="text" placeholder="Birthdate" {...register("birthDate", { required: true, maxLength: 80 })} />
          <h2 className="create-card-title">Choose a Picture</h2>
          <div className="image-selection__container">
            {imageData.map(image => <img onClick={(e) => setSelectedImage(e.currentTarget.src)} id={image.id} className='card__image--selection' src={image.url} alt="add new dog" key={image.id} />)}
          </div>
          <input type="submit" />
        </form>
      </div >
    )
}

export default CardCreator

/*
(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="undefined" placeholder="Breed" {...register} />
      <input type="undefined" placeholder="Birthdate" {...register} />
      <h2 className="create-card-title">Choose a Picture</h2>
      <div className="image-selection__container">
        {imageData.map(image => <img id={image.id} className='card__image--selection' src={image.url} alt="add new dog" key={image.id} />)}
      </div>
      <input type="submit" />
    </form>
  );
*/