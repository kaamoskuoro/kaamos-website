import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Repertoire from "../../data/repertoire.yaml"

interface TabProps {
  isActive: boolean
  title: string
  onClick: (title: string) => void
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

interface RepertoireSectionProps {
  item: RepertoireItem
}

const RepertoirePeriods = Object.keys(Repertoire)

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

const Tab: React.FC<TabProps> = ({ isActive, title, onClick }) => (
  <li className={isActive ? "is-active" : ""}>
    <a onClick={() => onClick(title)}>{title}</a>
  </li>
)

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
