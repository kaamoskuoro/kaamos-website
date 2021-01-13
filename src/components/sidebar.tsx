import React from "react"

import contactItems from "../../data/contact.yaml"
import newsItems from "../../data/news.yaml"

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

    {contactItems.map((item, index) => (
      <p key={index} className="block">
        {item.name}
        <br />
        <a href={`mailto:${item.email}`}>{item.email}</a>, puh. {item.phone}
      </p>
    ))}
  </aside>
)

export default Sidebar
