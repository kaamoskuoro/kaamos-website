import React from "react"

import Navbar from "./navbar"
import "./layout.scss"
import Banner from "./banner"
import Sidebar from "./sidebar"

const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>

    <main role="main" className="section pt-0">
      <div className="container is-max-widescreen">
        <Banner />
        <hr className="mt-0" />
        <div className="columns">
          <div className="column">{children}</div>
          <div className="column is-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Layout
