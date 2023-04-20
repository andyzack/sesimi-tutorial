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
    page: {
      headline,
      copy,
      cta,
      disclaimer,
      photo1,
      photo1Height,
      photo1Vertical,
      photo1Horizontal,
      photo1Rotate,
      photo2,
      photo2Height,
      photo2Vertical,
      photo2Horizontal,
      photo2Rotate,
      photo3,
      photo3Height,
      photo3Vertical,
      photo3Horizontal,
      photo3Rotate,
      photo4,
      photo4Height,
      photo4Vertical,
      photo4Horizontal,
      photo4Rotate,
      partner1,
      partner2,
      partner3,
      partner4,
      partner5,
      partner6,
      partner7,
    },
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  const photos = [
    {
      photoAsset: photo1,
      photoHeight: photo1Height,
      photoVertical: photo1Vertical,
      photoHorizontal: photo1Horizontal,
      photoRotate: photo1Rotate,
    },
    {
      photoAsset: photo2,
      photoHeight: photo2Height,
      photoVertical: photo2Vertical,
      photoHorizontal: photo2Horizontal,
      photoRotate: photo2Rotate,
    },
    {
      photoAsset: photo3,
      photoHeight: photo3Height,
      photoVertical: photo3Vertical,
      photoHorizontal: photo3Horizontal,
      photoRotate: photo3Rotate,
    },
    {
      photoAsset: photo4,
      photoHeight: photo4Height,
      photoVertical: photo4Vertical,
      photoHorizontal: photo4Horizontal,
      photoRotate: photo4Rotate,
    },
  ]
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
        <GridItem className={`grid-in-[1/1/-1/-1]`}>
          <ContentBlock photos={photos} disclaimer={disclaimer}>
            <Headline headline={headline} />
            <Copy copy={copy} className="text-[10.9pt] leading-tight" />
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
