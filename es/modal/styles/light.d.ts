import type { ThemeCommonVars } from '../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  color: string
  textColor: string
  boxShadow: string
}
export type ModalThemeVars = ReturnType<typeof self>
declare const modalLight: import('../../_mixins').Theme<
  'Modal',
  {
    color: string
    textColor: string
    boxShadow: string
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
    Dialog: import('../../_mixins').Theme<
      'Dialog',
      {
        fontSize: string
        lineHeight: string
        border: string
        titleTextColor: string
        textColor: string
        color: string
        closeColorHover: string
        closeColorPressed: string
        closeIconColor: string
        closeIconColorHover: string
        closeIconColorPressed: string
        closeBorderRadius: string
        iconColor: string
        iconColorInfo: string
        iconColorSuccess: string
        iconColorWarning: string
        iconColorError: string
        borderRadius: string
        titleFontWeight: string
        titleFontSize: string
        padding: string
        iconSize: string
        actionSpace: string
        contentMargin: string
        iconMargin: string
        iconMarginIconTop: string
        closeSize: string
        closeIconSize: string
        closeMargin: string
        closeMarginIconTop: string
      },
      {
        Button: import('../../_mixins').Theme<
          'Button',
          {
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadiusTiny: string
            borderRadiusSmall: string
            borderRadiusMedium: string
            borderRadiusLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            opacityDisabled: string
            colorOpacitySecondary: string
            colorOpacitySecondaryHover: string
            colorOpacitySecondaryPressed: string
            colorSecondary: string
            colorSecondaryHover: string
            colorSecondaryPressed: string
            colorTertiary: string
            colorTertiaryHover: string
            colorTertiaryPressed: string
            colorQuaternary: string
            colorQuaternaryHover: string
            colorQuaternaryPressed: string
            color: string
            colorHover: string
            colorPressed: string
            colorFocus: string
            colorDisabled: string
            textColor: string
            textColorTertiary: string
            textColorHover: string
            textColorPressed: string
            textColorFocus: string
            textColorDisabled: string
            textColorText: string
            textColorTextHover: string
            textColorTextPressed: string
            textColorTextFocus: string
            textColorTextDisabled: string
            textColorGhost: string
            textColorGhostHover: string
            textColorGhostPressed: string
            textColorGhostFocus: string
            textColorGhostDisabled: string
            border: string
            borderHover: string
            borderPressed: string
            borderFocus: string
            borderDisabled: string
            rippleColor: string
            colorPrimary: string
            colorHoverPrimary: string
            colorPressedPrimary: string
            colorFocusPrimary: string
            colorDisabledPrimary: string
            textColorPrimary: string
            textColorHoverPrimary: string
            textColorPressedPrimary: string
            textColorFocusPrimary: string
            textColorDisabledPrimary: string
            textColorTextPrimary: string
            textColorTextHoverPrimary: string
            textColorTextPressedPrimary: string
            textColorTextFocusPrimary: string
            textColorTextDisabledPrimary: string
            textColorGhostPrimary: string
            textColorGhostHoverPrimary: string
            textColorGhostPressedPrimary: string
            textColorGhostFocusPrimary: string
            textColorGhostDisabledPrimary: string
            borderPrimary: string
            borderHoverPrimary: string
            borderPressedPrimary: string
            borderFocusPrimary: string
            borderDisabledPrimary: string
            rippleColorPrimary: string
            colorInfo: string
            colorHoverInfo: string
            colorPressedInfo: string
            colorFocusInfo: string
            colorDisabledInfo: string
            textColorInfo: string
            textColorHoverInfo: string
            textColorPressedInfo: string
            textColorFocusInfo: string
            textColorDisabledInfo: string
            textColorTextInfo: string
            textColorTextHoverInfo: string
            textColorTextPressedInfo: string
            textColorTextFocusInfo: string
            textColorTextDisabledInfo: string
            textColorGhostInfo: string
            textColorGhostHoverInfo: string
            textColorGhostPressedInfo: string
            textColorGhostFocusInfo: string
            textColorGhostDisabledInfo: string
            borderInfo: string
            borderHoverInfo: string
            borderPressedInfo: string
            borderFocusInfo: string
            borderDisabledInfo: string
            rippleColorInfo: string
            colorSuccess: string
            colorHoverSuccess: string
            colorPressedSuccess: string
            colorFocusSuccess: string
            colorDisabledSuccess: string
            textColorSuccess: string
            textColorHoverSuccess: string
            textColorPressedSuccess: string
            textColorFocusSuccess: string
            textColorDisabledSuccess: string
            textColorTextSuccess: string
            textColorTextHoverSuccess: string
            textColorTextPressedSuccess: string
            textColorTextFocusSuccess: string
            textColorTextDisabledSuccess: string
            textColorGhostSuccess: string
            textColorGhostHoverSuccess: string
            textColorGhostPressedSuccess: string
            textColorGhostFocusSuccess: string
            textColorGhostDisabledSuccess: string
            borderSuccess: string
            borderHoverSuccess: string
            borderPressedSuccess: string
            borderFocusSuccess: string
            borderDisabledSuccess: string
            rippleColorSuccess: string
            colorWarning: string
            colorHoverWarning: string
            colorPressedWarning: string
            colorFocusWarning: string
            colorDisabledWarning: string
            textColorWarning: string
            textColorHoverWarning: string
            textColorPressedWarning: string
            textColorFocusWarning: string
            textColorDisabledWarning: string
            textColorTextWarning: string
            textColorTextHoverWarning: string
            textColorTextPressedWarning: string
            textColorTextFocusWarning: string
            textColorTextDisabledWarning: string
            textColorGhostWarning: string
            textColorGhostHoverWarning: string
            textColorGhostPressedWarning: string
            textColorGhostFocusWarning: string
            textColorGhostDisabledWarning: string
            borderWarning: string
            borderHoverWarning: string
            borderPressedWarning: string
            borderFocusWarning: string
            borderDisabledWarning: string
            rippleColorWarning: string
            colorError: string
            colorHoverError: string
            colorPressedError: string
            colorFocusError: string
            colorDisabledError: string
            textColorError: string
            textColorHoverError: string
            textColorPressedError: string
            textColorFocusError: string
            textColorDisabledError: string
            textColorTextError: string
            textColorTextHoverError: string
            textColorTextPressedError: string
            textColorTextFocusError: string
            textColorTextDisabledError: string
            textColorGhostError: string
            textColorGhostHoverError: string
            textColorGhostPressedError: string
            textColorGhostFocusError: string
            textColorGhostDisabledError: string
            borderError: string
            borderHoverError: string
            borderPressedError: string
            borderFocusError: string
            borderDisabledError: string
            rippleColorError: string
            waveOpacity: string
            fontWeight: string
            fontWeightStrong: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingRoundTiny: string
            paddingRoundSmall: string
            paddingRoundMedium: string
            paddingRoundLarge: string
            iconMarginTiny: string
            iconMarginSmall: string
            iconMarginMedium: string
            iconMarginLarge: string
            iconSizeTiny: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            rippleDuration: string
          },
          any
        >
      }
    >
    Card: import('../../_mixins').Theme<
      'Card',
      {
        lineHeight: string
        color: string
        colorModal: string
        colorPopover: string
        colorTarget: string
        colorEmbedded: string
        colorEmbeddedModal: string
        colorEmbeddedPopover: string
        textColor: string
        titleTextColor: string
        borderColor: string
        actionColor: string
        titleFontWeight: string
        closeColorHover: string
        closeColorPressed: string
        closeBorderRadius: string
        closeIconColor: string
        closeIconColorHover: string
        closeIconColorPressed: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        boxShadow: string
        borderRadius: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        paddingHuge: string
        titleFontSizeSmall: string
        titleFontSizeMedium: string
        titleFontSizeLarge: string
        titleFontSizeHuge: string
        closeIconSize: string
        closeSize: string
      },
      any
    >
  }
>
export default modalLight
export type ModalTheme = typeof modalLight
