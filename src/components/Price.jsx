import * as React from 'react'

export const Price = ({price = ``, className = ``, style = {}}) => {
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
              className={`text-base leading-none block`}
            >
              Just at
            </span>
            <div className={`border-dotted border-b-[0.64px] border-tataplay-pink border-opacity-50 w-1/2 m-auto pt-1`}></div>
            <span
              className={`block text-3xl leading-none`}
            >
              ₹<span className='text-5xl font-semibold leading-none'>259</span>
            </span>
            <div className={`border-dotted border-t-[0.64px] border-tataplay-pink border-opacity-50 w-1/2 m-auto pb-1`}></div>
            <span className='text-sm leading-none'>
              per month
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Price
