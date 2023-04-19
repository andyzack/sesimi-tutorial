// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

import * as React from 'react'
import {Body, useTemplate /*, useAnimation*/} from '@myadbox/exoplanet-toolkit'
import page from './data/values.mjs'
import Headline from '../../components/Headline.jsx'
import Copy from '../../components/Copy.jsx'
import Wrapper from '../../components/Wrapper/Wrapper'

/** @type ExoTemplate */
const Template = (props) => {
  // Ensure that props you destructure from useTemplate match those found in
  // data/values.mjs and data/config.mjs `fields`.
  const {
    page: {headline, copy, cta, disclaimer, hero, lang},
  } = useTemplate({page, ...props})
  // const animation = useAnimation(props)

  return (
    <Body
      // animation={animation}
      className={`text-white text-xs font-notoSansEnglish`}
      backdropClassName={`bg-primary`}
      backdropStyle={{
        backgroundImage: `transparent`,
      }}
    >
      <Wrapper
        disclaimer={disclaimer}
        className={`grid font-VoltePlay`}
      >

        <Headline headline={headline} />

        <Copy copy={copy} className='text-[10.9pt] leading-tight' />
        
      </Wrapper>
    </Body>
  )
}

export default Template
