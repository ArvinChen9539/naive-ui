import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  lineHeight: string
  borderRadius: string
  borderColor: string
  borderColorModal: string
  borderColorPopover: string
  tdColor: string
  tdColorModal: string
  tdColorPopover: string
  tdColorStriped: string
  tdColorStripedModal: string
  tdColorStripedPopover: string
  thColor: string
  thColorModal: string
  thColorPopover: string
  thTextColor: string
  tdTextColor: string
  thFontWeight: string
  thPaddingSmall: string
  thPaddingMedium: string
  thPaddingLarge: string
  tdPaddingSmall: string
  tdPaddingMedium: string
  tdPaddingLarge: string
}
export type TableThemeVars = ReturnType<typeof self>
declare const tableLight: Theme<'Table', TableThemeVars>
export default tableLight
export type TableTheme = typeof tableLight
