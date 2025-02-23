import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  labelLineHeight: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  borderRadius: string
  color: string
  colorChecked: string
  colorDisabled: string
  colorDisabledChecked: string
  colorTableHeader: string
  colorTableHeaderModal: string
  colorTableHeaderPopover: string
  checkMarkColor: string
  checkMarkColorDisabled: string
  checkMarkColorDisabledChecked: string
  border: string
  borderDisabled: string
  borderDisabledChecked: string
  borderChecked: string
  borderFocus: string
  boxShadowFocus: string
  textColor: string
  textColorDisabled: string
  sizeSmall: string
  sizeMedium: string
  sizeLarge: string
  labelPadding: string
  labelFontWeight: string
}
export type CheckboxThemeVars = ReturnType<typeof self>
declare const checkboxLight: Theme<'Checkbox', CheckboxThemeVars>
export default checkboxLight
export type CheckboxTheme = typeof checkboxLight
