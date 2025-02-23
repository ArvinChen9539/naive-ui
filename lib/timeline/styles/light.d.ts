import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  contentFontSize: string
  titleFontWeight: string
  circleBorder: string
  circleBorderInfo: string
  circleBorderError: string
  circleBorderSuccess: string
  circleBorderWarning: string
  iconColor: string
  iconColorInfo: string
  iconColorError: string
  iconColorSuccess: string
  iconColorWarning: string
  titleTextColor: string
  contentTextColor: string
  metaTextColor: string
  lineColor: string
  titleMarginMedium: string
  titleMarginLarge: string
  titleFontSizeMedium: string
  titleFontSizeLarge: string
  iconSizeMedium: string
  iconSizeLarge: string
}
export type TimelineThemeVars = ReturnType<typeof self>
declare const timelineLight: Theme<'Timeline', TimelineThemeVars>
export default timelineLight
export type TimelineTheme = typeof timelineLight
