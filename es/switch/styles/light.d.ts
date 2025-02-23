import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  iconColor: string
  textColor: string
  loadingColor: string
  opacityDisabled: string
  railColor: string
  railColorActive: string
  buttonBoxShadow: string
  buttonColor: string
  railBorderRadiusSmall: string
  railBorderRadiusMedium: string
  railBorderRadiusLarge: string
  buttonBorderRadiusSmall: string
  buttonBorderRadiusMedium: string
  buttonBorderRadiusLarge: string
  boxShadowFocus: string
  buttonHeightSmall: string
  buttonHeightMedium: string
  buttonHeightLarge: string
  buttonWidthSmall: string
  buttonWidthMedium: string
  buttonWidthLarge: string
  buttonWidthPressedSmall: string
  buttonWidthPressedMedium: string
  buttonWidthPressedLarge: string
  railHeightSmall: string
  railHeightMedium: string
  railHeightLarge: string
  railWidthSmall: string
  railWidthMedium: string
  railWidthLarge: string
}
export type SwitchThemeVars = ReturnType<typeof self>
declare const switchLight: Theme<'Switch', SwitchThemeVars>
export default switchLight
export type SwitchTheme = typeof switchLight
