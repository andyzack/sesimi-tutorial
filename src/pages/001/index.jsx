// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import {Body, useTemplate /*, useAnimation*/} from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import Title from '../../components/Title/Title'
import Wrapper from '../../components/Wrapper/Wrapper'

/** @type ExoTemplate */
const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    page: {start, brand, end, copy, hero, lang, headlineFont},
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  const headlineFontChoice = {
    style1: `font-notoSansEnglish`,
    style2: `font-lobster`,
  }

  const langChoice = {
    tamil: {
      fontFamily: `font-tiroTamil`,
      letterSpacing: `0.1em`,
    },
    hindi: {
      fontFamily: `font-tiroDevanagari`,
      letterSpacing: `0.2em`,
    },
    bengali: {  
      fontFamily: `font-notoSansBengali`,
      letterSpacing: `0.4em`,
    },
  }

  return (
    <Body
      // animation={animation}
      className={`text-white text-xs font-notoSansEnglish`}
      backdropClassName={`bg-midnight-forest`}
      backdropStyle={{
        backgroundImage: `radial-gradient(
          hsla(74deg, 100%, 62%, .5) 2%,
          hsla(186deg, 88%, 9%, .4) 100%
        )`,
        backgroundBlendMode: `overlay`,
      }}
    >
      <Wrapper
        className='z-10 min-60/10:grid-flow-col'
        style={{
          filter: `drop-shadow(0 0 7px #000)`,
        }}
      >
        <Title start={start} brand={brand} end={end} className={`${headlineFontChoice[headlineFont]}`} />
        <h2
          className={`${langChoice[lang].fontFamily} text-xl min-04/10:text-2xl min-60/10:text-base min-60/10:leading-normal min-80/10:text-3xl font-light tracking-[var(--h2-tracking)]`}
          style={{'--h2-tracking': langChoice[lang].letterSpacing}}
        >
          {copy}
        </h2>
      </Wrapper>
      <div
        data-hitarea='hero'
        className={`absolute w-screen h-screen`}
      >
        <img
          id="reactLogo"
          // images under 5KB can be imported directly (see top of this file) and will be
          // inlined as Base64 with the template js file
          src={hero.url}
          // for static (non-Sesimi assets) local images above 5KB when optimised, use the following syntax:
          // src={`${root}/img/react.svg`}
          alt="React"
          width="80"
          className={`absolute object-cover w-full h-full z-0`}
        />
      </div>
    </Body>
  )
}

export default Template
