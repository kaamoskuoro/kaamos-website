import React from "react"
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CMS_PATH = "/admin/"

const Footer: React.FC = props => (
  <div className="content has-text-centered">
    <p className="has-text-grey">
      &copy; Kamarikuoro Kaamos 2011–2023
      <br />
      <a href={CMS_PATH}>
        <FontAwesomeIcon icon={faFeatherAlt} /> CMS
      </a>
    </p>
  </div>
)

export default Footer
