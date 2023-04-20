import * as React from 'react'
import {GridItem, ResponsiveImage as Img} from '@myadbox/exoplanet-toolkit'

/**
 * This is the footer block
 * @param {object} props - all available props
 * @param {string} [props.cta] - copy details to display
 * @param {object} [props.partners] - canvas color to display
 * @param {string} [props.className] - css class names
 * @param {object} [props.style] - css inline style
 *
 * @returns {React.ReactElement} the template
 */

export const FooterBlock = ({cta = ``, partners = {}, className = ``, style = {}, ...props}) => {
  return (
    <div
      className={`grid w-full h-full grid-areas-[var(--areas)] grid-rows-[var(--rows)] grid-cols-[var(--columns)]`}
      style={{
        '--areas': `
          " ◤   —   ◥ "
          " l  📣   ▍"
          " l  ..   ▍"
          " l  🤲   ▍"
          " ◣   ▂   ◢ "
        `,
        '--rows': `0 50fr 5.4fr 34.2fr 0`,
        '--columns': `12.4fr 135.6fr 12.4fr`,
      }}
    >
      <GridItem
        className={`bg-secondary grid-in-[var(--grid-in)]`}
        style={{
          '--grid-in': `1/1/-1/-1`,
          clipPath: `polygon(0 60%, 100% 0, 100% 100%, 0% 100%)`,
        }}
      />

      <GridItem
        className={`grid-in-[var(--grid-in)] flex items-end justify-end text-right text-xl`}
        style={{
          '--grid-in': `📣`,
          alignItems: `end`,
        }}
      >
        <div>
          Visit <strong className='font-semibold'>www.tataplay.com</strong> <br />Or contact your <strong className='font-semibold'>nearest dealer</strong>
        </div>
      </GridItem>
      <GridItem
        className={`
          grid-in-[var(--grid-in)]
        `}
        style={{
          '--grid-in': `🤲`,
        }}
      >
        <div
          className={`grid grid-rows-[var(--rows)] grid-cols-[var(--cols)] h-full w-full bg-white text-primary rounded-t-3xl`}
          style={{
            '--rows': `1fr 1fr 0.4fr`,
            '--cols': `0.1fr 1fr 0.1fr`,
          }}
        >
          <GridItem className={`grid-in-[1/2/1/-2] flex items-center justify-center`} style={{alignItems: `center`,}}>
            <div className="text-2xl font-medium">
              Marathi Hindi Super Value Pack
              <div className={` border-b-2 border-primary w-24 m-auto pt-1`}></div>
            </div>
          </GridItem>
          <GridItem className={`grid-in-[2/2/2/-2] flex items-start justify-center`}>
            <div className={`grid h-full w-full grid-cols-7 gap-6 bg-white border-radius-2`}>
              {partners.map((partner, index) => {
                return (
                  <GridItem
                    key={index}
                    data-hitarea={`partner`+(index+1)}
                  >
                    <Img src={partner?.url.replace(`v1/studio`,`e_trim/v1/studio`)} className="w-full h-full object-contain absolute" />
                  </GridItem>
                )
              })}
            </div>
          </GridItem>
          <GridItem className={`grid-in-[3/2/3/-2] flex items-start justify-end`}>
            + 268 more channels including 9 Marathi Channels
          </GridItem>
        </div>
      </GridItem>
    </div>
  )
}

export default FooterBlock
