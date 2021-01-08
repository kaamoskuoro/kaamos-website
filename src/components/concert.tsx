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
  <div className="block">
    <p>{concert.title}</p>
    <p>{dayjs(concert.datetime).format("LLL")}</p>
  </div>
)

export default Concert
