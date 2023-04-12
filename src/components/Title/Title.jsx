import * as React from 'react'

export const Title = ({start = ``, brand = ``, end = ``, className = ``, style = {}}) => {
  return (
    <h1
      className={`${className} text-2xl min-04/10:text-4xl min-60/10:text-base min-80/10:text-3xl min-60/10:leading-tight font-bold`}
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
