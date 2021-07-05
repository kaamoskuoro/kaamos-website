declare module '*.jpg'
declare module '*.png'

declare module '*/home.yml' {
  const data: {
    newsItems: NewsItem[],
    quotes: Quote[]
  }
  export default data
}

interface NewsItem {
  title: string
  body: string
  url: string
}

interface Quote {
  body: string
  author: string
  publication: string
}

declare module '*/choir.yml' {
  const data: {
    sopranos: string[],
    altos: string[],
    tenors: string[],
    basses: string[],
  }
  export default data
}

declare module '*/concerts.yml' {
  const data: {
    concerts: Concert[]
  }
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

declare module '*/contact.yml' {
  const data: {
    contactPersons: ContactPerson[],
  }
  export default data
}

interface ContactPerson {
  name: string
  email: string
  phone: string
}
