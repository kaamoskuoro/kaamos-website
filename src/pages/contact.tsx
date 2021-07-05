import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactContent from "../../content/contact.yml"

const { contactPersons } = contactContent

const Yhteystiedot: React.FC = () => (
  <Layout>
    <SEO title="Yhteystiedot" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Yhteystiedot</h3>

        {contactPersons.map((person, index) => (
          <p key={index} className="block">
            {person.name}
            <br />
            <a href={`mailto:${person.email}`}>{person.email}</a>, puh.{" "}
            {person.phone}
          </p>
        ))}
      </div>
    </div>
  </Layout>
)

export default Yhteystiedot
