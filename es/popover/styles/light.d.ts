import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins/use-theme'
export declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  borderRadius: string
  color: string
  dividerColor: string
  textColor: string
  boxShadow: string
  space: string
  spaceArrow: string
  arrowOffset: string
  arrowOffsetVertical: string
  arrowHeight: string
  padding: string
}
export type PopoverThemeVars = ReturnType<typeof self>
declare const popoverLight: Theme<'Popover', PopoverThemeVars>
export type PopoverTheme = typeof popoverLight
export default popoverLight
