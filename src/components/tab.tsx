import React from "react"

interface TabProps {
  isActive: boolean
  title: string
  onClick: (title: string) => void
}

const Tab: React.FC<TabProps> = ({ isActive, title, onClick }) => (
  <li className={isActive ? "is-active" : ""}>
    <a onClick={() => onClick(title)}>{title}</a>
  </li>
)

export default Tab
