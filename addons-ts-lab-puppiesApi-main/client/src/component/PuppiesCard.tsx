import { useEffect, useState } from "react"
interface pictureState {
  id: string,
  name: string,
  url: string,
  description: string
}
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
const mockdata: pictureState[] = [
  {
    id: '1',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  },
  {
    id: '2',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  },
  {
    id: '3',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  },
  {
    id: '4',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  },
  {
    id: '5',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  },
  {
    id: '6',
    name: 'doggo',
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
    description: 'a dawg'
  }
]
const PuppiesCard = () => {
  const [imageData, setImageData] = useState<pictureState[] | []>([])
  // const fetchRandomDog = () => {
  //   fetch(`https://api.unsplash.com/photos/random?orientation=squarish&query=dog&client_id=${API_KEY}&count=6`)
  //     .then(data => data.json())
  //     .then(res => console.log(res))
  // }

  // fetchRandomDog();
  useEffect(() => setImageData(mockdata), [])
  return (
    <>
      {imageData.map(data => (
      <div className="card-container" key={data.id}>
        <h1 className="card__title">{data.name}</h1>
        <img className="card__image" src={data.url} alt="" />
        <p className="card__description">{data.description}</p>
      </div>
      ))}
    </>
  )
}

export default PuppiesCard