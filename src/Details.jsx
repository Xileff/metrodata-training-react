import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import fetchPets from "./fetchPets";

const Details = () => {
  const { petId } = useParams();
  const results = useQuery(["details", petId], fetchPets); //petId dari useParams()

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🙏</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>
        <button>Adpot {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}

export default Details;
