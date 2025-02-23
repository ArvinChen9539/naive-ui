import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  lineHeight: string
  color: string
  colorModal: string
  colorPopover: string
  colorTarget: string
  colorEmbedded: string
  colorEmbeddedModal: string
  colorEmbeddedPopover: string
  textColor: string
  titleTextColor: string
  borderColor: string
  actionColor: string
  titleFontWeight: string
  closeColorHover: string
  closeColorPressed: string
  closeBorderRadius: string
  closeIconColor: string
  closeIconColorHover: string
  closeIconColorPressed: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  fontSizeHuge: string
  boxShadow: string
  borderRadius: string
  paddingSmall: string
  paddingMedium: string
  paddingLarge: string
  paddingHuge: string
  titleFontSizeSmall: string
  titleFontSizeMedium: string
  titleFontSizeLarge: string
  titleFontSizeHuge: string
  closeIconSize: string
  closeSize: string
}
export type CardThemeVars = ReturnType<typeof self>
declare const cardLight: Theme<'Card', CardThemeVars>
export default cardLight
export type CardTheme = typeof cardLight
