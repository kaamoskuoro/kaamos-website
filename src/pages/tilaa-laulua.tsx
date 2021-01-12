import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/ensemble.jpg"

const TilaaLaulua: React.FC = () => (
  <Layout>
    <SEO title="Tilaa laulua!" />

    <h3 className="title is-3">Tilaa laulua!</h3>

    <p className="block">
      Lauluyhtyeemme Kaamos Ensemble nostaa tilaisuuden kuin tilaisuuden uudelle
      tasolle. Ensemble esiintyy häissä ja hautajaisissa, pikkujouluissa ja
      vuosijuhlissa, sekä yksityistilaisuuksissa että isommalle yleisölle.
      Kokoonpanomme ja ohjelmistomme muotoutuu tilaisuuden luonteen mukaan ja
      tilaajan toiveet huomioiden.
    </p>

    <p className="block">
      Ota yhteyttä: ensemblevastaava Karoliina Vidgren,{" "}
      <a href="mailto:karoliina@mac.com">karoliina@mac.com</a>, puh. 050 537
      6818.
    </p>

    <img src={ensembleImage} className="block" />

    <p className="block">
      Kamarikuoro Kaamos on mahdollista tilata esiintymään myös
      kokonaisuudessaan sekä koko illan konserttiin että pienemmille keikoille.
      Neuvottelemme mielellämme myös erilaisista yhteistyöprojekteista.
    </p>

    <p className="block">
      Ota tässä tapauksessa yhteyttä: kuoron taiteellinen johtaja Visa Yrjölä,{" "}
      <a href="mailto:visa.yrjola@gmail.com">visa.yrjola@gmail.com</a>, puh. 040
      521 8976 tai puheenjohtaja Aino Herranen,{" "}
      <a href="mailto:aino.herranen@gmail.com">aino.herranen@gmail.com</a>, puh.
      050 354 6275.
    </p>
  </Layout>
)

export default TilaaLaulua