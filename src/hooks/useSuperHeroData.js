import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHero = (heroid) => {
    return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}


export const useSuperHeroData = (heroid) => {
    return useQuery(['super-hero', heroid], () => fetchSuperHero(heroid))
}