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
      fontChoice,
      backgroundChoice,
      logoChoice,
      headline,
      headlineSize,
      headlineTracking,
      copy,
      copySize,
      copyTracking,
      price,
      priceSize,
      priceTracking,
      priceCopyTop,
      priceCopyTopSize,
      priceCopyTopTracking,
      priceCopyBottom,
      priceCopyBottomSize,
      priceCopyBottomTracking,
      photo1,
      photo1Height,
      photo1Vertical,
      photo1Horizontal,
      photo1Rotate,
      photo1Layer,
      photo2,
      photo2Height,
      photo2Vertical,
      photo2Horizontal,
      photo2Rotate,
      photo2Layer,
      photo3,
      photo3Height,
      photo3Vertical,
      photo3Horizontal,
      photo3Rotate,
      photo3Layer,
      photo4,
      photo4Height,
      photo4Vertical,
      photo4Horizontal,
      photo4Rotate,
      photo4Layer,
      cta,
      ctaSize,
      ctaTracking,
      footerHeadline,
      footerHeadlineSize,
      footerHeadlineTracking,
      footerCopy,
      footerCopySize,
      footerCopyTracking,
      partner1,
      partner2,
      partner3,
      partner4,
      partner5,
      partner6,
      partner7,
      disclaimer,
      disclaimerSize,
      disclaimerTracking,
    },
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  // Font list for use in the fontChoice dropdown
  const fontList = {
    english: {
      fontFamily: `font-VoltePlay`,
      letterSpacing: `0.1em`,
    },    
    hindiVolt: {
      fontFamily: `font-VoltePlayDevanagari`,
      letterSpacing: `0.2em`,
    },
    tamil: {
      fontFamily: `font-TiroTamil`,
      letterSpacing: `0.1em`,
    },
    hindiTiro: {
      fontFamily: `font-TiroDevanagari`,
      letterSpacing: `0.2em`,
    },
    bengali: {  
      fontFamily: `font-NotoSansBengali`,
      letterSpacing: `0.4em`,
    },
  }

  // Photo list for use in the photo asset picker
  const photos = [
    {
      photoAsset: photo1,
      photoHeight: photo1Height,
      photoVertical: photo1Vertical,
      photoHorizontal: photo1Horizontal,
      photoRotate: photo1Rotate,
      photoLayer: photo1Layer,
    },
    {
      photoAsset: photo2,
      photoHeight: photo2Height,
      photoVertical: photo2Vertical,
      photoHorizontal: photo2Horizontal,
      photoRotate: photo2Rotate,
      photoLayer: photo2Layer,
    },
    {
      photoAsset: photo3,
      photoHeight: photo3Height,
      photoVertical: photo3Vertical,
      photoHorizontal: photo3Horizontal,
      photoRotate: photo3Rotate,
      photoLayer: photo3Layer,
    },
    {
      photoAsset: photo4,
      photoHeight: photo4Height,
      photoVertical: photo4Vertical,
      photoHorizontal: photo4Horizontal,
      photoRotate: photo4Rotate,
      photoLayer: photo4Layer,
    },
  ]

  // Partner list for use in the partner asset picker
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]

  // Object for use in the Headline component
  const headlineObj = {
    text: headline,
    size: headlineSize,
    tracking: headlineTracking,
  }

  // Object for use in the Copy component
  const copyObj = {
    text: copy,
    size: copySize,
    tracking: copyTracking,
  }

  // Object for use in the CTA
  const ctaObj = {
    text: cta,
    size: ctaSize,
    tracking: ctaTracking,
  }

  // Object for use in the Footer Headline
  const footerHeadlineObj = {
    text: footerHeadline,
    size: footerHeadlineSize,
    tracking: footerHeadlineTracking,
  }

  // Object for use in the Footer Copy
  const footerCopyObj = {
    text: footerCopy,
    size: footerCopySize,
    tracking: footerCopyTracking,
  }

  // Object for use in the Disclaimer
  const disclaimerObj = {
    text: disclaimer,
    size: disclaimerSize,
    tracking: disclaimerTracking,
  }

  const priceObj = {
    text: price,
    size: priceSize,
    tracking: priceTracking,
    topText: priceCopyTop,
    topSize: priceCopyTopSize,
    topTracking: priceCopyTopTracking,
    bottomText: priceCopyBottom,
    bottomSize: priceCopyBottomSize,
    bottomTracking: priceCopyBottomTracking,
  }

  // Background list for use in the backgroundChoice dropdown
  let colorList = {
    purple: {
      body: `bg-tataplay-purple text-white`,
      logoPart1: `fill-tataplay-white`,
      logoPart2: `fill-tataplay-pink`,
      footerbg: `bg-tataplay-pink`,
      cta: `text-white`,
    },
    blue: {
      body: `bg-tataplay-blue text-white`,
      logoPart1: `fill-tataplay-white`,
      logoPart2: `fill-tataplay-pink`,
      footerbg: `bg-tataplay-pink`,
      cta: `text-white`,
    },
    pink: {
      body: `bg-tataplay-pink text-white`,
      logoPart1: `fill-tataplay-white`,
      logoPart2: `fill-tataplay-white`,
      footerbg: `bg-tataplay-purple`,
      cta: `text-white`,
    },
    black: {
      body: `bg-tataplay-black text-white`,
      logoPart1: `fill-tataplay-white`,
      logoPart2: `fill-tataplay-pink`,
      footerbg: `bg-tataplay-pink`,
      cta: `text-white`,
    },
    white: {
      body: `bg-tataplay-white text-black`,
      logoPart1: `fill-tataplay-black`,
      logoPart2: `fill-tataplay-pink`,
      footerbg: `bg-tataplay-purple`,
      cta: `text-white`,
    },
  }

  const colors = colorList[backgroundChoice] || colorList[`purple`] // default to purple if no match

  return (
    <Body
      // animation={animation}
    >
      <div
        className={`
          xo-wrapper
          ${fontList[fontChoice]?.fontFamily || fontList[`english`]?.fontFamily}
          ${colors.body || colors.body}
          w-screen h-screen text-xs grid grid-areas-[var(--areas)] grid-rows-[var(--rows1)] min-12/10:grid-rows-[var(--rows2)]
        `}
        style={{
          '--areas': `
            " .. "
            " 🦶 "
          `,
          '--rows1': `1fr 0.6fr`,
          '--rows2': `1fr 1.2fr`,
        }}
      >
        {/* Content Block */}
        <GridItem className={`grid-in-[1/1/-1/-1]`}>
          <ContentBlock photos={photos} disclaimer={disclaimerObj} colors={colors} logoChoice={logoChoice} price={priceObj}>
            {/* Headline and Copy as child elements */}
            <Headline headline={headlineObj} copy={copyObj} />
            <Copy copy={copyObj} className="text-[10.9pt] leading-tight" />
          </ContentBlock>
        </GridItem>

        {/* Footer Block */}
        <GridItem
          className={`grid-in-[var(--grid-in)] z-50`}
          style={{
            '--grid-in': `🦶`,
          }}
        >
          <FooterBlock cta={ctaObj} footerHeadline={footerHeadlineObj} footerCopy={footerCopyObj} partners={partners} colors={colors} />
        </GridItem>
      </div>
    </Body>
  )
}

export default Template
