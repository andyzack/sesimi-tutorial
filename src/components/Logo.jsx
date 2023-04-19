import * as React from 'react'

/**
 * This is the logo component
 * @param {object} props - all available props
 * @param {string} [props.className] - css class names
 * @param {object} [props.style] - css inline style
 *
 * @returns {React.ReactElement} the template
 */

export const Logo = ({className = ``, style = {}}) => {
  return (
    <>
      <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.67 20.16">
        <polygon
          style={{fill:`#fff`}}
          points="19.41 0 0 0 0 5.82 5.76 5.82 5.76 20.16 13.77 20.16 13.77 5.82 19.41 5.82 19.41 0 19.41 0"
        />
        <polygon
          style={{fill:`#fff`}}
          points="17.65 20.16 25.2 20.16 29.36 8.14 33.65 20.16 41.35 20.16 33.65 0 25.2 0 17.65 20.16 17.65 20.16"
        />
        <polygon
          style={{fill:`#fff`}}
          points="39.69 5.82 45.41 5.82 45.41 20.16 53.46 20.16 53.46 5.82 59.09 5.82 59.09 0 39.69 0 39.69 5.82 39.69 5.82"
        />
        <polygon
          style={{fill:`#fff`}}
          points="57.21 20.16 64.72 20.16 68.92 8.14 73.18 20.16 80.91 20.16 73.18 0 64.72 0 57.21 20.16 57.21 20.16"
        />
        <path
          style={{fill:`#ed0180`}}
          d="m90.98,20.16h6.76v-4.69h2.75c5.76,0,8.54-3.54,8.54-8.01s-3.35-7.45-8.29-7.45h-9.77v20.16h0Zm6.76-10.05v-4.38h2.19c1.57,0,2.35.91,2.35,2.1,0,1.44-.91,2.28-2.5,2.28h-2.03Zm13.77,10.05h14.8v-5.82h-7.7V0h-7.1v20.16h0Zm16.93,0h7.54l4.19-12.02,4.26,12.02h7.73l-7.73-20.16h-8.45l-7.54,20.16h0ZM149.14,0l7.26,14.65v5.51h7.32v-5.57l7.95-14.58h-7.23l-4.04,7.7-3.72-7.7h-7.54Z"
        />
      </svg>
    </>
  )
}

export default Logo
