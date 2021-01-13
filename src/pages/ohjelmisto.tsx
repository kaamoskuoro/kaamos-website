import { keys } from "lodash"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tab from "../components/tab"
import Repertoire from "../../data/repertoire.yaml"

interface RepertoireSectionProps {
  item: RepertoireItem
}

const RepertoirePeriods = keys(Repertoire)

const Ohjelmisto: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const activePeriod = RepertoirePeriods[activeTabIndex]

  return (
    <Layout>
      <SEO title="Ohjelmisto" />

      <h3 className="title is-3">Ohjelmisto</h3>

      <div className="tabs">
        <ul>
          {RepertoirePeriods.map((period, index) => (
            <Tab
              key={period}
              index={index}
              isActive={activeTabIndex === index}
              title={period}
              onClick={setActiveTabIndex}
            />
          ))}
        </ul>
      </div>

      {Repertoire[activePeriod].map(item => (
        <RepertoireSection key={item.composer} item={item} />
      ))}
    </Layout>
  )
}

const RepertoireSection: React.FC<RepertoireSectionProps> = ({ item }) => (
  <div className="block">
    <p>
      <strong>{item.composer}</strong>
    </p>

    {item.works.map((work, index) => {
      if (typeof work === "object") {
        return (
          <div key={index}>
            <p>{work.name}:</p>
            <div>
              {work.movements.map((movement, index) => (
                <p key={index} className="is-italic">
                  {movement}
                </p>
              ))}
            </div>
          </div>
        )
      } else {
        return <p key={index}>{work}</p>
      }
    })}

    {item.note && <p className="is-italic has-text-grey mt-2">{item.note}</p>}
  </div>
)

export default Ohjelmisto
