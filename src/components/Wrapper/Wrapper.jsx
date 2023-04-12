// @ts-check
import * as React from 'react'

export const Wrapper = ({children, className = ``, style = {}, ...props}) => {
  return (
    <div
      {...props}
      className={`
        wrapper
        ${className}
        grid gap-4 h-screen m-auto place-content-center place-items-center text-center
      `}

      style={{
        width: `calc(100vw - 4em)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
