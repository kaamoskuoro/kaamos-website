import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/ensemble.jpg"

const HaeKuoroon: React.FC = () => (
  <Layout>
    <SEO title="Hea kuoroon" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Hae Kuoroon</h3>

        <p className="block">
Uusia laulajia haetaan tällä hetkellä kaikkiin stemmoihin.
<br />
Kiinnostuneita pyydetään ilmoittautumaan johtaja Visa Yrjölälle osoitteeseen <a href="mailto:visa.yrjola@gmail.com">visa.yrjola@gmail.com</a>. Kerro viestissä äänialasi sekä musiikkitaustasi.
<br />
Koelauluajankohta sovitaan erikseen ilmoittautuneiden kanssa.
<br />
Kuoro harjoittelee tiistai-iltaisin Mikael Agricolan kirkossa.
<br />
<b>Nähdään koelauluissa!</b></p>

        <img src={ensembleImage} className="block" />

      </div>
    </div>
  </Layout>
)

export default HaeKuoroon
