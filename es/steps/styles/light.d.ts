import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  stepHeaderFontWeight: string
  indicatorTextColorProcess: string
  indicatorTextColorWait: string
  indicatorTextColorFinish: string
  indicatorTextColorError: string
  indicatorBorderColorProcess: string
  indicatorBorderColorWait: string
  indicatorBorderColorFinish: string
  indicatorBorderColorError: string
  indicatorColorProcess: string
  indicatorColorWait: string
  indicatorColorFinish: string
  indicatorColorError: string
  splitorColorProcess: string
  splitorColorWait: string
  splitorColorFinish: string
  splitorColorError: string
  headerTextColorProcess: string
  headerTextColorWait: string
  headerTextColorFinish: string
  headerTextColorError: string
  descriptionTextColorProcess: string
  descriptionTextColorWait: string
  descriptionTextColorFinish: string
  descriptionTextColorError: string
  stepHeaderFontSizeSmall: string
  stepHeaderFontSizeMedium: string
  indicatorIndexFontSizeSmall: string
  indicatorIndexFontSizeMedium: string
  indicatorSizeSmall: string
  indicatorSizeMedium: string
  indicatorIconSizeSmall: string
  indicatorIconSizeMedium: string
}
export type StepsThemeVars = ReturnType<typeof self>
declare const stepsLight: Theme<'Steps', StepsThemeVars>
export default stepsLight
export type StepsTheme = typeof stepsLight
