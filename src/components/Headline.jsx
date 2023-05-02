import * as React from 'react'

/**
* This is the headline component
* @param {object} props - all available props
* @param {object} [props.headline] - headline details to display
* @param {object} [props.copy] - copy details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

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
      

      {copy?.text && <div className={` border-b-2 border-tataplay-pink w-24 pt-2 mb-2`}></div>}
    </>
  )
}

export default Headline
