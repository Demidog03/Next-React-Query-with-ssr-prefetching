import {AxiosResponse} from 'axios'

export type AxiosPromise<T> = Promise<AxiosResponse<T>>
export type AxiosResponseType<T extends AxiosResponse<unknown>> = T extends Promise<infer U> ? U : never
export type PromiseResponse<T> = T extends Promise<infer U> ? U : never
