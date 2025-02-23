import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  lineHeight: string
  titleFontWeight: string
  titleTextColor: string
  textColor: string
  iconColorError: string
  iconColorSuccess: string
  iconColorInfo: string
  iconColorWarning: string
  titleFontSizeSmall: string
  titleFontSizeMedium: string
  titleFontSizeLarge: string
  titleFontSizeHuge: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  fontSizeHuge: string
  iconSizeSmall: string
  iconSizeMedium: string
  iconSizeLarge: string
  iconSizeHuge: string
  iconColor418: undefined
  iconColor404: undefined
  iconColor403: undefined
  iconColor500: undefined
}
export type ResultThemeVars = ReturnType<typeof self>
declare const resultLight: Theme<'Result', ResultThemeVars>
export default resultLight
export type ResultTheme = typeof resultLight
