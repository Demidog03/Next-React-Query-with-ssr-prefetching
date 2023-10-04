export interface HackerNews {
  by: string
  descendants: number
  id: number
  score: number
  text: string
  time: number
  title: string
  type: string
  url: string
  kids: number[]
}

export type HackerNewsLatest = number[]
