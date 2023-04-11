import * as React from 'react'

export const Title = ({start = ``, brand = ``, end = ``, style = {}}) => {
  return (
    <h1
      style={{
        fontWeight: `400`,
        ...style
      }}
    >
      {start}
      <span
        style={{
          color: `var(--electric-lime)`,
          filter: `drop-shadow(0 0 7px currentColor)`,
        }}
      >
        {` ${brand} `}
      </span>
      {end}
    </h1>
  )
}

export default Title
