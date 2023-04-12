import * as React from 'react'

export const Title = ({start = ``, brand = ``, end = ``, style = {}}) => {
  return (
    <h1
      className={`text-2xl font-bold`}
      style={{
        ...style
      }}
    >
      {start}
      <span
        className={`text-electric-lime`}
        style={{
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
