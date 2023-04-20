import * as React from 'react'

export const Copy = ({copy = ``, className = ``, style = {}}) => {
  return (
    <>
      <div
        className={`text-base font-medium ${className} whitespace-break-spaces`}
        style={{
          ...style
        }}
      >
        {copy}
      </div>
    </>
  )
}

export default Copy
