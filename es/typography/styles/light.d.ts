import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  aTextColor: string
  blockquoteTextColor: string
  blockquotePrefixColor: string
  blockquoteLineHeight: string
  blockquoteFontSize: string
  codeBorderRadius: string
  liTextColor: string
  liLineHeight: string
  liFontSize: string
  hrColor: string
  headerFontWeight: string
  headerTextColor: string
  pTextColor: string
  pTextColor1Depth: string
  pTextColor2Depth: string
  pTextColor3Depth: string
  pLineHeight: string
  pFontSize: string
  headerBarColor: string
  headerBarColorPrimary: string
  headerBarColorInfo: string
  headerBarColorError: string
  headerBarColorWarning: string
  headerBarColorSuccess: string
  textColor: string
  textColor1Depth: string
  textColor2Depth: string
  textColor3Depth: string
  textColorPrimary: string
  textColorInfo: string
  textColorSuccess: string
  textColorWarning: string
  textColorError: string
  codeTextColor: string
  codeColor: string
  codeBorder: string
  headerFontSize1: string
  headerFontSize2: string
  headerFontSize3: string
  headerFontSize4: string
  headerFontSize5: string
  headerFontSize6: string
  headerMargin1: string
  headerMargin2: string
  headerMargin3: string
  headerMargin4: string
  headerMargin5: string
  headerMargin6: string
  headerPrefixWidth1: string
  headerPrefixWidth2: string
  headerPrefixWidth3: string
  headerPrefixWidth4: string
  headerPrefixWidth5: string
  headerPrefixWidth6: string
  headerBarWidth1: string
  headerBarWidth2: string
  headerBarWidth3: string
  headerBarWidth4: string
  headerBarWidth5: string
  headerBarWidth6: string
  pMargin: string
  liMargin: string
  olPadding: string
  ulPadding: string
}
export type TypographyThemeVars = ReturnType<typeof self>
declare const typographyLight: Theme<'Typography', TypographyThemeVars>
export default typographyLight
export type TypographyTheme = typeof typographyLight
