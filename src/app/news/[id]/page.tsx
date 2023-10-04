'use client'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { useQuery } from '@tanstack/react-query'
import { fetchNewsById } from '@/actions/news'
import { type HackerNews } from '@/actions/news/newsTypes'
import React, { Fragment } from 'react'
import { Avatar, Button, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import NewsCard from '@/app/components/news/NewsCard'
import Backdrop from '@/app/components/ui/Backdrop'
import { Image } from 'mui-image'
import StarsIcon from '@mui/icons-material/Stars'
import Link from 'next/link'
import { fetchNewsComments } from '@/actions/comments'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Page = ({ news: initialData, params }: { news?: HackerNews, params: { id: string } }) => {
  const { data: news, isLoading, refetch, isSuccess } = useQuery(['news'], async ({ queryKey }) => await fetchNewsById(+params.id))

  const data = news?.data

  const { data: comments } = useQuery(['comments'], async ({ queryKey }) => await fetchNewsComments(data?.kids!), {
    enabled: isSuccess
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
              {data && (
                  <Paper sx={{ height: '100%' }}>
                    <Stack sx={{ height: '100%' }} alignItems="flex-start">
                      <Image
                          height={140}
                          src="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/hacker-g2ff83b8731280-1689686255062.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
                          alt="hacker image"
                      />
                      <Stack sx={{ p: 3, height: '100%', width: '100%' }} justifyContent="space-between" spacing={2}>
                        <Stack justifyContent="left">
                          <Stack sx={{ mb: 1 }} direction="row" justifyContent="space-between" alignItems="center">
                            <Chip avatar={<Avatar sx={{ ml: 0 }}>{data.by[0] || 'A'}</Avatar>} label={data.by || 'No author'} />
                            {data?.time && <Typography fontSize={12}>{new Date(data.time).toDateString()}</Typography>}
                          </Stack>
                          <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                          <Stack direction="row" alignItems="center" gap={1}>
                            <StarsIcon/>
                            <Typography>{data.score}</Typography>
                          </Stack>
                          {data?.url &&
                              <Link href={data.url} style={{ alignSelf: 'flex-end' }}><Button variant="text" color="primary">Learn more</Button></Link>
                          }
                        </Stack>
                      </Stack>
                    </Stack>
                  </Paper>
              )}
          </Grid>
          <Stack gap={1}>
            {comments?.map((com, index) => (
                <Paper key={index} sx={{ p: 2 }}>
                  <Chip avatar={<Avatar sx={{ ml: 0 }}>{com.by[0] || 'A'}</Avatar>} label={com.by || 'No author'} />
                  <Typography>{com?.text}</Typography>
                </Paper>
            ))}
          </Stack>
        </Container>
        <Backdrop open={isLoading}/>
      </Fragment>
  )
}

export default Page
