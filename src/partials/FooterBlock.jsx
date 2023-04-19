import * as React from 'react'
import { GridItem } from '@myadbox/exoplanet-toolkit'

/**
* This is the footer block
* @param {object} props - all available props
* @param {string} [props.cta] - copy details to display
* @param {string} [props.canvasColor] - canvas color to display
* @param {string} [props.subhead] - sub headline details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
*
* @returns {React.ReactElement} the template
*/

export const FooterBlock = ({
    cta=``,
    logos={},
    className = ``,
    style = {},
    ...props
}) => {
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
        className={`grid-in-[var(--grid-in)] flex items-end justify-end text-right whitespace-break-spaces`}
        style={{
          '--grid-in': `📣`,
          alignItems: `end`,
        }}
      >
        {cta}
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
          className={`grid h-full w-full grid-areas-[var(--areas)] grid-rows-[var(--rows)] grid-cols-[var(--columns)]`}
        >
          
        </div>
      </GridItem>
    </div>
    )
}

export default FooterBlock
