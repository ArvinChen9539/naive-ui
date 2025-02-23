import type { ThemeCommonVars } from '../../../_styles/common'
import type { Theme } from '../../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  color: string
  colorHover: string
}
export type ScrollbarThemeVars = ReturnType<typeof self>
declare const scrollbarLight: Theme<'Scrollbar', ScrollbarThemeVars>
export default scrollbarLight
export type ScrollbarTheme = typeof scrollbarLight
