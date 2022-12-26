import type { ExtractPublicPropTypes } from '../../_utils'
import { radioProps } from './use-radio'
export { radioProps }
export type RadioProps = ExtractPublicPropTypes<typeof radioProps>
declare const _default: import('vue').DefineComponent<
  {
    name: StringConstructor
    value: {
      readonly type: import('vue').PropType<string | number | boolean>
      readonly default: 'on'
    }
    checked: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    defaultChecked: BooleanConstructor
    disabled: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    label: StringConstructor
    size: import('vue').PropType<'small' | 'medium' | 'large'>
    onUpdateChecked: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    'onUpdate:checked': import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    checkedValue: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    theme: import('vue').PropType<
      import('../../_mixins').Theme<
        'Radio',
        {
          labelLineHeight: string
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          boxShadow: string
          boxShadowActive: string
          boxShadowFocus: string
          boxShadowHover: string
          boxShadowDisabled: string
          color: string
          colorDisabled: string
          colorActive: string
          textColor: string
          textColorDisabled: string
          dotColorActive: string
          dotColorDisabled: string
          buttonBorderColor: string
          buttonBorderColorActive: string
          buttonBorderColorHover: string
          buttonColor: string
          buttonColorActive: string
          buttonTextColor: string
          buttonTextColorActive: string
          buttonTextColorHover: string
          opacityDisabled: string
          buttonBoxShadowFocus: string
          buttonBoxShadowHover: string
          buttonBoxShadow: string
          buttonBorderRadius: string
          radioSizeSmall: string
          radioSizeMedium: string
          radioSizeLarge: string
          labelPadding: string
          labelFontWeight: string
        },
        any
      >
    >
    themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Radio',
          {
            labelLineHeight: string
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            boxShadow: string
            boxShadowActive: string
            boxShadowFocus: string
            boxShadowHover: string
            boxShadowDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            textColor: string
            textColorDisabled: string
            dotColorActive: string
            dotColorDisabled: string
            buttonBorderColor: string
            buttonBorderColorActive: string
            buttonBorderColorHover: string
            buttonColor: string
            buttonColorActive: string
            buttonTextColor: string
            buttonTextColorActive: string
            buttonTextColorHover: string
            opacityDisabled: string
            buttonBoxShadowFocus: string
            buttonBoxShadowHover: string
            buttonBoxShadow: string
            buttonBorderRadius: string
            radioSizeSmall: string
            radioSizeMedium: string
            radioSizeLarge: string
            labelPadding: string
            labelFontWeight: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Radio',
          {
            labelLineHeight: string
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            boxShadow: string
            boxShadowActive: string
            boxShadowFocus: string
            boxShadowHover: string
            boxShadowDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            textColor: string
            textColorDisabled: string
            dotColorActive: string
            dotColorDisabled: string
            buttonBorderColor: string
            buttonBorderColorActive: string
            buttonBorderColorHover: string
            buttonColor: string
            buttonColorActive: string
            buttonTextColor: string
            buttonTextColorActive: string
            buttonTextColorHover: string
            opacityDisabled: string
            buttonBoxShadowFocus: string
            buttonBoxShadowHover: string
            buttonBoxShadow: string
            buttonBorderRadius: string
            radioSizeSmall: string
            radioSizeMedium: string
            radioSizeLarge: string
            labelPadding: string
            labelFontWeight: string
          },
          any
        >
      >
    >
  },
  import('./use-radio').UseRadio & {
    rtlEnabled:
      | import('vue').Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    cssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-label-line-height': string
          '--n-label-font-weight': string
          '--n-box-shadow': string
          '--n-box-shadow-active': string
          '--n-box-shadow-disabled': string
          '--n-box-shadow-focus': string
          '--n-box-shadow-hover': string
          '--n-color': string
          '--n-color-active': string
          '--n-color-disabled': string
          '--n-dot-color-active': string
          '--n-dot-color-disabled': string
          '--n-font-size': string
          '--n-radio-size': string
          '--n-text-color': string
          '--n-text-color-disabled': string
          '--n-label-padding': string
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
      name: StringConstructor
      value: {
        readonly type: import('vue').PropType<string | number | boolean>
        readonly default: 'on'
      }
      checked: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      defaultChecked: BooleanConstructor
      disabled: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      label: StringConstructor
      size: import('vue').PropType<'small' | 'medium' | 'large'>
      onUpdateChecked: import('vue').PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
      >
      'onUpdate:checked': import('vue').PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
      >
      checkedValue: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      theme: import('vue').PropType<
        import('../../_mixins').Theme<
          'Radio',
          {
            labelLineHeight: string
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            boxShadow: string
            boxShadowActive: string
            boxShadowFocus: string
            boxShadowHover: string
            boxShadowDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            textColor: string
            textColorDisabled: string
            dotColorActive: string
            dotColorDisabled: string
            buttonBorderColor: string
            buttonBorderColorActive: string
            buttonBorderColorHover: string
            buttonColor: string
            buttonColorActive: string
            buttonTextColor: string
            buttonTextColorActive: string
            buttonTextColorHover: string
            opacityDisabled: string
            buttonBoxShadowFocus: string
            buttonBoxShadowHover: string
            buttonBoxShadow: string
            buttonBorderRadius: string
            radioSizeSmall: string
            radioSizeMedium: string
            radioSizeLarge: string
            labelPadding: string
            labelFontWeight: string
          },
          any
        >
      >
      themeOverrides: import('vue').PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Radio',
            {
              labelLineHeight: string
              buttonHeightSmall: string
              buttonHeightMedium: string
              buttonHeightLarge: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              boxShadow: string
              boxShadowActive: string
              boxShadowFocus: string
              boxShadowHover: string
              boxShadowDisabled: string
              color: string
              colorDisabled: string
              colorActive: string
              textColor: string
              textColorDisabled: string
              dotColorActive: string
              dotColorDisabled: string
              buttonBorderColor: string
              buttonBorderColorActive: string
              buttonBorderColorHover: string
              buttonColor: string
              buttonColorActive: string
              buttonTextColor: string
              buttonTextColorActive: string
              buttonTextColorHover: string
              opacityDisabled: string
              buttonBoxShadowFocus: string
              buttonBoxShadowHover: string
              buttonBoxShadow: string
              buttonBorderRadius: string
              radioSizeSmall: string
              radioSizeMedium: string
              radioSizeLarge: string
              labelPadding: string
              labelFontWeight: string
            },
            any
          >
        >
      >
      builtinThemeOverrides: import('vue').PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Radio',
            {
              labelLineHeight: string
              buttonHeightSmall: string
              buttonHeightMedium: string
              buttonHeightLarge: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              boxShadow: string
              boxShadowActive: string
              boxShadowFocus: string
              boxShadowHover: string
              boxShadowDisabled: string
              color: string
              colorDisabled: string
              colorActive: string
              textColor: string
              textColorDisabled: string
              dotColorActive: string
              dotColorDisabled: string
              buttonBorderColor: string
              buttonBorderColorActive: string
              buttonBorderColorHover: string
              buttonColor: string
              buttonColorActive: string
              buttonTextColor: string
              buttonTextColorActive: string
              buttonTextColorHover: string
              opacityDisabled: string
              buttonBoxShadowFocus: string
              buttonBoxShadowHover: string
              buttonBoxShadow: string
              buttonBorderRadius: string
              radioSizeSmall: string
              radioSizeMedium: string
              radioSizeLarge: string
              labelPadding: string
              labelFontWeight: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    value: string | number | boolean
    disabled: boolean | undefined
    checked: boolean | undefined
    defaultChecked: boolean
    checkedValue: boolean | undefined
  }
>
export default _default
