import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/ensemble.jpg"

const TilaaLaulua: React.FC = () => (
  <Layout>
    <SEO title="Tilaa laulua!" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Tilaa laulua!</h3>

        <p className="block">
          Lauluyhtyeemme Kaamos Ensemble nostaa tilaisuuden kuin tilaisuuden
          uudelle tasolle. Ensemble esiintyy häissä ja hautajaisissa,
          pikkujouluissa ja vuosijuhlissa, sekä yksityistilaisuuksissa että
          isommalle yleisölle. Kokoonpanomme ja ohjelmistomme muotoutuu
          tilaisuuden luonteen mukaan ja tilaajan toiveet huomioiden.
        </p>

        <p className="block">
          Ota yhteyttä: ensemblevastaava Markus Lehtonen,{" "}
          <a href="mailto:mtlehto@gmail.com">mtlehto@gmail.com</a>, puh. 050 301 4585.
        </p>

        <img src={ensembleImage} className="block" />

        <p className="block">
          Kamarikuoro Kaamos on mahdollista tilata esiintymään myös
          kokonaisuudessaan sekä koko illan konserttiin että pienemmille
          keikoille. Neuvottelemme mielellämme myös erilaisista
          yhteistyöprojekteista.
        </p>

        <p className="block">
          Ota tässä tapauksessa yhteyttä: kuoron taiteellinen johtaja Visa
          Yrjölä,{" "}
          <a href="mailto:visa.yrjola@gmail.com">visa.yrjola@gmail.com</a>, puh.
          040 521 8976 tai puheenjohtaja Jussi Alaranta,{" "}
          <a href="mailto:kamarikuorokaamos@gmail.com">kamarikuorokaamos@gmail.com</a>,
          puh. 041 514 5312.
        </p>
      </div>
    </div>
  </Layout>
)

export default TilaaLaulua
