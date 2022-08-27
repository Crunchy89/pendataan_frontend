import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost/pendataan/api"
export const api = axios.create({ baseURL: `${BASE_URL}`, timeout: 30000 })

export interface Response<T> {
    code: number
    message?:string
    data?: T
    error_message?: string
}

export function handleResponse<T>(res: AxiosResponse<T>): T {
    return res.data
}

export function catchError(error: AxiosError<Response<any>>) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response?.data?.code)
        console.log(error.response?.data?.error_message)
        return error.response?.data
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
        return {
            code: 400,
            message: error.request,
            data: undefined,
            error_message: error.request,
        }
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message)
        return {
            code: 400,
            message: error.message,
            data: undefined,
            error_message: error.message,
        }
    }
}