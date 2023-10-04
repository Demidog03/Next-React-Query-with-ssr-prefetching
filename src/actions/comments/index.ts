import { getCommentById } from '@/api/comments'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchNewsComments = async (ids: number[]) => {
  const commentPromises = []
  for (const id of ids) {
    commentPromises.push(getCommentById(id))
  }
  const responseAll = await Promise.all([...commentPromises])
  return responseAll.map(r => r.data)
}
