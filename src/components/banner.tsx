import React from "react"

import bannerImage from "../images/banner.png"

const Banner: React.FC = () => (
  <div className="columns my-1">
    <div className="column is-4">
      <img src={bannerImage} />
    </div>
  </div>
)

export default Banner
