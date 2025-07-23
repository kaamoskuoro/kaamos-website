import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/choir2.jpg"

const HaeKuoroon: React.FC = () => (
  <Layout>
    <SEO title="Hae kuoroon" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Hae Kuoroon</h3>

<p className="block">
<b>Uusia laulajia haetaan tällä hetkellä kaikkiin stemmoihin.</b>
</p>

<p className="block">
Kiinnostuneita pyydetään ilmoittautumaan johtaja Visa Yrjölälle osoitteeseen <a href="mailto:kamarikuorokaamos@gmail.com">kamarikuorokaamos@gmail.com</a>. Kerro viestissä äänialasi sekä musiikkitaustasi.
</p>

<p className="block">    
Koelauluajankohta sovitaan erikseen ilmoittautuneiden kanssa.
</p>

<p className="block">
Kuoro harjoittelee tiistai-iltaisin Etelä-Haagassa.
</p>

<p className="block">
<b>Nähdään koelauluissa!</b>
</p>

        <img src={ensembleImage} className="block" />

    </div>
  </div>
  </Layout>
)

export default HaeKuoroon
