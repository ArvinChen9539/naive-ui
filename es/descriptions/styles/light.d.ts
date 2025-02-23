import { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins/use-theme'
export declare const self: (vars: ThemeCommonVars) => {
  lineHeight: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  titleTextColor: string
  thColor: string
  thColorModal: string
  thColorPopover: string
  thTextColor: string
  thFontWeight: string
  tdTextColor: string
  tdColor: string
  tdColorModal: string
  tdColorPopover: string
  borderColor: string
  borderColorModal: string
  borderColorPopover: string
  borderRadius: string
  thPaddingBorderedSmall: string
  thPaddingBorderedMedium: string
  thPaddingBorderedLarge: string
  thPaddingSmall: string
  thPaddingMedium: string
  thPaddingLarge: string
  tdPaddingBorderedSmall: string
  tdPaddingBorderedMedium: string
  tdPaddingBorderedLarge: string
  tdPaddingSmall: string
  tdPaddingMedium: string
  tdPaddingLarge: string
}
export type DescriptionsThemeVars = ReturnType<typeof self>
declare const descriptionsLight: Theme<'Descriptions', DescriptionsThemeVars>
export default descriptionsLight
export type DescriptionsTheme = typeof descriptionsLight
