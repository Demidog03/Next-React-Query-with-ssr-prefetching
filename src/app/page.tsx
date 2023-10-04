import PrefetchWrapper from '@/app/components/PrefetchWrapper'
import NewsCards from '@/app/components/news/NewsCards'
import { fetchLatestNews } from '@/actions/news'
import { type FC } from 'react'

const Home: FC = () => {
  const page = 0
  const pageSize = 0
  const pageLimit = 0
  return (
    <PrefetchWrapper queryKey="news" promiseCallback={fetchLatestNews}>
      <NewsCards page={page} pageSize={pageSize} pageLimit={pageLimit} />
    </PrefetchWrapper>
  )
}

export default Home
