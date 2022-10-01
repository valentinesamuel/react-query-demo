import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient()

const Container = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="superheroes">Traditional Superheroes</Link>
                        </li>
                        <li>
                            <Link to="rqsuperheroes">RQ Superheroes</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Outlet />
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    )
}

export default Container