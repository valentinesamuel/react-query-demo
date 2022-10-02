import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHero = (heroid) => {
  return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}

const DynamicParallel = ({ heroIds }) => {

  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )
  console.log({ queryResults });
  return (
    <div>DynamicParallel</div>
  )
}

export default DynamicParallel