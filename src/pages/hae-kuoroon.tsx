import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/choir2.jpg"

const HaeKuoroon: React.FC = () => (
  <Layout>
    <SEO title="Hea kuoroon" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Hae Kuoroon</h3>

        <div className="block">
<p><b>Uusia laulajia haetaan tällä hetkellä kaikkiin stemmoihin.</b></p>

<p>Kiinnostuneita pyydetään ilmoittautumaan johtaja osoitteeseen <a href="mailto:kamarikuorokaamos@gmail.com">kamarikuorokaamos@gmail.com</a>. Kerro viestissä äänialasi sekä musiikkitaustasi.</p>

<p>Koelauluajankohta sovitaan erikseen ilmoittautuneiden kanssa.</p>

<p>Kuoro harjoittelee tiistai-iltaisin Helsingissä.</p>

<p><b>Nähdään koelauluissa!</b></p>

        <img src={ensembleImage} className="block" />

      </div>
    </div>
  </div>
  </Layout>
)

export default HaeKuoroon
