import React from "react"

import sidebarContent from "../../content/sidebar.yml"

const { newsItems, contactPersons } = sidebarContent

const Sidebar: React.FC = () => (
  <aside>
    <h3 className="subtitle is-4">Ajankohtaista</h3>

    {newsItems.map((item, index) => (
      <div key={index} className="block">
        <h5 className="title is-5 mb-2">{item.title}</h5>
        <p>{item.body}</p>
      </div>
    ))}

    <h3 className="subtitle is-4">Yhteystiedot</h3>

    {contactPersons.map((person, index) => (
      <p key={index} className="block">
        {person.name}
        <br />
        <a href={`mailto:${person.email}`}>{person.email}</a>, puh.{" "}
        {person.phone}
      </p>
    ))}
  </aside>
)

export default Sidebar
