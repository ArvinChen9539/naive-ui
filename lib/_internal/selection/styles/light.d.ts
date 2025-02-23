import type { ThemeCommonVars } from '../../../_styles/common'
declare const self: (vars: ThemeCommonVars) => {
  fontSizeTiny: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  heightTiny: string
  heightSmall: string
  heightMedium: string
  heightLarge: string
  borderRadius: string
  textColor: string
  textColorDisabled: string
  placeholderColor: string
  placeholderColorDisabled: string
  color: string
  colorDisabled: string
  colorActive: string
  border: string
  borderHover: string
  borderActive: string
  borderFocus: string
  boxShadowHover: string
  boxShadowActive: string
  boxShadowFocus: string
  caretColor: string
  arrowColor: string
  arrowColorDisabled: string
  loadingColor: string
  borderWarning: string
  borderHoverWarning: string
  borderActiveWarning: string
  borderFocusWarning: string
  boxShadowHoverWarning: string
  boxShadowActiveWarning: string
  boxShadowFocusWarning: string
  colorActiveWarning: string
  caretColorWarning: string
  borderError: string
  borderHoverError: string
  borderActiveError: string
  borderFocusError: string
  boxShadowHoverError: string
  boxShadowActiveError: string
  boxShadowFocusError: string
  colorActiveError: string
  caretColorError: string
  clearColor: string
  clearColorHover: string
  clearColorPressed: string
  paddingSingle: string
  paddingMultiple: string
  clearSize: string
  arrowSize: string
}
export type InternalSelectionThemeVars = ReturnType<typeof self>
declare const internalSelectionLight: import('../../../_mixins').Theme<
  'InternalSelection',
  {
    fontSizeTiny: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
    heightTiny: string
    heightSmall: string
    heightMedium: string
    heightLarge: string
    borderRadius: string
    textColor: string
    textColorDisabled: string
    placeholderColor: string
    placeholderColorDisabled: string
    color: string
    colorDisabled: string
    colorActive: string
    border: string
    borderHover: string
    borderActive: string
    borderFocus: string
    boxShadowHover: string
    boxShadowActive: string
    boxShadowFocus: string
    caretColor: string
    arrowColor: string
    arrowColorDisabled: string
    loadingColor: string
    borderWarning: string
    borderHoverWarning: string
    borderActiveWarning: string
    borderFocusWarning: string
    boxShadowHoverWarning: string
    boxShadowActiveWarning: string
    boxShadowFocusWarning: string
    colorActiveWarning: string
    caretColorWarning: string
    borderError: string
    borderHoverError: string
    borderActiveError: string
    borderFocusError: string
    boxShadowHoverError: string
    boxShadowActiveError: string
    boxShadowFocusError: string
    colorActiveError: string
    caretColorError: string
    clearColor: string
    clearColorHover: string
    clearColorPressed: string
    paddingSingle: string
    paddingMultiple: string
    clearSize: string
    arrowSize: string
  },
  {
    Popover: import('../../../_mixins').Theme<
      'Popover',
      {
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
      },
      any
    >
  }
>
export default internalSelectionLight
export type InternalSelectionTheme = typeof internalSelectionLight
