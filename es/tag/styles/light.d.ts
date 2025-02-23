import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  closeBorderRadius: string
  heightTiny: string
  heightSmall: string
  heightMedium: string
  heightLarge: string
  borderRadius: string
  opacityDisabled: string
  fontSizeTiny: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  fontWeightStrong: string
  textColorCheckable: string
  textColorHoverCheckable: string
  textColorPressedCheckable: string
  textColorChecked: string
  colorCheckable: string
  colorHoverCheckable: string
  colorPressedCheckable: string
  colorChecked: string
  colorCheckedHover: string
  colorCheckedPressed: string
  border: string
  textColor: string
  color: string
  colorBordered: string
  closeIconColor: string
  closeIconColorHover: string
  closeIconColorPressed: string
  closeColorHover: string
  closeColorPressed: string
  borderPrimary: string
  textColorPrimary: string
  colorPrimary: string
  colorBorderedPrimary: string
  closeIconColorPrimary: string
  closeIconColorHoverPrimary: string
  closeIconColorPressedPrimary: string
  closeColorHoverPrimary: string
  closeColorPressedPrimary: string
  borderInfo: string
  textColorInfo: string
  colorInfo: string
  colorBorderedInfo: string
  closeIconColorInfo: string
  closeIconColorHoverInfo: string
  closeIconColorPressedInfo: string
  closeColorHoverInfo: string
  closeColorPressedInfo: string
  borderSuccess: string
  textColorSuccess: string
  colorSuccess: string
  colorBorderedSuccess: string
  closeIconColorSuccess: string
  closeIconColorHoverSuccess: string
  closeIconColorPressedSuccess: string
  closeColorHoverSuccess: string
  closeColorPressedSuccess: string
  borderWarning: string
  textColorWarning: string
  colorWarning: string
  colorBorderedWarning: string
  closeIconColorWarning: string
  closeIconColorHoverWarning: string
  closeIconColorPressedWarning: string
  closeColorHoverWarning: string
  closeColorPressedWarning: string
  borderError: string
  textColorError: string
  colorError: string
  colorBorderedError: string
  closeIconColorError: string
  closeIconColorHoverError: string
  closeIconColorPressedError: string
  closeColorHoverError: string
  closeColorPressedError: string
  closeIconSizeTiny: string
  closeIconSizeSmall: string
  closeIconSizeMedium: string
  closeIconSizeLarge: string
  closeSizeTiny: string
  closeSizeSmall: string
  closeSizeMedium: string
  closeSizeLarge: string
  padding: string
  closeMargin: string
  closeMarginRtl: string
}
export type TagThemeVars = ReturnType<typeof self>
declare const tagLight: Theme<'Tag', TagThemeVars>
export default tagLight
export type TagTheme = typeof tagLight
