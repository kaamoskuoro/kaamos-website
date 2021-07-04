import React from "react"

import "../style.scss"
import Banner from "./banner"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>

    <main role="main" className="section pt-0">
      <div className="container is-max-widescreen">
        <Banner />
        <hr className="mt-0" />
        {children}
      </div>
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </>
)

export default Layout
