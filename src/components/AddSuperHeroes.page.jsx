import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useSuperHeroData, useAddSuperHeroData } from '../hooks/useSuperHeroesData'

const AddSuperHeroes = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log('Perform side effect adter successful data fetching', data);
    }

    const onError = (error) => {
        console.log('Perform side effect adter error', error);
    }

    const { isLoading, isFetching, data,  refetch } = useSuperHeroData(onSuccess, onError)
    const { mutate: addhero } = useAddSuperHeroData()

    const handleAddHeroCLick = () => {
        console.log({ name, alterEgo });
        const hero = { name, alterEgo }
        addhero(hero)
    }


    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>RQ Add super heroes page</h2>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
                <button onClick={handleAddHeroCLick}>Add Hero</button>
            </div>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero) => {
                return (
                    <div key={hero.id}>
                        <Link to={`/${hero.id}`}>{hero.name}</Link>
                    </div>
                )
            })}
        </>
    )
}

export default AddSuperHeroes