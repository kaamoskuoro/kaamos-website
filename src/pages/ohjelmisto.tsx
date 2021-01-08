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
  const [activeTab, setActiveTab] = useState(RepertoirePeriods[0])

  return (
    <Layout>
      <SEO title="Ohjelmisto" />

      <h3 className="title is-3">Ohjelmisto</h3>

      <div className="tabs">
        <ul>
          {RepertoirePeriods.map(period => (
            <Tab
              key={period}
              title={period}
              isActive={activeTab == period}
              onClick={setActiveTab}
            />
          ))}
        </ul>
      </div>

      {Repertoire[activeTab].map((item: RepertoireItem) => (
        <RepertoireSection key={item.composer} item={item} />
      ))}
    </Layout>
  )
}

const RepertoireSection: React.FC<RepertoireSectionProps> = ({ item }) => (
  <div className="block">
    <h6 className="title is-6 mb-1">{item.composer}</h6>

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
