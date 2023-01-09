import { useEffect, useState } from "react"
import CardCreator from "./CardCreator"
import PuppiesCard from "./PuppiesCard"

export interface PuppyState {
  birthDate: string
  breed: string,
  name: string,
  url: string
}


const Gallery = () => {
  const [puppyData, setPuppyData] = useState<PuppyState[]>([])

  const fetchPuppies = () => {
    fetch('/api/puppies')
      .then(data => data.json())
      .then((res: PuppyState[]) => setPuppyData(res.map(ele => ({
        birthDate: ele.birthDate,
        breed: ele.breed,
        name: ele.name,
        url: ele.url,
      }))))
  }
  useEffect(() => fetchPuppies(), [])


  return (
    <section className="card-section">
      <PuppiesCard puppyData={puppyData} setPuppyData={setPuppyData} />
      <CardCreator puppyData={puppyData} setPuppyData={setPuppyData} />
    </section>
  )
}

export default Gallery