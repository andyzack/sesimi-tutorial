// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import {Body, GridItem, useTemplate /*, useAnimation*/} from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import Headline from '../../components/Headline.jsx'
import Copy from '../../components/Copy.jsx'
import ContentBlock from '@/partials/ContentBlock'
import FooterBlock from '@/partials/FooterBlock'

/** @type ExoTemplate */
const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    page: {headline, copy, cta, disclaimer, partner1, partner2, partner3, partner4, partner5, partner6, partner7},
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]

  return (
    <Body
      // animation={animation}
      className={`text-white text-xs font-notoSansEnglish`}
      backdropClassName={`bg-primary`}
      backdropStyle={{
        backgroundImage: `transparent`,
      }}
    >
      <div
        className={`
          xo-wrapper
          font-VoltePlay
          w-screen h-screen text-white grid grid-areas-[var(--areas)] grid-rows-[var(--rows)]
        `}
        style={{
          '--areas': `
            " .. "
            " 🦶 "
          `,
          '--rows': `1fr 0.6fr`,
        }}
      >
        <GridItem
          className={`grid-in-[1/1/-1/-1]`}
        >
          <ContentBlock disclaimer={disclaimer}>
            <Headline headline={headline} />
            <Copy copy={copy} className='text-[10.9pt] leading-tight' />
          </ContentBlock>
        </GridItem>

        <GridItem
          className={`grid-in-[var(--grid-in)]`}
          style={{
            '--grid-in': `🦶`,
          }}
        >
          <FooterBlock cta={cta} partners={partners} />   
        </GridItem>
      </div>
    </Body>
  )
}

export default Template
