// @ts-check
import * as React from 'react'
import { GridItem } from '@myadbox/exoplanet-toolkit'
import ContentBlock from '@/partials/ContentBlock'
import FooterBlock from '@/partials/FooterBlock'

export const Wrapper = ({children, cta, className = ``, style = {}, disclaimer = ``, ...props}) => {
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
        className={`grid-in-[1/1/-1/-1]`}
      >
        <ContentBlock disclaimer={disclaimer}>
          {children}
        </ContentBlock>
      </GridItem>

      <GridItem
        className={`grid-in-[var(--grid-in)]`}
        style={{
          '--grid-in': `🦶`,
        }}
      >
        <FooterBlock cta={cta} />   
      </GridItem>
    </div>
  )
}

export default Wrapper
