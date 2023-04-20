import * as React from 'react'
import { GridItem, ResponsiveImage as Img } from '@myadbox/exoplanet-toolkit'
import Price from '@/components/Price'
import Logo from '@/components/Logo'

/**
* This is the headline component
* @param {object} props - all available props
* @param {string} [props.copy] - copy details to display
* @param {object} [props.photos] - sub headline details to display
* @param {string} [props.disclaimer] - canvas color to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

export const ContentBlock = ({
    children,
    photos = {},
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
        `}
        style={{
          '--grid-in': `👪 / 👪 / -1 / 👪`,
        }}
      >
        <div
          className={`
            xo-photos
            grid grid-rows-[var(--rows)] grid-cols-[var(--columns)] h-full w-full
          `}
          style={{
            '--rows': `1fr 0.1fr 0.075fr 0.025fr`,
            '--columns': `repeat(8, 1fr)`,
          }}
        >

          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 1 / -3 / -4`,
            }}
          >
            <Img src={photos[3].url.replace(`v1/studio`,`e_trim/v1/studio`)} className={`w-full h-[82%] absolute object-contain left-[-40px] top-[0]`} />
          </GridItem>

          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 4 / -3 / -1`,
            }}
          >
            <Img src={photos[2].url.replace(`v1/studio`,`e_trim/v1/studio`)} className={`w-full h-[96%] absolute object-contain left-[0] top-[30px] rotate-[6deg]`} />
          </GridItem>

          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 1 / -2 / -4`,
            }}
          >
            <Img src={photos[1].url.replace(`v1/studio`,`e_trim/v1/studio`)} className={`w-full h-[92%] absolute object-contain left-[-6px] top-[60px]`} />
          </GridItem>
          
          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 3 / -1 / -1`,
            }}
          >
            <Img src={photos[0].url.replace(`v1/studio`,`e_trim/v1/studio`)} className={`w-full h-full absolute object-contain left-[0] top-[20px]`} />
          </GridItem>
        </div>
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

      {disclaimer && <GridItem
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
      </GridItem>}
    </div>
      </>
    )
}

export default ContentBlock
