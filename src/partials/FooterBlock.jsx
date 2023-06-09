import * as React from 'react'
import {GridItem, ResponsiveImage as Img} from '@myadbox/exoplanet-toolkit'
import ReactMarkdown from 'react-markdown'

/**
 * This is the footer block
 * @param {object} props - all available props
 * @param {object} [props.cta] - cta to display
 * @param {object} [props.footerHeadline] - footer headline to display
 * @param {object} [props.footerCopy] - footer copy to display
 * @param {object} [props.partners] - partners list to display
 * @param {object} [props.colors] - color theme to display
 * @param {string} [props.className] - css class names
 * @param {object} [props.style] - css inline style
 *
 * @returns {React.ReactElement} the template
 */

export const FooterBlock = ({cta = {}, footerHeadline = {}, footerCopy = {}, partners = {}, colors = {}, className = ``, style = {}}) => {

  // Cleanup partners object: filter undefined and items with word 'no-image' 
  const partnersList = partners = partners?.filter((item) => item != undefined && !item.name.includes(`no-image`))

  return (
    <div
      className={`
        xo-footer-block
        grid w-full h-full
        grid-areas-[var(--areas)]
        grid-rows-[var(--rows1)] grid-cols-[var(--columns1)]
        min-12/10:grid-rows-[var(--rows2)] min-12/10:grid-cols-[var(--columns2)]
        ${className}
      `}
      style={{
        // MQ LEGEND
        // Custom Landscape 329mm X 250mm: min-12/10

        // GRID LEGEND
        // 📣 = CTA block
        // 🤲 = Partners list

        '--areas': `
          " ◤   —   ◥ "
          " l  📣   ▍"
          " l  ..   ▍"
          " l  🤲   ▍"
          " ◣   ▂   ◢ "
        `,
        '--rows1': `0 52fr 5.4fr 34.2fr 0`,
        '--columns1': `12.4fr 135.6fr 12.4fr`,

        '--rows2': `0 89fr 6.4fr 45.4fr 0`,
        '--columns2': `132.7fr 182fr 14.6fr`,
        ...style,
      }}
    >
      {/* Footer background with clippath */}
      <GridItem
        className={`${colors.footerbg} grid-in-[var(--grid-in)] [clip-path:polygon(0_60%,_100%_0,_100%_100%,_0%_100%)] min-12/10:[clip-path:polygon(0_88%,_100%_0,_100%_100%,_0%_100%)]`}
        style={{
          '--grid-in': `1/1/-1/-1`,
        }}
      />

      {/* CTA Block */}
      <GridItem
        className={`grid-in-[var(--grid-in)] flex items-end justify-end text-right text-xl ${colors.cta} whitespace-break-spaces`}
        style={{
          '--grid-in': `📣`,
          alignItems: `end`,
        }}
      >
        <div
          data-hitarea="cta"
        >
          <div className={`border-dotted border-t-[0.64px] border-white border-opacity-50 w-full m-auto pb-2`}></div>
          <ReactMarkdown
            components={{
              strong: ({children}) => <strong className='font-semibold'>{children}</strong>
            }}
          >
            {cta.text}
          </ReactMarkdown>
          {/* Visit <strong className='font-semibold'>www.tataplay.com</strong> <br />Or contact your <strong className='font-semibold'>nearest dealer</strong> */}
          <div className={`border-dotted border-b-[0.64px] border-white border-opacity-50 w-full m-auto pt-2`}></div>
        </div>
      </GridItem>

      {/* Partners List */}
      <GridItem
        className={`
          grid-in-[var(--grid-in)]
          ${partnersList.length > 0 ? `` : `hidden`}
        `}
        style={{
          '--grid-in': `🤲`,
        }}
      >
        <div
          className={`grid grid-rows-[var(--rows)] grid-cols-[var(--cols)] h-full w-full bg-white text-tataplay-purple rounded-t-3xl`}
          style={{
            '--rows': `1fr 1fr 0.6fr`,
            '--cols': `0.05fr 1fr 0.05fr`,
          }}
        >
          <GridItem className={`grid-in-[1/2/1/-2] flex items-center justify-center`} style={{alignItems: `center`,}}>
            <div
              data-hitarea="footerHeadline"
              className={`font-medium ${footerHeadline.size ? `text-[length:var(--font-size)]` : `text-2xl`} tracking-[--tracking]`}
              style={{
                '--font-size': `${footerHeadline.size? footerHeadline.size + `rem` : ``}`,
                '--tracking': `${footerHeadline.tracking ? footerHeadline.tracking * 0.01 : 0}em`,
              }}
            >
              {footerHeadline.text}
              <div className={` border-b-2 border-tataplay-purple w-24 m-auto pt-2`}></div>
            </div>
          </GridItem>
          <GridItem className={`grid-in-[2/2/2/-2] flex items-start justify-center`}>
            <div className={`grid h-full w-full grid-rows-1 grid-cols-5 gap-6 bg-white border-radius-2`} style={{ gridTemplateColumns: `repeat(${partnersList.length}, minmax(0, 1fr))`}}>
              {partnersList?.map((partner, index) => {
                return (
                  <GridItem
                    key={index}
                    data-hitarea={`partner`+(index+1)}
                    className={`flex justify-center`}
                  >
                    <Img src={partner?.url.replace(`v1/ogilvy-in`,`e_trim/v1/ogilvy-in`)} className="w-full h-full object-contain absolute" />
                  </GridItem>
                )
              })}
            </div>
          </GridItem>
          <GridItem
            className={`grid-in-[3/2/3/-2] flex items-start justify-end pt-2 text-tataplay-black ${footerCopy.size ? `text-[length:var(--font-size)]` : `text-xs`} tracking-[--tracking]`}
            style={{
              '--font-size': `${footerCopy.size? footerCopy.size + `rem` : ``}`,
              '--tracking': `${footerCopy.tracking ? footerCopy.tracking * 0.01 : 0}em`,
            }}
          >
            {footerCopy.text}
          </GridItem>
        </div>
      </GridItem>
    </div>
  )
}

export default FooterBlock
