import type { ThemeCommonVars } from '../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  optionHeightSmall: string
  optionHeightMedium: string
  optionHeightLarge: string
  optionHeightHuge: string
  borderRadius: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  fontSizeHuge: string
  optionTextColor: string
  optionTextColorHover: string
  optionTextColorActive: string
  optionTextColorChildActive: string
  color: string
  dividerColor: string
  suffixColor: string
  prefixColor: string
  optionColorHover: string
  optionColorActive: string
  groupHeaderTextColor: string
  optionTextColorInverted: string
  optionTextColorHoverInverted: string
  optionTextColorActiveInverted: string
  optionTextColorChildActiveInverted: string
  colorInverted: string
  dividerColorInverted: string
  suffixColorInverted: string
  prefixColorInverted: string
  optionColorHoverInverted: string
  optionColorActiveInverted: string
  groupHeaderTextColorInverted: string
  optionOpacityDisabled: string
  padding: string
  optionIconSizeSmall: string
  optionIconSizeMedium: string
  optionIconSizeLarge: string
  optionIconSizeHuge: string
  optionSuffixWidthSmall: string
  optionSuffixWidthMedium: string
  optionSuffixWidthLarge: string
  optionSuffixWidthHuge: string
  optionIconSuffixWidthSmall: string
  optionIconSuffixWidthMedium: string
  optionIconSuffixWidthLarge: string
  optionIconSuffixWidthHuge: string
  optionPrefixWidthSmall: string
  optionPrefixWidthMedium: string
  optionPrefixWidthLarge: string
  optionPrefixWidthHuge: string
  optionIconPrefixWidthSmall: string
  optionIconPrefixWidthMedium: string
  optionIconPrefixWidthLarge: string
  optionIconPrefixWidthHuge: string
}
export type DropdownThemeVars = ReturnType<typeof self>
declare const dropdownLight: import('../../_mixins/use-theme').Theme<
  'Dropdown',
  {
    optionHeightSmall: string
    optionHeightMedium: string
    optionHeightLarge: string
    optionHeightHuge: string
    borderRadius: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
    fontSizeHuge: string
    optionTextColor: string
    optionTextColorHover: string
    optionTextColorActive: string
    optionTextColorChildActive: string
    color: string
    dividerColor: string
    suffixColor: string
    prefixColor: string
    optionColorHover: string
    optionColorActive: string
    groupHeaderTextColor: string
    optionTextColorInverted: string
    optionTextColorHoverInverted: string
    optionTextColorActiveInverted: string
    optionTextColorChildActiveInverted: string
    colorInverted: string
    dividerColorInverted: string
    suffixColorInverted: string
    prefixColorInverted: string
    optionColorHoverInverted: string
    optionColorActiveInverted: string
    groupHeaderTextColorInverted: string
    optionOpacityDisabled: string
    padding: string
    optionIconSizeSmall: string
    optionIconSizeMedium: string
    optionIconSizeLarge: string
    optionIconSizeHuge: string
    optionSuffixWidthSmall: string
    optionSuffixWidthMedium: string
    optionSuffixWidthLarge: string
    optionSuffixWidthHuge: string
    optionIconSuffixWidthSmall: string
    optionIconSuffixWidthMedium: string
    optionIconSuffixWidthLarge: string
    optionIconSuffixWidthHuge: string
    optionPrefixWidthSmall: string
    optionPrefixWidthMedium: string
    optionPrefixWidthLarge: string
    optionPrefixWidthHuge: string
    optionIconPrefixWidthSmall: string
    optionIconPrefixWidthMedium: string
    optionIconPrefixWidthLarge: string
    optionIconPrefixWidthHuge: string
  },
  {
    Popover: import('../../_mixins/use-theme').Theme<
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
export type DropdownTheme = typeof dropdownLight
export default dropdownLight
