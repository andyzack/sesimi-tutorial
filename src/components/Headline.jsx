import * as React from 'react'

export const Headline = ({headline = {}, copy = {}, className = ``, style = {}}) => {
  return (
    <>
      <h1
        data-hitarea="headline"
        className={`${headline.size ? `text-[length:var(--font-size)]` : `text-4xl`} tracking-[--tracking] leading-10 font-semibold whitespace-break-spaces uppercase ${className}`}
        style={{
          '--font-size': `${headline.size? headline.size + `rem` : ``}`,
          '--tracking': `${headline.tracking ? headline.tracking * 0.01 : 0}em`,
          ...style
        }}
      >
        {headline.text}
      </h1>
      

      {copy?.text && <div className={` border-b-2 border-secondary w-24 pt-2 mb-2`}></div>}
    </>
  )
}

export default Headline
