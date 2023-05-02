import * as React from 'react'
import {GridItem, ResponsiveImage as Img} from '@myadbox/exoplanet-toolkit'

/**
* This is the background image component
* @param {object} props - all available props
* @param {object} [props.src] - copy details to display
* @param {string} [props.className] - css class names
* @param {object} [props.style] - css inline style
*
* @returns {React.ReactElement} the template
*/

export const BackgroundImage = ({
  src = {},
  colors = {},
  className = ``,
  style = {},
}) => {
    return (
      <GridItem
        data-hitarea="backgroundImageChoice"
        className={`
          xo-background-image
          grid h-full w-full grid-cols-1 grid-rows-1
          ${className}
          ${src.name.includes(`no-image`) ? `opacity-0` : ``}
        `}
        style={{
          ...style,
        }}
      >
        {/* Background Image */}
        <GridItem
          className={`grid-in-[1/1/-1/-1]`}
        >
          <Img
            className={`w-full h-full`}
            src={src?.url}
          />
        </GridItem>

        {/* Background Overlay */}
        <GridItem
          className={`
            grid-in-[1/1/-1/-1]
            ${colors.body || colors.body}
            opacity-60
          `}
        >
        </GridItem>
      </GridItem>
    )
}

export default BackgroundImage
