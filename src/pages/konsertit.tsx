import dayjs from "dayjs"
import { groupBy, isInteger, keys, partition } from "lodash"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tab from "../components/tab"
import Concerts from "../../data/concerts.json"
import Concert from "../components/concert"

export type Concert = typeof Concerts[0]

const isUpcoming = (concert: Concert) => dayjs(concert.begins).isAfter(dayjs())

const getYear = (concert: Concert) => dayjs(concert.begins).year()

const byNumberDesc = (a: string, b: string) => parseInt(b) - parseInt(a)

// Group concerts for display
const [upcomingConcerts, pastConcerts] = partition(Concerts, isUpcoming)
const pastConcertsByYear = groupBy(pastConcerts, getYear)
const pastConcertYears = keys(pastConcertsByYear).sort(byNumberDesc)

const Konsertit: React.FC = () => {
  const [activeYear, setActiveYear] = useState(pastConcertYears[0])

  return (
    <Layout>
      <SEO title="Konsertit" />

      <h3 className="title is-3">Konsertit</h3>

      {upcomingConcerts.length ? (
        upcomingConcerts.map(concert => (
          <Concert key={concert.begins} concert={concert} />
        ))
      ) : (
        <p className="block has-text-grey">
          Tällä hetkellä ei ole tiedossa tulevia konsertteja.
        </p>
      )}

      <h4 className="title is-4 mb-4">Menneet konsertit</h4>

      <div className="tabs">
        <ul>
          {pastConcertYears.map(year => (
            <Tab
              key={year}
              title={year}
              isActive={year === activeYear}
              onClick={setActiveYear}
            />
          ))}
        </ul>
      </div>

      {pastConcertsByYear[activeYear].map(concert => (
        <Concert key={concert.begins} concert={concert} />
      ))}
    </Layout>
  )
}

export default Konsertit
