import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="Sivua ei löytynyt" />
    <h1>Sivua ei löytynyt</h1>
    <p>
      Tarkista, että olet kirjoittanut osoitteen oikein. Voit myös{" "}
      <Link to="/">palata aloitussivulle</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
