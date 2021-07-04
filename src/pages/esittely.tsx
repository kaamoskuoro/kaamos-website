import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import choirContent from "../../content/choir.yml"
import singersImage from "../images/singers.jpg"

const { sopranos, altos, tenors, basses } = choirContent

const Esittely: React.FC = () => (
  <Layout>
    <SEO title="Esittely" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Esittely</h3>

        <p className="block">
          Helsinkiläinen Kamarikuoro Kaamos on yksi Suomen korkeatasoisimmista
          kamarikuoroista. Kuoro on perustamisestaan vuonna 2007 alkaen laulanut
          laajasti länsimaisen kuorokirjallisuuden teoksia renessanssista
          uusimpaan nykymusiikkiin, ja tätä monipuolisuutta kuoro vaalii ja
          kehittää edelleen. Vuosien aikana kuoro on mm. tilannut ja
          kantaesittänyt lukuisia kotimaisia kuoroteoksia. Kaamoksen laulussa
          selkeys ja kirkkaus yhdistyvät ilmeikkääseen ja pyöreään sointiin, ja
          laulajien pitkä kuorolaulukokemus sekä luontainen musikaalisuus
          mahdollistavat kunnianhimoisen ja yksityiskohtaisen työskentelyn
          korkein tavoittein.
        </p>

        <div className="columns">
          <div className="column is-two-thirds">
            <img src={singersImage} />
          </div>
        </div>

        <p className="block">
          Kamarikuoro Kaamoksen tavoitteena on tarjota yleisöilleen vaikuttavia
          ja mieleenpainuvia, temaattisesti suunniteltuja
          konserttikokonaisuuksia, joissa kuoron musiikilliset vahvuudet tulevat
          monipuolisesti esiin. Kaamos on vuosien varrella saavuttanut
          menestystä useissa kansainvälisissä kuorokilpailuissa, viimeksi
          kesällä 2019 voittamalla hengellisen musiikin sarjan Saksan
          Wernigerodessa järjestetyssä kansainvälisessä Johannes Brahms
          -kuorokilpailussa.
        </p>

        <p className="block">
          Syksystä 2016 alkaen kuoron taiteellisena johtajana on toiminut
          musiikin maisteri Visa Yrjölä.
        </p>

        <h4 className="title is-4">Kuorolaiset</h4>

        <div className="columns">
          <div className="column">
            <h4 className="subtitle is-5 mb-2">Sopraano</h4>
            <ul>
              {sopranos.map((name: string, index: number) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h4 className="subtitle is-5 mb-2">Altto</h4>
            <ul>
              {altos.map((name: string, index: number) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h4 className="subtitle is-5 mb-2">Tenori</h4>
            <ul>
              {tenors.map((name: string, index: number) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h4 className="subtitle is-5 mb-2">Basso</h4>
            <ul>
              {basses.map((name: string, index: number) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Esittely
