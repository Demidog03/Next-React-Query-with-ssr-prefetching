import { api } from '@/api/api'
import { type AxiosResponse } from 'axios'
import { type HackerNews } from '@/actions/news/newsTypes'

export const getLatestNews = async (): Promise<AxiosResponse<number[]>> => {
  return await api.get('/newstories.json')
}

export const getNewsById = async (id: number): Promise<AxiosResponse<HackerNews>> => {
  return await api.get(`/item/${id}.json`)
}
