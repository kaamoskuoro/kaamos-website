import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import conductorImage from "../images/conductor2.jpg"

const Johtaja: React.FC = () => (
  <Layout>
    <SEO title="Johtaja" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Johtaja</h3>

        <p className="block">
          <strong>Visa Yrjölä</strong> (s. 1992) valmistui musiikin maisteriksi
          Taideyliopiston Sibelius-Akatemiasta kesäkuussa 2018 suoritettuaan
          kuoronjohdon A-kurssitutkintonsa erinomaisin arvosanoin.
          Kevätlukukaudella 2017 hän syvensi opintojaan Itävallassa Universität
          für Musik und darstellende Kunst Wien -korkeakoulussa. Yrjölä on
          osallistunut useille Euroopan ammattikamarikuorojen verkoston Tenson
          järjestämille mestarikursseille työskennellen Cappella Amsterdamin,
          Helsingin kamarikuoron, Alankomaiden kamarikuoron, Slovenian
          Filharmonisen kuoron sekä Kroatian Radion ja television kuoron kanssa.
        </p>

        <p className="block">
          Kamarikuoro Kaamoksen lisäksi Visa Yrjölä johtaa kahta palkittua
          mieskuoroa: Mieskuoro Eugaa sekä Kauppakorkeakoulun Ylioppilaskunnan
          Laulajia KYL:liä. Vuoden 2013 Tampereen Sävelen kuorokatselmuksessa
          hänelle myönnettiin nuoren ja lupaavan johtajan erikoispalkinto, ja
          kesällä 2018 Bratislava Choir Festivalilla parhaan kuoronjohtajan
          palkinto.
        </p>

        <img src={conductorImage} />
      </div>
    </div>
  </Layout>
)

export default Johtaja
