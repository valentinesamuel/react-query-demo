import { useSuperHeroData } from "../hooks/useSuperHeroData"




const RQSuperHeros = () => {
    // const onSuccess = (data) => {
    //     console.log('Performed side effect after data fetching', data);
    // }

    // const onError = (data) => {
    //     console.log('Performed side effect after encountering error', data);
    // }


    const { isLoading, data, isError, error, isFetching, } = useSuperHeroData()


    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>RQSuperHeros</div>
            {/* <button onClick={refetch}>Fetch Heroes</button> */}
            {/* {data?.data.map(hero => {
                return <h2 key={hero.id}>{hero.name}</h2>
            })} */}
            {data.map(hero => {
                return <h2>{hero}</h2>
            })}

        </>
    )
}

export default RQSuperHeros