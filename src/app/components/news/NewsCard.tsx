import { type FC } from 'react'
import { Avatar, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import { Image } from 'mui-image'
import Link from 'next/link'
import StarsIcon from '@mui/icons-material/Stars'

interface NewsCardProps {
  id: number
  title: string
  rating: number
  author: string
  time: number
  description: string
  url: string
}

const NewsCard: FC<NewsCardProps> = ({ id, description, title, url, author, time, rating }) => {
  const htmlDescription = { __html: description }
  const formattedDate = (new Date(time)).toDateString()
  return (
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
                <Chip avatar={<Avatar sx={{ ml: 0 }}>{author[0] || 'A'}</Avatar>} label={author || 'No author'} />
                <Typography fontSize={12}>{formattedDate}</Typography>
              </Stack>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              {description
                ? <Typography variant="body2" color="text.secondary">
                    <div dangerouslySetInnerHTML={htmlDescription}/>
                </Typography>
                : <Typography variant="body2" color="chocolate">
                    No description
                </Typography>
              }
            </Stack>
             <Stack direction="row" alignItems="center" justifyContent="space-between">
               <Stack direction="row" alignItems="center" gap={1}>
                 <StarsIcon/>
                 <Typography>{rating}</Typography>
               </Stack>
              <Link href={`/news/${ id }`} style={{ alignSelf: 'flex-end' }}><Button variant="text" color="primary">Learn more</Button></Link>
             </Stack>
          </Stack>
        </Stack>
      </Paper>
  )
}

export default NewsCard
