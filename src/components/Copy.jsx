import * as React from 'react'

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
