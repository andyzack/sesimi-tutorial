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
            flex items-center justify-center  bg-white text-secondary
            w-full h-full rounded-full
            border-dotted border-[1px] border-secondary border-spacing-1 ring ring-white ring-offset-0
          `}
        >
          <div>
            <span
              className={`text-base leading-none block`}
            >
              Just at
            </span>
            <span
              className={`block text-3xl leading-none`}
            >
              ₹<span className='text-5xl font-semibold leading-none'>259</span>
            </span>
            <span className='text-base leading-none'>
              per month
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Price
