/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import ThemeContextProvider from './src/context/theme-context'

require('prismjs/themes/prism-okaidia.css')
// require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require('animate.css/animate.css')

export const wrapRootElement = ({element}) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)