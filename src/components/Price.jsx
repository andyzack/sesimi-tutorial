import * as React from 'react'

/**
* This is the price component
* @param {object} props - all available props
* @param {object} [props.price] - price details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

export const Price = ({price = {}, className = ``, style = {}}) => {
  return (
    <>
      <div
        className={`
          w-full h-full text-center p-1 uppercase whitespace-break-spaces
        `}
      >
        <div
          className={`
            flex items-center justify-center  bg-white text-tataplay-pink
            w-full h-full rounded-full
            border-dotted border-[1px] border-tataplay-pink border-opacity-50 border-spacing-1 ring ring-white ring-offset-0
          `}
        >
          <div>
            <span
              className={`${price?.topSize ? `text-[length:var(--font-size)]` : `text-base`} tracking-[--tracking] leading-none block`}
              style={{
                '--font-size': `${price?.topSize ? price.topSize + `rem` : ``}`,
                '--tracking': `${price?.topTracking ? price?.topTracking * 0.01 : 0}em`,
              }}
            >
              {price?.topText}
            </span>
            <div className={`border-dotted border-b-[0.64px] border-tataplay-pink border-opacity-50 w-1/2 m-auto pt-1`}></div>
            <span
              className={`block text-3xl leading-none`}
            >
              ₹<span className={`${price?.size ? `text-[length:var(--font-size)]` : `text-5xl`} tracking-[--tracking] font-semibold leading-none`}
                style={{
                  '--font-size': `${price?.size ? price.size + `rem` : ``}`,
                  '--tracking': `${price?.tracking ? price?.tracking * 0.01 : 0}em`,
                }}              
              >
                {price?.text}
              </span>
            </span>
            <div className={`border-dotted border-t-[0.64px] border-tataplay-pink border-opacity-50 w-1/2 m-auto pb-1`}></div>
            <span className='${price?.topSize ? `text-[length:var(--font-size)]` : `text-sm`} tracking-[--tracking] leading-none'
              style={{
                '--font-size': `${price?.bottomSize ? price.bottomSize + `rem` : ``}`,
                '--tracking': `${price?.bottomTracking ? price?.bottomTracking * 0.01 : 0}em`,
              }}
            >
              {price?.bottomText}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Price
