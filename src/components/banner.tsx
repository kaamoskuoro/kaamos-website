import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faStore } from "@fortawesome/free-solid-svg-icons"
import React from "react"

import bannerImage from "../images/banner.png"

const HOLVI_URL = "https://holvi.com/shop/kamarikuorokaamos"
const FACEBOOK_URL = "https://www.facebook.com/kamarikuorokaamos"
const INSTAGRAM_URL = "https://www.instagram.com/kamarikuorokaamos/"
const SPOTIFY_URL = "https://play.spotify.com/artist/2jrDYwEN5bxcYumwolQNu3"
const YOUTUBE_URL = "https://www.youtube.com/channel/UCAG3Eww4QmfBi7QaQH63MEA"

const Banner: React.FC = () => (
  <div className="columns my-1">
    <div className="column is-4 py-3">
      <img src={bannerImage} />
    </div>
    <div className="column py-3">
      <div className="is-flex is-align-items-center is-justify-content-flex-end">
        <a href={HOLVI_URL} className="mr-2">
          <FontAwesomeIcon icon={faStore} /> Verkkokauppa
        </a>
        <span className="icon is-large">
          <a href={YOUTUBE_URL} className="brand-youtube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </span>
        <span className="icon is-large">
          <a href={INSTAGRAM_URL} className="brand-instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </span>
        <span className="icon is-large">
          <a href={FACEBOOK_URL} className="brand-facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </span>
        <span className="icon is-large">
          <a href={SPOTIFY_URL} className="brand-spotify">
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </span>
      </div>
    </div>
  </div>
)

export default Banner
