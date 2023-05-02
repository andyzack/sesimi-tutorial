import * as React from 'react'

/**
* This is the Copy component
* @param {object} props - all available props
* @param {object} [props.copy] - copy details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

export const Copy = ({copy = {}, className = ``, style = {}}) => {
  return (
    <>
      <div
        data-hitarea="copy"
        className={`${copy.size ? `text-[length:var(--font-size)]` : `text-base`} tracking-[--tracking] font-medium ${className} whitespace-break-spaces`}
        style={{
          '--font-size': `${copy.size? copy.size + `rem` : ``}`,
          '--tracking': `${copy.tracking ? copy.tracking * 0.01 : 0}em`,
          ...style
        }}
      >
        {copy.text}
      </div>
    </>
  )
}

export default Copy
