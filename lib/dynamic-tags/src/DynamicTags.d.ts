import { PropType, CSSProperties, VNodeChild } from 'vue'
import type { InputProps } from '../../input'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type { OnUpdateValue, DynamicTagsOption, OnCreate } from './interface'
export declare const dynamicTagsProps: {
  size: {
    type: PropType<'small' | 'medium' | 'large'>
    default: string
  }
  closable: {
    type: BooleanConstructor
    default: boolean
  }
  defaultValue: {
    type: PropType<(string | DynamicTagsOption)[]>
    default: () => never[]
  }
  value: PropType<(string | DynamicTagsOption)[]>
  inputStyle: PropType<string | CSSProperties>
  inputProps: PropType<InputProps>
  max: PropType<number>
  tagStyle: PropType<string | CSSProperties>
  renderTag: PropType<
    | ((tag: string, index: number) => VNodeChild)
    | ((tag: DynamicTagsOption, index: number) => VNodeChild)
  >
  onCreate: {
    type: PropType<OnCreate>
    default: (label: string) => string
  }
  'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
  color: PropType<import('../../tag/src/common-props').TagColor>
  type: {
    readonly type: PropType<
      'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
    >
    readonly default: 'default'
  }
  round: BooleanConstructor
  disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'DynamicTags',
      {
        inputWidth: string
      },
      {
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
        Tag: import('../../_mixins').Theme<
          'Tag',
          {
            closeBorderRadius: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontWeightStrong: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            colorBordered: string
            closeIconColor: string
            closeIconColorHover: string
            closeIconColorPressed: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            colorBorderedPrimary: string
            closeIconColorPrimary: string
            closeIconColorHoverPrimary: string
            closeIconColorPressedPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            colorBorderedInfo: string
            closeIconColorInfo: string
            closeIconColorHoverInfo: string
            closeIconColorPressedInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            colorBorderedSuccess: string
            closeIconColorSuccess: string
            closeIconColorHoverSuccess: string
            closeIconColorPressedSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            colorBorderedWarning: string
            closeIconColorWarning: string
            closeIconColorHoverWarning: string
            closeIconColorPressedWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            colorBorderedError: string
            closeIconColorError: string
            closeIconColorHoverError: string
            closeIconColorPressedError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeIconSizeTiny: string
            closeIconSizeSmall: string
            closeIconSizeMedium: string
            closeIconSizeLarge: string
            closeSizeTiny: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
        Space: import('../../_mixins').Theme<
          'Space',
          {
            gapSmall: string
            gapMedium: string
            gapLarge: string
          },
          any
        >
      }
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DynamicTags',
        {
          inputWidth: string
        },
        {
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
          Tag: import('../../_mixins').Theme<
            'Tag',
            {
              closeBorderRadius: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontWeightStrong: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              colorBordered: string
              closeIconColor: string
              closeIconColorHover: string
              closeIconColorPressed: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              colorBorderedPrimary: string
              closeIconColorPrimary: string
              closeIconColorHoverPrimary: string
              closeIconColorPressedPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              colorBorderedInfo: string
              closeIconColorInfo: string
              closeIconColorHoverInfo: string
              closeIconColorPressedInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              colorBorderedSuccess: string
              closeIconColorSuccess: string
              closeIconColorHoverSuccess: string
              closeIconColorPressedSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              colorBorderedWarning: string
              closeIconColorWarning: string
              closeIconColorHoverWarning: string
              closeIconColorPressedWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              colorBorderedError: string
              closeIconColorError: string
              closeIconColorHoverError: string
              closeIconColorPressedError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeIconSizeTiny: string
              closeIconSizeSmall: string
              closeIconSizeMedium: string
              closeIconSizeLarge: string
              closeSizeTiny: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
          Space: import('../../_mixins').Theme<
            'Space',
            {
              gapSmall: string
              gapMedium: string
              gapLarge: string
            },
            any
          >
        }
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DynamicTags',
        {
          inputWidth: string
        },
        {
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
          Tag: import('../../_mixins').Theme<
            'Tag',
            {
              closeBorderRadius: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontWeightStrong: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              colorBordered: string
              closeIconColor: string
              closeIconColorHover: string
              closeIconColorPressed: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              colorBorderedPrimary: string
              closeIconColorPrimary: string
              closeIconColorHoverPrimary: string
              closeIconColorPressedPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              colorBorderedInfo: string
              closeIconColorInfo: string
              closeIconColorHoverInfo: string
              closeIconColorPressedInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              colorBorderedSuccess: string
              closeIconColorSuccess: string
              closeIconColorHoverSuccess: string
              closeIconColorPressedSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              colorBorderedWarning: string
              closeIconColorWarning: string
              closeIconColorHoverWarning: string
              closeIconColorPressedWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              colorBorderedError: string
              closeIconColorError: string
              closeIconColorHoverError: string
              closeIconColorPressedError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeIconSizeTiny: string
              closeIconSizeSmall: string
              closeIconSizeMedium: string
              closeIconSizeLarge: string
              closeSizeTiny: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
          Space: import('../../_mixins').Theme<
            'Space',
            {
              gapSmall: string
              gapMedium: string
              gapLarge: string
            },
            any
          >
        }
      >
    >
  >
}
export type DynamicTagsProps = ExtractPublicPropTypes<typeof dynamicTagsProps>
declare const _default: import('vue').DefineComponent<
  {
    size: {
      type: PropType<'small' | 'medium' | 'large'>
      default: string
    }
    closable: {
      type: BooleanConstructor
      default: boolean
    }
    defaultValue: {
      type: PropType<(string | DynamicTagsOption)[]>
      default: () => never[]
    }
    value: PropType<(string | DynamicTagsOption)[]>
    inputStyle: PropType<string | CSSProperties>
    inputProps: PropType<InputProps>
    max: PropType<number>
    tagStyle: PropType<string | CSSProperties>
    renderTag: PropType<
      | ((tag: string, index: number) => VNodeChild)
      | ((tag: DynamicTagsOption, index: number) => VNodeChild)
    >
    onCreate: {
      type: PropType<OnCreate>
      default: (label: string) => string
    }
    'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
    color: PropType<import('../../tag/src/common-props').TagColor>
    type: {
      readonly type: PropType<
        'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
      >
      readonly default: 'default'
    }
    round: BooleanConstructor
    disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'DynamicTags',
        {
          inputWidth: string
        },
        {
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
          Tag: import('../../_mixins').Theme<
            'Tag',
            {
              closeBorderRadius: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontWeightStrong: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              colorBordered: string
              closeIconColor: string
              closeIconColorHover: string
              closeIconColorPressed: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              colorBorderedPrimary: string
              closeIconColorPrimary: string
              closeIconColorHoverPrimary: string
              closeIconColorPressedPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              colorBorderedInfo: string
              closeIconColorInfo: string
              closeIconColorHoverInfo: string
              closeIconColorPressedInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              colorBorderedSuccess: string
              closeIconColorSuccess: string
              closeIconColorHoverSuccess: string
              closeIconColorPressedSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              colorBorderedWarning: string
              closeIconColorWarning: string
              closeIconColorHoverWarning: string
              closeIconColorPressedWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              colorBorderedError: string
              closeIconColorError: string
              closeIconColorHoverError: string
              closeIconColorPressedError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeIconSizeTiny: string
              closeIconSizeSmall: string
              closeIconSizeMedium: string
              closeIconSizeLarge: string
              closeSizeTiny: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
          Space: import('../../_mixins').Theme<
            'Space',
            {
              gapSmall: string
              gapMedium: string
              gapLarge: string
            },
            any
          >
        }
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DynamicTags',
          {
            inputWidth: string
          },
          {
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
            Tag: import('../../_mixins').Theme<
              'Tag',
              {
                closeBorderRadius: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                opacityDisabled: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontWeightStrong: string
                textColorCheckable: string
                textColorHoverCheckable: string
                textColorPressedCheckable: string
                textColorChecked: string
                colorCheckable: string
                colorHoverCheckable: string
                colorPressedCheckable: string
                colorChecked: string
                colorCheckedHover: string
                colorCheckedPressed: string
                border: string
                textColor: string
                color: string
                colorBordered: string
                closeIconColor: string
                closeIconColorHover: string
                closeIconColorPressed: string
                closeColorHover: string
                closeColorPressed: string
                borderPrimary: string
                textColorPrimary: string
                colorPrimary: string
                colorBorderedPrimary: string
                closeIconColorPrimary: string
                closeIconColorHoverPrimary: string
                closeIconColorPressedPrimary: string
                closeColorHoverPrimary: string
                closeColorPressedPrimary: string
                borderInfo: string
                textColorInfo: string
                colorInfo: string
                colorBorderedInfo: string
                closeIconColorInfo: string
                closeIconColorHoverInfo: string
                closeIconColorPressedInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                textColorSuccess: string
                colorSuccess: string
                colorBorderedSuccess: string
                closeIconColorSuccess: string
                closeIconColorHoverSuccess: string
                closeIconColorPressedSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                textColorWarning: string
                colorWarning: string
                colorBorderedWarning: string
                closeIconColorWarning: string
                closeIconColorHoverWarning: string
                closeIconColorPressedWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                textColorError: string
                colorError: string
                colorBorderedError: string
                closeIconColorError: string
                closeIconColorHoverError: string
                closeIconColorPressedError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeIconSizeTiny: string
                closeIconSizeSmall: string
                closeIconSizeMedium: string
                closeIconSizeLarge: string
                closeSizeTiny: string
                closeSizeSmall: string
                closeSizeMedium: string
                closeSizeLarge: string
                padding: string
                closeMargin: string
                closeMarginRtl: string
              },
              any
            >
            Space: import('../../_mixins').Theme<
              'Space',
              {
                gapSmall: string
                gapMedium: string
                gapLarge: string
              },
              any
            >
          }
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DynamicTags',
          {
            inputWidth: string
          },
          {
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
            Tag: import('../../_mixins').Theme<
              'Tag',
              {
                closeBorderRadius: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                opacityDisabled: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontWeightStrong: string
                textColorCheckable: string
                textColorHoverCheckable: string
                textColorPressedCheckable: string
                textColorChecked: string
                colorCheckable: string
                colorHoverCheckable: string
                colorPressedCheckable: string
                colorChecked: string
                colorCheckedHover: string
                colorCheckedPressed: string
                border: string
                textColor: string
                color: string
                colorBordered: string
                closeIconColor: string
                closeIconColorHover: string
                closeIconColorPressed: string
                closeColorHover: string
                closeColorPressed: string
                borderPrimary: string
                textColorPrimary: string
                colorPrimary: string
                colorBorderedPrimary: string
                closeIconColorPrimary: string
                closeIconColorHoverPrimary: string
                closeIconColorPressedPrimary: string
                closeColorHoverPrimary: string
                closeColorPressedPrimary: string
                borderInfo: string
                textColorInfo: string
                colorInfo: string
                colorBorderedInfo: string
                closeIconColorInfo: string
                closeIconColorHoverInfo: string
                closeIconColorPressedInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                textColorSuccess: string
                colorSuccess: string
                colorBorderedSuccess: string
                closeIconColorSuccess: string
                closeIconColorHoverSuccess: string
                closeIconColorPressedSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                textColorWarning: string
                colorWarning: string
                colorBorderedWarning: string
                closeIconColorWarning: string
                closeIconColorHoverWarning: string
                closeIconColorPressedWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                textColorError: string
                colorError: string
                colorBorderedError: string
                closeIconColorError: string
                closeIconColorHoverError: string
                closeIconColorPressedError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeIconSizeTiny: string
                closeIconSizeSmall: string
                closeIconSizeMedium: string
                closeIconSizeLarge: string
                closeSizeTiny: string
                closeSizeSmall: string
                closeSizeMedium: string
                closeSizeLarge: string
                padding: string
                closeMargin: string
                closeMarginRtl: string
              },
              any
            >
            Space: import('../../_mixins').Theme<
              'Space',
              {
                gapSmall: string
                gapMedium: string
                gapLarge: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    inputInstRef: import('vue').Ref<{
      wrapperElRef: HTMLElement | null
      textareaElRef: HTMLTextAreaElement | null
      inputElRef: HTMLInputElement | null
      isCompositing: boolean
      blur: () => void
      focus: () => void
      select: () => void
      activate: () => void
      deactivate: () => void
      scrollTo: (options: ScrollToOptions) => void
    } | null>
    localizedAdd: import('vue').ComputedRef<string>
    inputSize: import('vue').ComputedRef<'small' | 'medium' | 'tiny'>
    inputValue: import('vue').Ref<string>
    showInput: import('vue').Ref<boolean>
    inputForceFocused: import('vue').Ref<boolean>
    mergedValue: import('vue').ComputedRef<
      (
        | string
        | {
            label: string
            value: string
          }
      )[]
    >
    mergedDisabled: import('vue').ComputedRef<boolean>
    triggerDisabled: import('vue').ComputedRef<boolean>
    handleInputKeyUp: (e: KeyboardEvent) => void
    handleAddClick: () => void
    handleInputBlur: () => void
    handleCloseClick: (index: number) => void
    handleInputConfirm: (externalValue?: string) => void
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeIconColor: string
        closeIconColorHover: string
        closeIconColorPressed: string
        closeColorHover: string
        closeColorPressed: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeMini: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightMini: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        name: 'common'
      }
      self: {
        inputWidth: string
      }
      peers: {
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
        Tag: import('../../_mixins').Theme<
          'Tag',
          {
            closeBorderRadius: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontWeightStrong: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            colorBordered: string
            closeIconColor: string
            closeIconColorHover: string
            closeIconColorPressed: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            colorBorderedPrimary: string
            closeIconColorPrimary: string
            closeIconColorHoverPrimary: string
            closeIconColorPressedPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            colorBorderedInfo: string
            closeIconColorInfo: string
            closeIconColorHoverInfo: string
            closeIconColorPressedInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            colorBorderedSuccess: string
            closeIconColorSuccess: string
            closeIconColorHoverSuccess: string
            closeIconColorPressedSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            colorBorderedWarning: string
            closeIconColorWarning: string
            closeIconColorHoverWarning: string
            closeIconColorPressedWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            colorBorderedError: string
            closeIconColorError: string
            closeIconColorHoverError: string
            closeIconColorPressedError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeIconSizeTiny: string
            closeIconSizeSmall: string
            closeIconSizeMedium: string
            closeIconSizeLarge: string
            closeSizeTiny: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
        Space: import('../../_mixins').Theme<
          'Space',
          {
            gapSmall: string
            gapMedium: string
            gapLarge: string
          },
          any
        >
      }
      peerOverrides: {
        Input?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Button?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Tag?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Space?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    cssVars:
      | import('vue').ComputedRef<{
          '--n-input-width': string
        }>
      | undefined
    themeClass: import('vue').Ref<string> | undefined
    onRender: (() => void) | undefined
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      size: {
        type: PropType<'small' | 'medium' | 'large'>
        default: string
      }
      closable: {
        type: BooleanConstructor
        default: boolean
      }
      defaultValue: {
        type: PropType<(string | DynamicTagsOption)[]>
        default: () => never[]
      }
      value: PropType<(string | DynamicTagsOption)[]>
      inputStyle: PropType<string | CSSProperties>
      inputProps: PropType<InputProps>
      max: PropType<number>
      tagStyle: PropType<string | CSSProperties>
      renderTag: PropType<
        | ((tag: string, index: number) => VNodeChild)
        | ((tag: DynamicTagsOption, index: number) => VNodeChild)
      >
      onCreate: {
        type: PropType<OnCreate>
        default: (label: string) => string
      }
      'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
      onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
      onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
      color: PropType<import('../../tag/src/common-props').TagColor>
      type: {
        readonly type: PropType<
          'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
        >
        readonly default: 'default'
      }
      round: BooleanConstructor
      disabled: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      theme: PropType<
        import('../../_mixins').Theme<
          'DynamicTags',
          {
            inputWidth: string
          },
          {
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
            Tag: import('../../_mixins').Theme<
              'Tag',
              {
                closeBorderRadius: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                opacityDisabled: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontWeightStrong: string
                textColorCheckable: string
                textColorHoverCheckable: string
                textColorPressedCheckable: string
                textColorChecked: string
                colorCheckable: string
                colorHoverCheckable: string
                colorPressedCheckable: string
                colorChecked: string
                colorCheckedHover: string
                colorCheckedPressed: string
                border: string
                textColor: string
                color: string
                colorBordered: string
                closeIconColor: string
                closeIconColorHover: string
                closeIconColorPressed: string
                closeColorHover: string
                closeColorPressed: string
                borderPrimary: string
                textColorPrimary: string
                colorPrimary: string
                colorBorderedPrimary: string
                closeIconColorPrimary: string
                closeIconColorHoverPrimary: string
                closeIconColorPressedPrimary: string
                closeColorHoverPrimary: string
                closeColorPressedPrimary: string
                borderInfo: string
                textColorInfo: string
                colorInfo: string
                colorBorderedInfo: string
                closeIconColorInfo: string
                closeIconColorHoverInfo: string
                closeIconColorPressedInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                textColorSuccess: string
                colorSuccess: string
                colorBorderedSuccess: string
                closeIconColorSuccess: string
                closeIconColorHoverSuccess: string
                closeIconColorPressedSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                textColorWarning: string
                colorWarning: string
                colorBorderedWarning: string
                closeIconColorWarning: string
                closeIconColorHoverWarning: string
                closeIconColorPressedWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                textColorError: string
                colorError: string
                colorBorderedError: string
                closeIconColorError: string
                closeIconColorHoverError: string
                closeIconColorPressedError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeIconSizeTiny: string
                closeIconSizeSmall: string
                closeIconSizeMedium: string
                closeIconSizeLarge: string
                closeSizeTiny: string
                closeSizeSmall: string
                closeSizeMedium: string
                closeSizeLarge: string
                padding: string
                closeMargin: string
                closeMarginRtl: string
              },
              any
            >
            Space: import('../../_mixins').Theme<
              'Space',
              {
                gapSmall: string
                gapMedium: string
                gapLarge: string
              },
              any
            >
          }
        >
      >
      themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'DynamicTags',
            {
              inputWidth: string
            },
            {
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
              Tag: import('../../_mixins').Theme<
                'Tag',
                {
                  closeBorderRadius: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  borderRadius: string
                  opacityDisabled: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  fontWeightStrong: string
                  textColorCheckable: string
                  textColorHoverCheckable: string
                  textColorPressedCheckable: string
                  textColorChecked: string
                  colorCheckable: string
                  colorHoverCheckable: string
                  colorPressedCheckable: string
                  colorChecked: string
                  colorCheckedHover: string
                  colorCheckedPressed: string
                  border: string
                  textColor: string
                  color: string
                  colorBordered: string
                  closeIconColor: string
                  closeIconColorHover: string
                  closeIconColorPressed: string
                  closeColorHover: string
                  closeColorPressed: string
                  borderPrimary: string
                  textColorPrimary: string
                  colorPrimary: string
                  colorBorderedPrimary: string
                  closeIconColorPrimary: string
                  closeIconColorHoverPrimary: string
                  closeIconColorPressedPrimary: string
                  closeColorHoverPrimary: string
                  closeColorPressedPrimary: string
                  borderInfo: string
                  textColorInfo: string
                  colorInfo: string
                  colorBorderedInfo: string
                  closeIconColorInfo: string
                  closeIconColorHoverInfo: string
                  closeIconColorPressedInfo: string
                  closeColorHoverInfo: string
                  closeColorPressedInfo: string
                  borderSuccess: string
                  textColorSuccess: string
                  colorSuccess: string
                  colorBorderedSuccess: string
                  closeIconColorSuccess: string
                  closeIconColorHoverSuccess: string
                  closeIconColorPressedSuccess: string
                  closeColorHoverSuccess: string
                  closeColorPressedSuccess: string
                  borderWarning: string
                  textColorWarning: string
                  colorWarning: string
                  colorBorderedWarning: string
                  closeIconColorWarning: string
                  closeIconColorHoverWarning: string
                  closeIconColorPressedWarning: string
                  closeColorHoverWarning: string
                  closeColorPressedWarning: string
                  borderError: string
                  textColorError: string
                  colorError: string
                  colorBorderedError: string
                  closeIconColorError: string
                  closeIconColorHoverError: string
                  closeIconColorPressedError: string
                  closeColorHoverError: string
                  closeColorPressedError: string
                  closeIconSizeTiny: string
                  closeIconSizeSmall: string
                  closeIconSizeMedium: string
                  closeIconSizeLarge: string
                  closeSizeTiny: string
                  closeSizeSmall: string
                  closeSizeMedium: string
                  closeSizeLarge: string
                  padding: string
                  closeMargin: string
                  closeMarginRtl: string
                },
                any
              >
              Space: import('../../_mixins').Theme<
                'Space',
                {
                  gapSmall: string
                  gapMedium: string
                  gapLarge: string
                },
                any
              >
            }
          >
        >
      >
      builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'DynamicTags',
            {
              inputWidth: string
            },
            {
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
              Tag: import('../../_mixins').Theme<
                'Tag',
                {
                  closeBorderRadius: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  borderRadius: string
                  opacityDisabled: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  fontWeightStrong: string
                  textColorCheckable: string
                  textColorHoverCheckable: string
                  textColorPressedCheckable: string
                  textColorChecked: string
                  colorCheckable: string
                  colorHoverCheckable: string
                  colorPressedCheckable: string
                  colorChecked: string
                  colorCheckedHover: string
                  colorCheckedPressed: string
                  border: string
                  textColor: string
                  color: string
                  colorBordered: string
                  closeIconColor: string
                  closeIconColorHover: string
                  closeIconColorPressed: string
                  closeColorHover: string
                  closeColorPressed: string
                  borderPrimary: string
                  textColorPrimary: string
                  colorPrimary: string
                  colorBorderedPrimary: string
                  closeIconColorPrimary: string
                  closeIconColorHoverPrimary: string
                  closeIconColorPressedPrimary: string
                  closeColorHoverPrimary: string
                  closeColorPressedPrimary: string
                  borderInfo: string
                  textColorInfo: string
                  colorInfo: string
                  colorBorderedInfo: string
                  closeIconColorInfo: string
                  closeIconColorHoverInfo: string
                  closeIconColorPressedInfo: string
                  closeColorHoverInfo: string
                  closeColorPressedInfo: string
                  borderSuccess: string
                  textColorSuccess: string
                  colorSuccess: string
                  colorBorderedSuccess: string
                  closeIconColorSuccess: string
                  closeIconColorHoverSuccess: string
                  closeIconColorPressedSuccess: string
                  closeColorHoverSuccess: string
                  closeColorPressedSuccess: string
                  borderWarning: string
                  textColorWarning: string
                  colorWarning: string
                  colorBorderedWarning: string
                  closeIconColorWarning: string
                  closeIconColorHoverWarning: string
                  closeIconColorPressedWarning: string
                  closeColorHoverWarning: string
                  closeColorPressedWarning: string
                  borderError: string
                  textColorError: string
                  colorError: string
                  colorBorderedError: string
                  closeIconColorError: string
                  closeIconColorHoverError: string
                  closeIconColorPressedError: string
                  closeColorHoverError: string
                  closeColorPressedError: string
                  closeIconSizeTiny: string
                  closeIconSizeSmall: string
                  closeIconSizeMedium: string
                  closeIconSizeLarge: string
                  closeSizeTiny: string
                  closeSizeSmall: string
                  closeSizeMedium: string
                  closeSizeLarge: string
                  padding: string
                  closeMargin: string
                  closeMarginRtl: string
                },
                any
              >
              Space: import('../../_mixins').Theme<
                'Space',
                {
                  gapSmall: string
                  gapMedium: string
                  gapLarge: string
                },
                any
              >
            }
          >
        >
      >
    }>
  >,
  {
    type: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
    round: boolean
    size: 'small' | 'medium' | 'large'
    disabled: boolean | undefined
    closable: boolean
    defaultValue: (string | DynamicTagsOption)[]
    onCreate: OnCreate
  }
>
export default _default
