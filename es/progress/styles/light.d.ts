import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins/use-theme'
export declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  fontSizeCircle: string
  fontWeightCircle: string
  railColor: string
  railHeight: string
  iconSizeCircle: string
  iconSizeLine: string
  iconColor: string
  iconColorInfo: string
  iconColorSuccess: string
  iconColorWarning: string
  iconColorError: string
  textColorCircle: string
  textColorLineInner: string
  textColorLineOuter: string
  fillColor: string
  fillColorInfo: string
  fillColorSuccess: string
  fillColorWarning: string
  fillColorError: string
  lineBgProcessing: string
}
export type ProgressThemeVars = ReturnType<typeof self>
declare const progressLight: Theme<'Progress', ProgressThemeVars>
export default progressLight
export type ProgressTheme = typeof progressLight
