import {
  PropType,
  CSSProperties,
  ExtractPropTypes,
  LabelHTMLAttributes,
  VNodeChild
} from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
import {
  FormItemRule,
  LabelAlign,
  LabelPlacement,
  FormItemInternalValidate
} from './interface'
export declare const formItemProps: {
  readonly label: StringConstructor
  readonly labelWidth: PropType<string | number>
  readonly labelStyle: PropType<string | CSSProperties>
  readonly labelAlign: PropType<LabelAlign>
  readonly labelPlacement: PropType<LabelPlacement>
  readonly path: StringConstructor
  readonly first: BooleanConstructor
  readonly rulePath: StringConstructor
  readonly required: BooleanConstructor
  readonly showRequireMark: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly requireMarkPlacement: PropType<'left' | 'right' | 'right-hanging'>
  readonly showFeedback: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly rule: PropType<FormItemRule | FormItemRule[]>
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly ignorePathChange: BooleanConstructor
  readonly validationStatus: PropType<'error' | 'success' | 'warning'>
  readonly feedback: StringConstructor
  readonly showLabel: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly labelProps: PropType<LabelHTMLAttributes>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Form',
      {
        blankHeightSmall: string
        blankHeightMedium: string
        blankHeightLarge: string
        lineHeight: string
        labelTextColor: string
        asteriskColor: string
        feedbackTextColorError: string
        feedbackTextColorWarning: string
        feedbackTextColor: string
        feedbackPadding: string
        feedbackHeightSmall: string
        feedbackHeightMedium: string
        feedbackHeightLarge: string
        feedbackFontSizeSmall: string
        feedbackFontSizeMedium: string
        feedbackFontSizeLarge: string
        labelFontSizeLeftSmall: string
        labelFontSizeLeftMedium: string
        labelFontSizeLeftLarge: string
        labelFontSizeTopSmall: string
        labelFontSizeTopMedium: string
        labelFontSizeTopLarge: string
        labelHeightSmall: string
        labelHeightMedium: string
        labelHeightLarge: string
        labelPaddingVertical: string
        labelPaddingHorizontal: string
        labelTextAlignVertical: string
        labelTextAlignHorizontal: string
        labelFontWeight: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Form',
        {
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
          labelFontWeight: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Form',
        {
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
          labelFontWeight: string
        },
        any
      >
    >
  >
}
export type FormItemSetupProps = ExtractPropTypes<typeof formItemProps>
export type FormItemProps = ExtractPublicPropTypes<typeof formItemProps>
export declare const formItemPropKeys: (
  | 'label'
  | 'size'
  | 'first'
  | 'required'
  | 'path'
  | 'theme'
  | 'themeOverrides'
  | 'builtinThemeOverrides'
  | 'labelWidth'
  | 'labelAlign'
  | 'labelPlacement'
  | 'showRequireMark'
  | 'requireMarkPlacement'
  | 'showFeedback'
  | 'showLabel'
  | 'labelStyle'
  | 'rulePath'
  | 'rule'
  | 'ignorePathChange'
  | 'validationStatus'
  | 'feedback'
  | 'labelProps'
)[]
declare const _default: import('vue').DefineComponent<
  {
    readonly label: StringConstructor
    readonly labelWidth: PropType<string | number>
    readonly labelStyle: PropType<string | CSSProperties>
    readonly labelAlign: PropType<LabelAlign>
    readonly labelPlacement: PropType<LabelPlacement>
    readonly path: StringConstructor
    readonly first: BooleanConstructor
    readonly rulePath: StringConstructor
    readonly required: BooleanConstructor
    readonly showRequireMark: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly requireMarkPlacement: PropType<'left' | 'right' | 'right-hanging'>
    readonly showFeedback: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly rule: PropType<FormItemRule | FormItemRule[]>
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly ignorePathChange: BooleanConstructor
    readonly validationStatus: PropType<'error' | 'success' | 'warning'>
    readonly feedback: StringConstructor
    readonly showLabel: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly labelProps: PropType<LabelHTMLAttributes>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Form',
        {
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
          labelFontWeight: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Form',
          {
            blankHeightSmall: string
            blankHeightMedium: string
            blankHeightLarge: string
            lineHeight: string
            labelTextColor: string
            asteriskColor: string
            feedbackTextColorError: string
            feedbackTextColorWarning: string
            feedbackTextColor: string
            feedbackPadding: string
            feedbackHeightSmall: string
            feedbackHeightMedium: string
            feedbackHeightLarge: string
            feedbackFontSizeSmall: string
            feedbackFontSizeMedium: string
            feedbackFontSizeLarge: string
            labelFontSizeLeftSmall: string
            labelFontSizeLeftMedium: string
            labelFontSizeLeftLarge: string
            labelFontSizeTopSmall: string
            labelFontSizeTopMedium: string
            labelFontSizeTopLarge: string
            labelHeightSmall: string
            labelHeightMedium: string
            labelHeightLarge: string
            labelPaddingVertical: string
            labelPaddingHorizontal: string
            labelTextAlignVertical: string
            labelTextAlignHorizontal: string
            labelFontWeight: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Form',
          {
            blankHeightSmall: string
            blankHeightMedium: string
            blankHeightLarge: string
            lineHeight: string
            labelTextColor: string
            asteriskColor: string
            feedbackTextColorError: string
            feedbackTextColorWarning: string
            feedbackTextColor: string
            feedbackPadding: string
            feedbackHeightSmall: string
            feedbackHeightMedium: string
            feedbackHeightLarge: string
            feedbackFontSizeSmall: string
            feedbackFontSizeMedium: string
            feedbackFontSizeLarge: string
            labelFontSizeLeftSmall: string
            labelFontSizeLeftMedium: string
            labelFontSizeLeftLarge: string
            labelFontSizeTopSmall: string
            labelFontSizeTopMedium: string
            labelFontSizeTopLarge: string
            labelHeightSmall: string
            labelHeightMedium: string
            labelHeightLarge: string
            labelPaddingVertical: string
            labelPaddingHorizontal: string
            labelTextAlignVertical: string
            labelTextAlignHorizontal: string
            labelFontWeight: string
          },
          any
        >
      >
    >
  },
  {
    cssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-line-height': string
          '--n-blank-height': string
          '--n-label-font-size': string
          '--n-label-text-align': string
          '--n-label-height': string
          '--n-label-padding': string
          '--n-label-font-weight': string
          '--n-asterisk-color': string
          '--n-label-text-color': string
          '--n-feedback-padding': string
          '--n-feedback-font-size': string
          '--n-feedback-height': string
          '--n-feedback-text-color': string
          '--n-feedback-text-color-warning': string
          '--n-feedback-text-color-error': string
        }>
      | undefined
    themeClass: import('vue').Ref<string> | undefined
    onRender: (() => void) | undefined
    validate: import('./interface').FormItemValidate
    restoreValidation: () => void
    path?: string | undefined
    internalValidate: FormItemInternalValidate
    mergedSize: import('vue').ComputedRef<import('./interface').Size>
    validationErrored: import('vue').Ref<boolean>
    mergedLabelStyle: import('vue').ComputedRef<
      (import('vue').StyleValue | undefined)[]
    >
    mergedLabelPlacement: import('vue').ComputedRef<LabelPlacement>
    mergedLabelAlign: import('vue').ComputedRef<LabelAlign | undefined>
    mergedShowRequireMark: import('vue').ComputedRef<boolean | undefined>
    mergedRequireMarkPlacement: import('vue').ComputedRef<
      'left' | 'right' | 'right-hanging'
    >
    mergedValidationStatus: import('vue').ComputedRef<
      'error' | 'success' | 'warning' | undefined
    >
    mergedShowFeedback: import('vue').ComputedRef<boolean>
    mergedShowLabel: import('vue').ComputedRef<boolean>
    isAutoLabelWidth: import('vue').ComputedRef<boolean>
    labelElementRef: import('vue').Ref<HTMLLabelElement | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedRequired: import('vue').ComputedRef<boolean>
    feedbackId: import('vue').Ref<string>
    renderExplains: import('vue').Ref<
      {
        key: string
        render: () => VNodeChild
      }[]
    >
    reverseColSpace: import('vue').ComputedRef<boolean>
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
    ExtractPropTypes<{
      readonly label: StringConstructor
      readonly labelWidth: PropType<string | number>
      readonly labelStyle: PropType<string | CSSProperties>
      readonly labelAlign: PropType<LabelAlign>
      readonly labelPlacement: PropType<LabelPlacement>
      readonly path: StringConstructor
      readonly first: BooleanConstructor
      readonly rulePath: StringConstructor
      readonly required: BooleanConstructor
      readonly showRequireMark: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly requireMarkPlacement: PropType<
        'left' | 'right' | 'right-hanging'
      >
      readonly showFeedback: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly rule: PropType<FormItemRule | FormItemRule[]>
      readonly size: PropType<'small' | 'medium' | 'large'>
      readonly ignorePathChange: BooleanConstructor
      readonly validationStatus: PropType<'error' | 'success' | 'warning'>
      readonly feedback: StringConstructor
      readonly showLabel: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly labelProps: PropType<LabelHTMLAttributes>
      readonly theme: PropType<
        import('../../_mixins').Theme<
          'Form',
          {
            blankHeightSmall: string
            blankHeightMedium: string
            blankHeightLarge: string
            lineHeight: string
            labelTextColor: string
            asteriskColor: string
            feedbackTextColorError: string
            feedbackTextColorWarning: string
            feedbackTextColor: string
            feedbackPadding: string
            feedbackHeightSmall: string
            feedbackHeightMedium: string
            feedbackHeightLarge: string
            feedbackFontSizeSmall: string
            feedbackFontSizeMedium: string
            feedbackFontSizeLarge: string
            labelFontSizeLeftSmall: string
            labelFontSizeLeftMedium: string
            labelFontSizeLeftLarge: string
            labelFontSizeTopSmall: string
            labelFontSizeTopMedium: string
            labelFontSizeTopLarge: string
            labelHeightSmall: string
            labelHeightMedium: string
            labelHeightLarge: string
            labelPaddingVertical: string
            labelPaddingHorizontal: string
            labelTextAlignVertical: string
            labelTextAlignHorizontal: string
            labelFontWeight: string
          },
          any
        >
      >
      readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Form',
            {
              blankHeightSmall: string
              blankHeightMedium: string
              blankHeightLarge: string
              lineHeight: string
              labelTextColor: string
              asteriskColor: string
              feedbackTextColorError: string
              feedbackTextColorWarning: string
              feedbackTextColor: string
              feedbackPadding: string
              feedbackHeightSmall: string
              feedbackHeightMedium: string
              feedbackHeightLarge: string
              feedbackFontSizeSmall: string
              feedbackFontSizeMedium: string
              feedbackFontSizeLarge: string
              labelFontSizeLeftSmall: string
              labelFontSizeLeftMedium: string
              labelFontSizeLeftLarge: string
              labelFontSizeTopSmall: string
              labelFontSizeTopMedium: string
              labelFontSizeTopLarge: string
              labelHeightSmall: string
              labelHeightMedium: string
              labelHeightLarge: string
              labelPaddingVertical: string
              labelPaddingHorizontal: string
              labelTextAlignVertical: string
              labelTextAlignHorizontal: string
              labelFontWeight: string
            },
            any
          >
        >
      >
      readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Form',
            {
              blankHeightSmall: string
              blankHeightMedium: string
              blankHeightLarge: string
              lineHeight: string
              labelTextColor: string
              asteriskColor: string
              feedbackTextColorError: string
              feedbackTextColorWarning: string
              feedbackTextColor: string
              feedbackPadding: string
              feedbackHeightSmall: string
              feedbackHeightMedium: string
              feedbackHeightLarge: string
              feedbackFontSizeSmall: string
              feedbackFontSizeMedium: string
              feedbackFontSizeLarge: string
              labelFontSizeLeftSmall: string
              labelFontSizeLeftMedium: string
              labelFontSizeLeftLarge: string
              labelFontSizeTopSmall: string
              labelFontSizeTopMedium: string
              labelFontSizeTopLarge: string
              labelHeightSmall: string
              labelHeightMedium: string
              labelHeightLarge: string
              labelPaddingVertical: string
              labelPaddingHorizontal: string
              labelTextAlignVertical: string
              labelTextAlignHorizontal: string
              labelFontWeight: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    readonly first: boolean
    readonly required: boolean
    readonly showRequireMark: boolean | undefined
    readonly showFeedback: boolean | undefined
    readonly showLabel: boolean | undefined
    readonly ignorePathChange: boolean
  }
>
export default _default
