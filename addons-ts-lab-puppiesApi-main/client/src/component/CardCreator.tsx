import pluss from "../images/pluss.png"
import { useState } from "react"
import { PuppyState } from "./Gallery"
import { useForm, SubmitHandler } from "react-hook-form"
import { apiData, pictureState, formState } from "../interfaces"

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
const CardCreator = ({ puppyData, setPuppyData }: { puppyData: PuppyState[], setPuppyData: React.Dispatch<React.SetStateAction<PuppyState[]>> }) => {
  const [imageData, setImageData] = useState<pictureState[]>([])
  const [createState, setCreateState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('')
  const { register, handleSubmit, reset } = useForm<formState>({
    defaultValues: {
      name: '',
      breed: '',
      birthDate: ''
    }
  });

  const onSubmit: SubmitHandler<formState> = (data: formState) => {
    createNewPuppyCard({ ...data, url: selectedImage })
    setImageData([])
    setCreateState(!createState)
    setSelectedImage('')
    reset()
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

  const toggleCreateMenu = () => {
    setCreateState(!createState)
    if (!imageData.length) {
      fetchRandomDogs()
    }
  }

  return !createState ? (
    <div onClick={toggleCreateMenu} className="card-container">
      <h1 className="card__title">Add New Dog</h1>
      <img className="card__image--creator" src={pluss} alt="add new dog" />
    </div >
  )
    :
    (
      <div className="card-container">
        <button className="create-card-close-button" onClick={toggleCreateMenu}>Close</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Breed" {...register("breed", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Birthdate" {...register("birthDate", { required: true, maxLength: 80 })} />
          </div>
          <h2 className="create-card-title">Choose a Picture</h2>
          <div className="image-selection__container">
            {imageData.map(image => <img onClick={(e) => setSelectedImage(e.currentTarget.src)} id={image.id} className='card__image--selection' src={image.url} alt="add new dog" key={image.id} />)}
          </div>
          {selectedImage ? <input className="image-select-btn" type="submit" /> : <p className="image-select-text">Select a picture</p>}
        </form>
      </div >
    )
}

export default CardCreator

