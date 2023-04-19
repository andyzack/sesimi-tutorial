import * as React from 'react'

export const Headline = ({headline = ``, className = ``, style = {}}) => {
  return (
    <>
      <h1
        className={`text-4xl leading-10 font-semibold whitespace-break-spaces uppercase ${className}`}
        style={{
          ...style
        }}
      >
        {headline}
      </h1>
    
      <div className={` border-b-2 border-secondary w-24 pt-3 mb-2`}></div>
    </>
  )
}

export default Headline
