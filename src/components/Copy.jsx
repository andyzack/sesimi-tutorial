import * as React from 'react'

export const Copy = ({copy = ``, className = ``, style = {}}) => {
  return (
    <>
      <div
        className={`text-lg font-medium ${className}`}
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
