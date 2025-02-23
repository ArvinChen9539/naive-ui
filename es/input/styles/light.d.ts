import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  countTextColorDisabled: string
  countTextColor: string
  heightTiny: string
  heightSmall: string
  heightMedium: string
  heightLarge: string
  fontSizeTiny: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  lineHeight: string
  lineHeightTextarea: string
  borderRadius: string
  iconSize: string
  groupLabelColor: string
  groupLabelTextColor: string
  textColor: string
  textColorDisabled: string
  textDecorationColor: string
  caretColor: string
  placeholderColor: string
  placeholderColorDisabled: string
  color: string
  colorDisabled: string
  colorFocus: string
  groupLabelBorder: string
  border: string
  borderHover: string
  borderDisabled: string
  borderFocus: string
  boxShadowFocus: string
  loadingColor: string
  loadingColorWarning: string
  borderWarning: string
  borderHoverWarning: string
  colorFocusWarning: string
  borderFocusWarning: string
  boxShadowFocusWarning: string
  caretColorWarning: string
  loadingColorError: string
  borderError: string
  borderHoverError: string
  colorFocusError: string
  borderFocusError: string
  boxShadowFocusError: string
  caretColorError: string
  clearColor: string
  clearColorHover: string
  clearColorPressed: string
  iconColor: string
  iconColorDisabled: string
  iconColorHover: string
  iconColorPressed: string
  suffixTextColor: string
  paddingTiny: string
  paddingSmall: string
  paddingMedium: string
  paddingLarge: string
  clearSize: string
}
export type InputThemeVars = ReturnType<typeof self>
declare const inputLight: Theme<'Input', InputThemeVars>
export default inputLight
export type InputTheme = typeof inputLight
