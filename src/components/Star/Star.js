import React from "react";

const filledColor = "#FFCC48";
const emptyColor = "#00000010"

const Star = props => {
  return (
      <React.Fragment>
        <svg
            width="33"
            height="30"
            viewBox="0 0 33 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
            d="M16.5 0L21.3489 9.82606L32.1924 11.4012L24.3457 19.0492L26.1985 29.8488L16.5 24.7494L6.80154 29.8488L8.65432 19.0492L0.807568 11.4012L11.6511 9.82606L16.5 0Z"
            fill={props.filled? filledColor: emptyColor}
            />
        </svg>
    </React.Fragment>
  )
}

export default Star;