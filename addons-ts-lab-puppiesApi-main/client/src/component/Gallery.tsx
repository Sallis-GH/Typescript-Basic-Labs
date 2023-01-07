import CardCreator from "./CardCreator"
import PuppiesCard from "./PuppiesCard"

const Gallery = () => {
  return (
    <section className="card-section">
      <PuppiesCard />
      <CardCreator />
    </section>
  )
}

export default Gallery