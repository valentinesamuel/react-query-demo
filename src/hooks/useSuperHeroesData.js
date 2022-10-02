import axios from "axios"
import { useQuery, useMutation, useQueryClient } from "react-query"


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes/')
}
const addSuperhero = (hero) => {
    return axios.post('http://localhost:4000/superheroes/', hero)
}

export const useSuperHeroData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        //  staleTime: 30000, amount of time before query checks if the data is freah before doing a refetch
        //    refetchOnMount: true, the query will  refetch anytime you comeback to that component
        //  refetchOnWindowFocus: true,the query will refetch anytime you focus on the window
        //refetchInterval: 2000,  query will refetch every 2secs and it is paused when window loses focus. else, used refetchIntervalInBackground:true
        //  enabled:false, //prevents the app from fetching data when the component mounts then use refetch from the query object and pass it as the onclick hadler of the button
        onSuccess,//   do something after a successful fetch
        onError // do something after a fialed fetch
        /* select: (data) => {
             const superHeroNames = data.data.map((hero) => hero.name)
             return superHeroNames}
        */ // here we can transform the type of data that we are reciving

    })

}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperhero, {
        onSuccess: () => {
            queryClient.invalidateQueries('super-heroes')
        }
    })
}