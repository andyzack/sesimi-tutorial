import * as React from 'react'
import { GridItem, ResponsiveImage as Img } from '@myadbox/exoplanet-toolkit'
import Price from '@/components/Price'
import Logo from '@/components/Logo'

/**
* This is the ContentBlock component
* @param {object} props - all available props
* @param {string} [props.copy] - copy details to display
* @param {object} [props.photos] - sub headline details to display
* @param {object} [props.colors] - color theme to display
* @param {object} [props.logoChoice] - logo to display
* @param {object} [props.price] - price details to display
* @param {object} [props.disclaimer] - disclaimer details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
* @param {React.ReactNode} [props.children] - children to render
*
* @returns {React.ReactElement} the template
*/

export const ContentBlock = ({
  children,
  photos = {},
  colors = {},
  logoChoice = {},
  price = {},
  disclaimer = ``,
  className = ``,
  style = {},
}) => {
    const dropShadow = colors.body.includes(`bg-tataplay-white`) ? `` : `drop-shadow-[0_5px_50px_rgba(0,0,0,0.25)]`

    return (
      <div
        className={`
          xo-content-block
          grid h-full w-full overflow-hidden
          grid-areas-[var(--areas1)] grid-rows-[var(--rows1)] grid-cols-[var(--columns1)]
          min-12/10:grid-areas-[var(--areas2)] min-12/10:grid-rows-[var(--rows2)] min-12/10:grid-cols-[var(--columns2)]
          ${className}
        `}
        style={{
          // MQ LEGEND
          // Custom Landscape 329mm X 250mm: min-12/10

          // GRID LEGEND
          // 🉐 = logo
          // 👑 = headline + subheadline
          // 🏷 = price
          // 👪 = celeb photoshots
          // 📓 = disclaimer

          '--areas1': `
            " ◤   —   —   —   —  ◥ "
            " l  ..  ..  🉐  ..  ▍"
            " l  📓  🏷  👑  ..  ▍"
            " l  📓  ..  👑  ..  ▍"
            " l  📓  👪  👪  ..  ▍"
            " ◣   ▂   ▂   ▂   ▂  ◢ "
          `,
          '--rows1': `10.8fr 2.5em 11em 21.2fr 139.7fr 41.7fr`,
          '--columns1': `2.6fr 7fr 11em 110fr 7fr 2.6fr`,

          '--areas2': `
            " ◤   —   —   —   —   —   —  ◥ "
            " l  ..  🉐  🏷  ..  ..  ..  ▍"
            " l  📓  ..  🏷  👑  👑  ..  ▍"
            " l  📓  👪  👪  👪  ..  ..  ▍"
            " l  ..  👪  👪  👪  ..  ..  ▍"
            " ◣   ▂   ▂   ▂   ▂   ▂   ▂  ◢ "
          `,
          '--rows2': `18.4fr 2em 9em 164.8fr 22.9fr 0`,
          '--columns2': `6.4fr 8.4fr 95.6fr 11em 70.2fr 90.2fr 6.6fr 6.4fr`,
          ...style
        }}
      >
      <GridItem
        className={`
          grid-in-[var(--grid-in)] z-10
        `}
        style={{
          '--grid-in': `🏷`,
        }}
      >
        <Price price={price} />
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
            '--rows': `repeat(3, 0.05fr) 1fr repeat(9, 0.05fr)`,
            '--columns': `repeat(32, 1fr)`,
          }}
        >
          <GridItem
            data-hitarea="photo1"
            className={`
              grid-in-[var(--grid-in)] z-[var(--z-index)]
            `}
            style={{
              '--grid-in': `1 / 1 / -8 / -14`,
              '--z-index': photos[0].photoLayer,
            }}
          >
            <Img
              src={photos[0].photoAsset.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)] ${dropShadow}`}
              style={{
                '--photo-height': `${photos[0].photoHeight}%`,
                '--photo-vertical': `${photos[0].photoVertical}px`,
                '--photo-horizontal': `${photos[0].photoHorizontal}px`,
                '--photo-rotate': `${photos[0].photoRotate}deg`,
              }}
            />
          </GridItem>

          <GridItem
            data-hitarea="photo2"
            className={`
              grid-in-[var(--grid-in)] z-[var(--z-index)]
            `}
            style={{
              '--grid-in': `2 / 6 / -3 / -10`,
              '--z-index': photos[1].photoLayer,
            }}
          >
            <Img
              src={photos[1].photoAsset.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)] ${dropShadow}`}
              style={{
                '--photo-height': `${photos[1].photoHeight}%`,
                '--photo-vertical': `${photos[1].photoVertical}px`,
                '--photo-horizontal': `${photos[1].photoHorizontal}px`,
                '--photo-rotate': `${photos[1].photoRotate}deg`,
              }}
            />
          </GridItem>

          <GridItem
            data-hitarea="photo3"
            className={`
              grid-in-[var(--grid-in)] z-[var(--z-index)]
            `}
            style={{
              '--grid-in': `3 / 10 / -1 / -6`,
              '--z-index': photos[2].photoLayer,
            }}
          >
            <Img
              src={photos[2].photoAsset.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)] ${dropShadow}`}
              style={{
                '--photo-height': `${photos[2].photoHeight}%`,
                '--photo-vertical': `${photos[2].photoVertical}px`,
                '--photo-horizontal': `${photos[2].photoHorizontal}px`,
                '--photo-rotate': `${photos[2].photoRotate}deg`,
              }}
            />
          </GridItem>

          <GridItem
            data-hitarea="photo4"
            className={`
              grid-in-[var(--grid-in)] z-[var(--z-index)]
            `}
            style={{
              '--grid-in': `4 / 14 / -5 / -2`,
              '--z-index': photos[3].photoLayer,
            }}
          >
            <Img
              src={photos[3].photoAsset.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)}
              className={`absolute object-contain w-full h-[var(--photo-height)] top-[var(--photo-vertical)] left-[var(--photo-horizontal)] rotate-[var(--photo-rotate)] ${dropShadow}`}
              style={{
                '--photo-height': `${photos[3].photoHeight}%`,
                '--photo-vertical': `${photos[3].photoVertical}px`,
                '--photo-horizontal': `${photos[3].photoHorizontal}px`,
                '--photo-rotate': `${photos[3].photoRotate}deg`,
              }}
            />
          </GridItem>
        </div>
      </GridItem>

      <GridItem
        className={`
          grid-in-[var(--grid-in)] z-10
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
        {!logoChoice?.name.includes(`no-image`) ? (
          <div
            className={`
              flex items-start justify-start
            `}
          >
            <Img src={logoChoice?.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)} className='pl-3 object-contain absolute' />
          </div>
          
        ) : (
          <Logo colors={colors} className='pl-3 h-full' />
        )}
      </GridItem>

      {disclaimer && <GridItem
        className={`
          grid-in-[var(--grid-in)] z-10
          flex h-full items-center justify-start
        `}
        style={{
          '--grid-in': `📓/📓/📓/-1`,
        }}
      >
        <span
          className={`absolute left-0 bottom-0 text-[length:var(--font-size)] tracking-[--tracking] leading-[1] -rotate-90 w-[60vh]`}
          style={{
            transformOrigin: `0 0`,
            '--font-size': `${disclaimer.size? disclaimer.size : 6}px`,
            '--tracking': `${disclaimer.tracking ? disclaimer.tracking * 0.01 : 0}em`,
          }}
        >
          {disclaimer.text}
        </span>
      </GridItem>}
    </div>
  )
}

export default ContentBlock
