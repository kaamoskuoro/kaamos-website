import React from "react"

import "../style.scss"
import Banner from "./banner"
import Footer from "./footer"
import Navbar from "./navbar"
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
          <div className="column is-8">{children}</div>
          <div className="column is-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </>
)

export default Layout
