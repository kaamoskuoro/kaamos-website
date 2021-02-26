declare module '*.jpg'
declare module '*.png'

declare module '*/concerts.yaml' {
  const data: Concert[]
  export default data
}

interface Concert {
  title: string
  begins: string
  venue: string
  address: string
  description: string
  conductor: string
  admission: string
  ticketURL: string
}

declare module '*/contact.yaml' {
  const data: ContactItem[]
  export default data
}

interface ContactItem {
  name: string
  email: string
  phone: string
}

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

declare module '*/singers.yml' {
  const data: {
    sopranos: string[],
    altos: string[],
    tenors: string[],
    basses: string[],
  }
  export default data
}
