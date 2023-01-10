import { PuppyState } from "./Gallery"



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
const PuppiesCard = ({ puppyData, setPuppyData }: { puppyData: PuppyState[], setPuppyData: React.Dispatch<React.SetStateAction<PuppyState[]>> }) => {

  async function deleteDog(id: string) {
    const response = await fetch('/api/puppies/'+id, {
      method: 'DELETE'
    })
    return response;
  }
const deleteCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const newArray = puppyData.filter(card => card.id !== e.currentTarget.id )
  setPuppyData(newArray)
  deleteDog(e.currentTarget.id)
}

  return (
    <>
      {
        puppyData.map((data, index) => (
          <div className="card-container" key={index}>
            <div>
              <button >✏️</button>
              <button id={data.id} onClick={deleteCard}>🗑️</button>
            </div>
            <h1 className="card__title">{data.name}</h1>
            <img className="card__image" src={data.url} alt="" />
            {/* {data.description ? <p className="card__description">{data.description}</p> : <p className="card__description">No description</p>} */}
          </div>
        ))
      }
    </>
  )
}

export default PuppiesCard