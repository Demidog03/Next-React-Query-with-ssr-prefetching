import { type HackerNews } from '@/actions/news/newsTypes'
import { getLatestNews, getNewsById } from '@/api/news'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchLatestNews = async () => {
  const news: HackerNews[] = []
  const axiosPromises = []
  const latestNewsResponse = await getLatestNews()
  for (const id of latestNewsResponse.data.slice(0, 100)) {
    axiosPromises.push(getNewsById(id))
  }
  const responseAll = await Promise.all([...axiosPromises])
  // eslint-disable-next-line array-callback-return
  responseAll.map(response => {
    news.push(response.data)
  })
  return news
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchNewsById = async (id: number) => {
  return await getNewsById(id)
}
