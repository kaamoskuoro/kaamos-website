declare module '*.jpg'
declare module '*.png'

declare module '*/news.yaml' {
  const data: NewsItem[]
  export default data
}

interface NewsItem {
  title: string
  body: string
}

declare module '*/quotes.yaml' {
  const data: Quote[]
  export default data
}

interface Quote {
  body: string
  author: string
  publication: string
}

declare module '*/repertoire.yaml' {
  const data: RepertoireItem[]
  export default data
}

interface MultiMovementWork {
  name: string
  movements: string[]
}

type Work = string | MultiMovementWork

interface RepertoireItem {
  composer: string
  works: Work[]
  note?: string
}

declare module '*/singers.yaml' {
  const data: {
    sopranos: string[],
    altos: string[],
    tenors: string[],
    basses: string[],
  }
  export default data
}
