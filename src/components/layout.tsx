import React from "react"

import Navbar from "./navbar"
import "./layout.scss"

const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>

    <main className="container">{children}</main>
  </>
)

export default Layout
