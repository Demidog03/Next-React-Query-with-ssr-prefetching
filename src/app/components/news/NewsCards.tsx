'use client'
import React, { Fragment } from 'react'
import { type HackerNews } from '@/actions/news/newsTypes'
import { useQuery } from '@tanstack/react-query'
import { fetchLatestNews } from '@/actions/news'
import NewsCard from '@/app/components/news/NewsCard'
import Grid from '@mui/system/Unstable_Grid'
import { Button, Container } from '@mui/material'
import Backdrop from '@/app/components/ui/Backdrop'

const NewsCards = ({ news: initialData, page, pageSize, pageLimit }: { news?: HackerNews[], page: number, pageSize: number, pageLimit: number }): React.JSX.Element => {
  const { data: news, isLoading, refetch } = useQuery(['news'], fetchLatestNews, {
    refetchInterval: 1000
  })
  const handleRefresh = (): void => {
    void refetch().then(r => {
      console.log(r)
    })
  }
  return (
      <Fragment>
        <Container sx={{ py: 2 }}>
          <Button onClick={handleRefresh} variant="contained">Refresh</Button>
          <Grid container alignItems="stretch" spacing={2} sx={{ overflowX: 'hidden' }}>
            {news?.map((news, index) => (
                <Grid key={index} xs={12} sm={6} md={4}>
                  <NewsCard id={news.id} title={news.title} description={news.text} url={news.url} author={news.by} rating={news.score} time={news.time}/>
                </Grid>
            ))}
          </Grid>
        </Container>
        <Backdrop open={isLoading}/>
      </Fragment>
  )
}

export default NewsCards
