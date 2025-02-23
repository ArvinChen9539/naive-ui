import type { ThemeCommonVars } from '../../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  optionFontSizeSmall: string
  optionFontSizeMedium: string
  optionFontSizeLarge: string
  optionFontSizeHuge: string
  optionHeightSmall: string
  optionHeightMedium: string
  optionHeightLarge: string
  optionHeightHuge: string
  borderRadius: string
  color: string
  groupHeaderTextColor: string
  actionDividerColor: string
  optionTextColor: string
  optionTextColorPressed: string
  optionTextColorDisabled: string
  optionTextColorActive: string
  optionOpacityDisabled: string
  optionCheckColor: string
  optionColorPending: string
  optionColorActive: string
  optionColorActivePending: string
  actionTextColor: string
  loadingColor: string
  height: string
  paddingSmall: string
  paddingMedium: string
  paddingLarge: string
  paddingHuge: string
  optionPaddingSmall: string
  optionPaddingMedium: string
  optionPaddingLarge: string
  optionPaddingHuge: string
  loadingSize: string
}
export type InternalSelectMenuThemeVars = ReturnType<typeof self>
declare const internalSelectMenuLight: import('../../../_mixins').Theme<
  'InternalSelectMenu',
  {
    optionFontSizeSmall: string
    optionFontSizeMedium: string
    optionFontSizeLarge: string
    optionFontSizeHuge: string
    optionHeightSmall: string
    optionHeightMedium: string
    optionHeightLarge: string
    optionHeightHuge: string
    borderRadius: string
    color: string
    groupHeaderTextColor: string
    actionDividerColor: string
    optionTextColor: string
    optionTextColorPressed: string
    optionTextColorDisabled: string
    optionTextColorActive: string
    optionOpacityDisabled: string
    optionCheckColor: string
    optionColorPending: string
    optionColorActive: string
    optionColorActivePending: string
    actionTextColor: string
    loadingColor: string
    height: string
    paddingSmall: string
    paddingMedium: string
    paddingLarge: string
    paddingHuge: string
    optionPaddingSmall: string
    optionPaddingMedium: string
    optionPaddingLarge: string
    optionPaddingHuge: string
    loadingSize: string
  },
  {
    Scrollbar: import('../../../_mixins').Theme<
      'Scrollbar',
      {
        color: string
        colorHover: string
      },
      any
    >
    Empty: import('../../../_mixins').Theme<
      'Empty',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        textColor: string
        iconColor: string
        extraTextColor: string
        iconSizeSmall: string
        iconSizeMedium: string
        iconSizeLarge: string
        iconSizeHuge: string
      },
      any
    >
  }
>
export default internalSelectMenuLight
export type InternalSelectMenuTheme = typeof internalSelectMenuLight
