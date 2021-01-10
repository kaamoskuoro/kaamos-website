import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { faFacebook, faSpotify } from "@fortawesome/free-brands-svg-icons"

import bannerImage from "../images/banner.png"

const Banner: React.FC = () => (
  <div className="columns my-1">
    <div className="column is-4 py-3">
      <img src={bannerImage} />
    </div>
    <div className="column is-clearfix py-3">
      <div className="is-pulled-right">
        <a
          href="https://www.facebook.com/kamarikuorokaamos/"
          className="icon is-large brand-facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://play.spotify.com/artist/2jrDYwEN5bxcYumwolQNu3"
          className="icon is-large brand-spotify"
        >
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </a>
      </div>
    </div>
  </div>
)

export default Banner
