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
    console.log(photos)
    return (
      <>
      <div
      className={`
        grid h-full w-full
        grid-areas-[var(--areas1)] grid-rows-[var(--rows1)] grid-cols-[var(--columns1)]
        min-12/10:grid-areas-[var(--areas2)] min-12/10:grid-rows-[var(--rows2)] min-12/10:grid-cols-[var(--columns2)]
      `}
      style={{
        '--areas1': `
          " ◤   —   —   —   —  ◥ "
          " l  ..  ..  🉐  ..  ▍"
          " l  📓  🏷  👑  ..  ▍"
          " l  📓  ..  👑  ..  ▍"
          " l  📓  👪  👪  ..  ▍"
          " ◣   ▂   ▂   ▂   ▂  ◢ "
        `,
        '--rows1': `10.8fr 7.1fr 30fr 21.2fr 139.7fr 41.7fr`,
        '--columns1': `2.6fr 7fr 30fr 110fr 7fr 2.6fr`,

        '--areas2': `
          " ◤   —   —  —   —   —   —  ◥ "
          " l  ..  🉐  🏷  ..  ..  ..  ▍"
          " l  📓  ..  🏷  👑  👑  ..  ▍"
          " l  📓  👪  👪  👪  ..  ..  ▍"
          " l  📓  👪  👪  👪  ..  ..  ▍"
          " ◣   ▂   ▂  ▂   ▂   ▂   ▂  ◢ "
        `,
        '--rows2': `18.4fr 8.8fr 35.5fr 187.6fr`,
        '--columns2': `6.4fr 8.4fr 95.6fr 44.4fr 70.2fr 90.2fr 6.6fr 6.4fr`,
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
          overflow-hidden
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
            <Img
              src={photos[3].photoAsset.url.replace(`v1/studio`,`e_trim/v1/studio`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)]`}
              style={{
                '--photo-height': `${photos[3].photoHeight}%`,
                '--photo-vertical': `${photos[3].photoVertical}px`,
                '--photo-horizontal': `${photos[3].photoHorizontal}px`,
                '--photo-rotate': `${photos[3].photoRotate}deg`,
              }}
            />
          </GridItem>

          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 4 / -3 / -1`,
            }}
          >
            <Img
              src={photos[2].photoAsset.url.replace(`v1/studio`,`e_trim/v1/studio`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)]`}
              style={{
                '--photo-height': `${photos[2].photoHeight}%`,
                '--photo-vertical': `${photos[2].photoVertical}px`,
                '--photo-horizontal': `${photos[2].photoHorizontal}px`,
                '--photo-rotate': `${photos[2].photoRotate}deg`,
              }}
            />
          </GridItem>

          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 1 / -2 / -4`,
            }}
          >
            <Img
              src={photos[1].photoAsset.url.replace(`v1/studio`,`e_trim/v1/studio`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)]`}
              style={{
                '--photo-height': `${photos[1].photoHeight}%`,
                '--photo-vertical': `${photos[1].photoVertical}px`,
                '--photo-horizontal': `${photos[1].photoHorizontal}px`,
                '--photo-rotate': `${photos[1].photoRotate}deg`,
              }}
            />
          </GridItem>
          
          <GridItem
            className={`
              grid-in-[var(--grid-in)]
            `}
            style={{
              '--grid-in': `1 / 3 / -1 / -1`,
            }}
          >
            <Img
              src={photos[0].photoAsset.url.replace(`v1/studio`,`e_trim/v1/studio`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)]`}
              style={{
                '--photo-height': `${photos[0].photoHeight}%`,
                '--photo-vertical': `${photos[0].photoVertical}px`,
                '--photo-horizontal': `${photos[0].photoHorizontal}px`,
                '--photo-rotate': `${photos[0].photoRotate}deg`,
              }}
            />
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
