import { AxiosResponse } from "axios"
import useSWR from "swr"
import { Response, handleResponse, catchError, api } from "./base"
import { Login,User } from "../types/types";

export async function login(email:string,password:string) {
    const data = new FormData();
    data.append('email',email);
    data.append('password',password)
    
    const res: Response<Login> = await api
      .post<Response<Login>>("/auth/login", data)
      .then((e: AxiosResponse<Response<Login>, any>) => handleResponse<Response<Login>>(e))
      .catch(catchError)
  
    if (res.code === 422) {
        console.log({ code: res.code, data: res.data })
        const err: any = Error(`${res.code}: ${res.data}`)
        err.code = res.code
        err.data = res.data
        throw err
    }else if (res.code !== 200) {
        console.log({ code: res.code, error_message: res.error_message })
        const err: any = Error(`${res.code}: ${res.error_message}`)
        err.code = res.code
        err.error_message = res.error_message
        throw err
    }
  
    return res.data
  }

export async function register(email:string,password:string) {
    const data = new FormData();
    data.append('email',email);
    data.append('password',password)
    
    const res: Response<User> = await api
      .post<Response<User>>("/auth/register", data)
      .then((e: AxiosResponse<Response<User>, any>) => handleResponse<Response<User>>(e))
      .catch(catchError)
  
      if (res.code === 422) {
        console.log({ code: res.code, data: res.data })
        const err: any = Error(`${res.code}: ${res.data}`)
        err.code = res.code
        err.data = res.data
        throw err
    }else if (res.code !== 200) {
        console.log({ code: res.code, error_message: res.error_message })
        const err: any = Error(`${res.code}: ${res.error_message}`)
        err.code = res.code
        err.error_message = res.error_message
        throw err
    }
  
    return res.data
  }
  