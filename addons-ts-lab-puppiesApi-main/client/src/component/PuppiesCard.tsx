import { useEffect, useState } from "react"


interface puppyState {
  birthDate: string
  breed: string,
  id: string,
  name: string,
  url: string
}


// const mockdata: pictureState[] = [
//   {
//     id: '1',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   },
//   {
//     id: '2',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   },
//   {
//     id: '3',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   },
//   {
//     id: '4',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   },
//   {
//     id: '5',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   },
//   {
//     id: '6',
//     name: 'doggo',
//     url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTYxOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI5NjAzNTY&ixlib=rb-4.0.3&q=80&w=200',
//     description: 'a dawg'
//   }
// ]
const PuppiesCard = () => {
  const [puppyData, setPuppyData] = useState<puppyState[] | []>([])

  const fetchPuppies = () => {
    fetch('/api/puppies')
      .then(data => data.json())
      .then((res: puppyState[]) => setPuppyData(res.map(ele => ({
        birthDate: ele.birthDate,
        breed: ele.breed,
        id: ele.id,
        name: ele.name,
        url: ele.url,
      }))))
  }
  // useEffect(() => fetchRandomDogs(), [])
  useEffect(() => fetchPuppies(), [])
  return (
    <>
      {puppyData.map(data => (
        <div className="card-container" key={data.id}>
          <h1 className="card__title">{data.name}</h1>
          <img className="card__image" src={data.url} alt="" />
          {/* {data.description ? <p className="card__description">{data.description}</p> : <p className="card__description">No description</p>} */}
        </div>
      ))}
    </>
  )
}

export default PuppiesCard