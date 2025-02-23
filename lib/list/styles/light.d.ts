import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  textColor: string
  color: string
  colorHover: string
  colorModal: string
  colorHoverModal: string
  colorPopover: string
  colorHoverPopover: string
  borderColor: string
  borderColorModal: string
  borderColorPopover: string
  borderRadius: string
  fontSize: string
}
export type ListThemeVars = ReturnType<typeof self>
declare const listLight: Theme<'List', ListThemeVars>
export default listLight
export type ListTheme = typeof listLight
