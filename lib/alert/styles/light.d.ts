import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins/use-theme'
declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  lineHeight: string
  titleFontWeight: string
  borderRadius: string
  border: string
  color: string
  titleTextColor: string
  iconColor: string
  contentTextColor: string
  closeBorderRadius: string
  closeColorHover: string
  closeColorPressed: string
  closeIconColor: string
  closeIconColorHover: string
  closeIconColorPressed: string
  borderInfo: string
  colorInfo: string
  titleTextColorInfo: string
  iconColorInfo: string
  contentTextColorInfo: string
  closeColorHoverInfo: string
  closeColorPressedInfo: string
  closeIconColorInfo: string
  closeIconColorHoverInfo: string
  closeIconColorPressedInfo: string
  borderSuccess: string
  colorSuccess: string
  titleTextColorSuccess: string
  iconColorSuccess: string
  contentTextColorSuccess: string
  closeColorHoverSuccess: string
  closeColorPressedSuccess: string
  closeIconColorSuccess: string
  closeIconColorHoverSuccess: string
  closeIconColorPressedSuccess: string
  borderWarning: string
  colorWarning: string
  titleTextColorWarning: string
  iconColorWarning: string
  contentTextColorWarning: string
  closeColorHoverWarning: string
  closeColorPressedWarning: string
  closeIconColorWarning: string
  closeIconColorHoverWarning: string
  closeIconColorPressedWarning: string
  borderError: string
  colorError: string
  titleTextColorError: string
  iconColorError: string
  contentTextColorError: string
  closeColorHoverError: string
  closeColorPressedError: string
  closeIconColorError: string
  closeIconColorHoverError: string
  closeIconColorPressedError: string
  iconMargin: string
  iconMarginRtl: string
  iconSize: string
  closeIconSize: string
  closeSize: string
  closeMargin: string
  closeMarginRtl: string
  padding: string
}
export type AlertThemeVars = ReturnType<typeof self>
declare const alertLight: Theme<'Alert', AlertThemeVars>
export default alertLight
export type AlertTheme = typeof alertLight
