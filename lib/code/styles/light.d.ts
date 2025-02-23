import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins/use-theme'
declare const self: (vars: ThemeCommonVars) => {
  textColor: string
  fontSize: string
  fontWeightStrong: string
  'mono-3': string
  'hue-1': string
  'hue-2': string
  'hue-3': string
  'hue-4': string
  'hue-5': string
  'hue-5-2': string
  'hue-6': string
  'hue-6-2': string
  lineNumberTextColor: string
}
export type CodeThemeVars = ReturnType<typeof self>
declare const codeLight: Theme<'Code', CodeThemeVars>
export default codeLight
export type CodeTheme = typeof codeLight
