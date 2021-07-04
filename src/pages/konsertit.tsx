import dayjs from "dayjs"
import { partition, uniq } from "lodash"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tab from "../components/tab"
import concertsContent from "../../content/concerts.yml"
import Concert from "../components/concert"

interface TabItem {
  title: string
  concerts: Concert[]
}

const isUpcoming = (concert: Concert) => dayjs(concert.begins).isAfter(dayjs())

const getYear = (concert: Concert) => dayjs(concert.begins).year()

const byNumDesc = (a: number, b: number) => b - a

// Start grouping concerts for display
const { concerts } = concertsContent
const [upcomingConcerts, pastConcerts] = partition(concerts, isUpcoming)
const pastConcertYears = uniq(pastConcerts.map(getYear)).sort(byNumDesc)

// Determine earliest year that still gets displayed in tabs
const MAX_TAB_COUNT = 6
const cutoffYear =
  pastConcertYears.length > MAX_TAB_COUNT
    ? pastConcertYears[MAX_TAB_COUNT - 1]
    : undefined

// Split past concerts into tabs, grouping the oldest under "cutoff tab" if needed
const tabItems = pastConcertYears.reduce((acc, year) => {
  if (!cutoffYear || year > cutoffYear) {
    const concerts = pastConcerts.filter(c => getYear(c) === year).reverse()
    return [...acc, { title: `${year}`, concerts }]
  } else if (year === cutoffYear) {
    const concerts = pastConcerts.filter(c => getYear(c) <= year).reverse()
    return [...acc, { title: `${year} ja aiemmat`, concerts }]
  }
  return acc
}, [] as TabItem[])

const Konsertit: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <Layout>
      <SEO title="Konsertit" />

      <div className="columns">
        <div className="column is-8">
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
              {tabItems.map(({ title }, index) => (
                <Tab
                  key={title}
                  index={index}
                  isActive={index === activeTabIndex}
                  title={title}
                  onClick={setActiveTabIndex}
                />
              ))}
            </ul>
          </div>

          {tabItems[activeTabIndex].concerts.map(concert => (
            <Concert key={concert.begins} concert={concert} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Konsertit
