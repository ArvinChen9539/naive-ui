import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  color: string
  textColor: string
  iconColor: string
  iconColorHover: string
  iconColorPressed: string
  boxShadow: string
  boxShadowHover: string
  boxShadowPressed: string
  width: string
  height: string
  borderRadius: string
  iconSize: string
}
export type BackTopThemeVars = ReturnType<typeof self>
declare const backTopLight: Theme<'BackTop', BackTopThemeVars>
export default backTopLight
export type BackTopTheme = typeof backTopLight
