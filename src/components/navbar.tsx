import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar: React.FC = props => {
  const [isMenuExpanded, setMenuExpanded] = useState(false)

  return (
    <nav className="navbar is-primary">
      <div className="container is-max-widescreen">
        <div className="navbar-brand">
          <NavbarBurger
            isActive={isMenuExpanded}
            onClick={() => setMenuExpanded(!isMenuExpanded)}
          />
        </div>
        <div className={`navbar-menu ${isMenuExpanded ? "is-active" : ""}`}>
          <div className="navbar-start">
            <NavbarItem path="/" title="Etusivu" />
            <NavbarItem path="/esittely/" title="Esittely" />
            <NavbarItem path="/johtaja/" title="Johtaja" />
            <NavbarItem path="/konsertit/" title="Konsertit" />
            <NavbarItem path="/tilaa-laulua/" title="Tilaa laulua!" />
            <NavbarItem path="/hae-kuoroon/" title="Hae kuoroon" />
            <NavbarItem path="/contact/" title="Yhteystiedot" />

            
          </div>
          <div className="navbar-end">
            <NavbarItem path="/english/" title="In English" />
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavbarItemProps {
  title: string
  path: string
}

const NavbarItem: React.FC<NavbarItemProps> = props => (
  <Link className="navbar-item" to={props.path}>
    {props.title}
  </Link>
)

interface NavbarBurgerProps {
  isActive: boolean
  onClick: () => void
}

const NavbarBurger: React.FC<NavbarBurgerProps> = props => (
  <div
    onClick={props.onClick}
    className={`navbar-burger burger ${props.isActive ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </div>
)

export default Navbar
