import { type AxiosResponse } from 'axios'
import { api } from '@/api/api'
import { type Comment } from '@/actions/comments/commentTypes'

export const getCommentById = async (id: number): Promise<AxiosResponse<Comment>> => {
  return await api.get(`/item/${id}.json`)
}
