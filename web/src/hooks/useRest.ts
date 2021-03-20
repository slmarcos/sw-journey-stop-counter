import { useReducer } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface DataRequest {
  loading: boolean
  payload?: { [key: string]: any }
  error?: any
}
interface ReducerAction {
  type: string
  loading: boolean
  payload?: any
  error?: any
}

const reducer = (state: any, action: ReducerAction) => {
  switch (action.type) {
    case 'REQUEST':
      return { loading: true }
    case 'SUCCESS':
      return { loading: false, payload: action.payload }
    case 'ERROR':
      return { loading: false, error: action.error }
    default:
      return state
  }
}

const init = (baseUrl: string) => {
  const useGet = (resource: string): [DataRequest, (params?: string | number) => void] => {
    const [payload, dispatch] = useReducer(reducer, [])
    const get = (params?: string | number) => {
      const url = params ? `${baseUrl}${resource}${params}` : `${baseUrl}${resource}`
      dispatch({ type: 'REQUEST', loading: true })
      axios.get(url)
        .then((res: AxiosResponse) => dispatch({ type: 'SUCCESS', loading: false, payload: res }))
        .catch((err: AxiosError) => dispatch({ type: 'ERROR', loading: false, error: err }))
    }
    return [payload, get]
  }
  return { useGet }
}

export default init
