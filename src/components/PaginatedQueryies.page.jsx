import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueryies = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, isError, error, data } = useQuery(['colors', pageNumber], () => fetchColors(pageNumber))

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map((color) => {
                    return (
                        <div key={color.id}>
                            <h2>
                                {color.id},  {color.label}
                            </h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button disabled={pageNumber === 1} onClick={() => setPageNumber(page => page - 1)}>Prev Page</button>
                <button disabled={pageNumber === 4} onClick={() => setPageNumber(page => page + 1)}>Next Page </button>
            </div>
        </>
    )
}

export default PaginatedQueryies