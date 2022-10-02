import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchSuperHero = (heroid) => {
    return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}


export const useSuperHeroData = (heroid) => {
const queryClient = useQueryClient()

    return useQuery(['super-hero', heroid], () => fetchSuperHero(heroid), {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === parseInt(heroid))
            if (hero) {
                return {
                    data:hero
                }
            } else {
                return undefined
            }
        }
    })
}