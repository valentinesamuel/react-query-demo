import axios from 'axios'

const client = axios.create({ baseUrl: 'http://localhost:4000/'})

export const request = async ({ ...options }) => {
    client.defaults.headers.common.Authorisation = `Bearer token`
    const onSuccess = (response) => response
    const onError = (error) => {
        // optionally catch errors and add additional logging here
        return error
    }
    try {
        const response = await client(options)
        return onSuccess(response)
    } catch (error) {
        return onError(error)
    }
}