import type { ThemeCommonVars } from '../../_styles/common'
export declare function self(vars: ThemeCommonVars): {
  menuBoxShadow: string
}
declare const autoCompleteLight: import('../../_mixins').Theme<
  'AutoComplete',
  {
    menuBoxShadow: string
  },
  {
    InternalSelectMenu: import('../../_mixins').Theme<
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
        Empty: import('../../_mixins').Theme<
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
    Input: import('../../_mixins').Theme<
      'Input',
      {
        countTextColorDisabled: string
        countTextColor: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        lineHeightTextarea: string
        borderRadius: string
        iconSize: string
        groupLabelColor: string
        groupLabelTextColor: string
        textColor: string
        textColorDisabled: string
        textDecorationColor: string
        caretColor: string
        placeholderColor: string
        placeholderColorDisabled: string
        color: string
        colorDisabled: string
        colorFocus: string
        groupLabelBorder: string
        border: string
        borderHover: string
        borderDisabled: string
        borderFocus: string
        boxShadowFocus: string
        loadingColor: string
        loadingColorWarning: string
        borderWarning: string
        borderHoverWarning: string
        colorFocusWarning: string
        borderFocusWarning: string
        boxShadowFocusWarning: string
        caretColorWarning: string
        loadingColorError: string
        borderError: string
        borderHoverError: string
        colorFocusError: string
        borderFocusError: string
        boxShadowFocusError: string
        caretColorError: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        iconColor: string
        iconColorDisabled: string
        iconColorHover: string
        iconColorPressed: string
        suffixTextColor: string
        paddingTiny: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        clearSize: string
      },
      any
    >
  }
>
export default autoCompleteLight
export type AutoCompleteTheme = typeof autoCompleteLight
export type AutoCompleteThemeVars = ReturnType<typeof self>
