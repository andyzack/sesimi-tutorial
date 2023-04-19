import * as React from 'react'
import { GridItem } from '@myadbox/exoplanet-toolkit'
import Price from '@/components/Price'
import Logo from '@/components/Logo'

/**
* This is the headline component
* @param {object} props - all available props
* @param {string} [props.copy] - copy details to display
* @param {string} [props.subhead] - sub headline details to display
* @param {string} [props.disclaimer] - canvas color to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

export const ContentBlock = ({
    children,
    disclaimer = ``,
    className = ``,
    style = {},
    ...props
}) => {
    return (
      <>
      <div
      className={`
        grid grid-areas-[var(--areas)] grid-rows-[var(--rows)] grid-cols-[var(--columns)] h-full w-full
      `}
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
    </div>
      </>
    )
}

export default ContentBlock
