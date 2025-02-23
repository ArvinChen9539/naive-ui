import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins/use-theme'
export declare const self: (vars: ThemeCommonVars) => {
  closeBorderRadius: string
  textColor: string
  textColorInfo: string
  textColorSuccess: string
  textColorError: string
  textColorWarning: string
  textColorLoading: string
  color: string
  colorInfo: string
  colorSuccess: string
  colorError: string
  colorWarning: string
  colorLoading: string
  boxShadow: string
  boxShadowInfo: string
  boxShadowSuccess: string
  boxShadowError: string
  boxShadowWarning: string
  boxShadowLoading: string
  iconColor: string
  iconColorInfo: string
  iconColorSuccess: string
  iconColorWarning: string
  iconColorError: string
  iconColorLoading: string
  closeColorHover: string
  closeColorPressed: string
  closeIconColor: string
  closeIconColorHover: string
  closeIconColorPressed: string
  closeColorHoverInfo: string
  closeColorPressedInfo: string
  closeIconColorInfo: string
  closeIconColorHoverInfo: string
  closeIconColorPressedInfo: string
  closeColorHoverSuccess: string
  closeColorPressedSuccess: string
  closeIconColorSuccess: string
  closeIconColorHoverSuccess: string
  closeIconColorPressedSuccess: string
  closeColorHoverError: string
  closeColorPressedError: string
  closeIconColorError: string
  closeIconColorHoverError: string
  closeIconColorPressedError: string
  closeColorHoverWarning: string
  closeColorPressedWarning: string
  closeIconColorWarning: string
  closeIconColorHoverWarning: string
  closeIconColorPressedWarning: string
  closeColorHoverLoading: string
  closeColorPressedLoading: string
  closeIconColorLoading: string
  closeIconColorHoverLoading: string
  closeIconColorPressedLoading: string
  loadingColor: string
  lineHeight: string
  borderRadius: string
  margin: string
  padding: string
  maxWidth: string
  minWidth: string
  iconMargin: string
  closeMargin: string
  closeSize: string
  closeIconSize: string
  iconSize: string
  fontSize: string
}
export type MessageThemeVars = ReturnType<typeof self>
declare const messageLight: Theme<'Message', MessageThemeVars>
export default messageLight
export type MessageTheme = typeof messageLight
