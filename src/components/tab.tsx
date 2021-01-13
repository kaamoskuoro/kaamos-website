import React from "react"

interface TabProps {
  index: number
  isActive: boolean
  title: string
  onClick: (index: number) => void
}

const Tab: React.FC<TabProps> = ({ index, isActive, title, onClick }) => (
  <li className={isActive ? "is-active" : ""}>
    <a onClick={() => onClick(index)}>{title}</a>
  </li>
)

export default Tab
