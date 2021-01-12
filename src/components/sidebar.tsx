import React from "react"

import news from "../../data/news.yaml"

const Sidebar: React.FC = () => (
  <aside>
    <h3 className="subtitle is-4">Ajankohtaista</h3>

    {news.map((data, index) => (
      <div key={index} className="block">
        <h5 className="title is-5 mb-2">{data.title}</h5>
        <p>{data.body}</p>
      </div>
    ))}

    <h3 className="subtitle is-4">Yhteystiedot</h3>

    <p className="block">
      Taiteellinen johtaja Visa Yrjölä
      <br />
      <a href="mailto:visa.yrjola@gmail.com">visa.yrjola@gmail.com</a>, puh. 040
      521 8976
    </p>

    <p className="block">
      Puheenjohtaja Aino Herranen
      <br />
      <a href="mailto:aino.herranen@gmail.com">aino.herranen@gmail.com</a>, puh.
      050 354 6275
    </p>
  </aside>
)

export default Sidebar
