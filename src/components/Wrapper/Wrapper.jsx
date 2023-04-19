// @ts-check
import { GridItem } from '@myadbox/exoplanet-toolkit'
import * as React from 'react'
import Logo from '../Logo'
import Price from '../Price'

export const Wrapper = ({children, className = ``, style = {}, disclaimer = {}, ...props}) => {
  return (
    <div
      {...props}
      className={`
        xo-wrapper
        w-screen h-screen text-white grid grid-areas-[var(--areas)] grid-rows-[var(--rows)]
        ${className}
      `}
      style={{
        '--areas': `
          " .. "
          " 🦶 "
        `,
        '--rows': `1fr 0.6fr`,
        ...style,
      }}
    >
      <GridItem
        className={`grid-in-[1/1/-1/-1] grid grid-areas-[var(--areas)] grid-rows-[var(--rows)] grid-cols-[var(--columns)] h-full w-full`}
        style={{
          '--areas': `
            " ◤   —   —   —   —  ◥ "
            " l  ..  ..  🉐  ..  ▍"
            " l  📓  🏷  👑  ..  ▍"
            " l  📓  ..  👑  ..  ▍"
            " l  📓  👪  👪  ..  ▍"
            " ◣   ▂   ▂   ▂   ▂  ◢ "
          `,
          '--rows': `10.8fr 7.1fr 30fr 21.2fr 139.7fr 41.7fr`,
          '--columns': `2.6fr 7fr 30fr 110fr 7fr 2.6fr`,
        }}
      >
        <GridItem
          className={`
            grid-in-[var(--grid-in)]
          `}
          style={{
            '--grid-in': `🏷`,
          }}
        >
          <Price />
        </GridItem>

        <GridItem
          className={`
            grid-in-[var(--grid-in)]
            grid items-center
          `}
          style={{
            '--grid-in': `👑`,
            alignItems: `center`,
          }}
        >
          <div
            className={`pl-3`}
          >
            {children}
          </div>
        </GridItem>

        <GridItem
          className={`
            grid-in-[var(--grid-in)]
          `}
          style={{
            '--grid-in': `🉐`,
          }}
        >
          <Logo className='pl-3 h-full' />
        </GridItem>

        <GridItem
          className={`
            grid-in-[var(--grid-in)]
            flex h-full items-center justify-start
          `}
          style={{
            '--grid-in': `📓/📓/📓/-1`,
          }}
        >
          <span
            className={`absolute left-0 bottom-0 text-[4.58pt] leading-[1] -rotate-90`}
            style={{
              transformOrigin: `0 0`,
            }}
          >
            {disclaimer}
          </span>
        </GridItem>
      </GridItem>
      <GridItem
        className={`bg-secondary grid-in-[var(--grid-in)]`}
        style={{
          '--grid-in': `🦶`,
          clipPath: `polygon(0 60%, 100% 0, 100% 100%, 0% 100%)`,
        }}
      >
        
      </GridItem>
    </div>
  )
}

export default Wrapper
