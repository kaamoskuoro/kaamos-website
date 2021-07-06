import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import "dayjs/locale/fi"
import React from "react"

interface Props {
  concert: Concert
}

// Set up locale as needed for Finnish date formatting
dayjs.locale("fi")
dayjs.extend(localizedFormat)

const Concert: React.FC<Props> = ({ concert }) => (
  <div className="block content">
    <h5 className="title is-5 mb-2">
      {concert.title}
      {concert.facebookURL && (
        <a href={concert.facebookURL}>
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" className="ml-2" />
        </a>
      )}
    </h5>

    <p>
      {dayjs(concert.begins).format("dddd, LL")}
      <br />
      klo {dayjs(concert.begins).format("HH.mm")}
      <br />
      {concert.venue}
      <br />
      {concert.address}
    </p>

    {concert.conductor && <p>johtaa {concert.conductor}</p>}

    {concert.description && (
      <p className="concert-description">{concert.description}</p>
    )}

    {concert.readMoreURL && (
      <p>
        <a href={concert.readMoreURL}>Lue lisää</a>
      </p>
    )}

    {(concert.admission || concert.ticketURL) && (
      <p>
        {concert.admission && (
          <span>
            Liput: {concert.admission}
            <br />
          </span>
        )}
        {concert.ticketURL && <a href={concert.ticketURL}>Osta lippusi</a>}
      </p>
    )}
  </div>
)

export default Concert
