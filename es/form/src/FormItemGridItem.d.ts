import type { ExtractPublicPropTypes } from '../../_utils'
export declare const formItemGiProps: {
  readonly label: StringConstructor
  readonly labelWidth: import('vue').PropType<string | number>
  readonly labelStyle: import('vue').PropType<
    string | import('vue').CSSProperties
  >
  readonly labelAlign: import('vue').PropType<import('./interface').LabelAlign>
  readonly labelPlacement: import('vue').PropType<
    import('./interface').LabelPlacement
  >
  readonly path: StringConstructor
  readonly first: BooleanConstructor
  readonly rulePath: StringConstructor
  readonly required: BooleanConstructor
  readonly showRequireMark: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly requireMarkPlacement: import('vue').PropType<
    'left' | 'right' | 'right-hanging'
  >
  readonly showFeedback: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly rule: import('vue').PropType<
    import('./interface').FormItemRule | import('./interface').FormItemRule[]
  >
  readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
  readonly ignorePathChange: BooleanConstructor
  readonly validationStatus: import('vue').PropType<
    'error' | 'success' | 'warning'
  >
  readonly feedback: StringConstructor
  readonly showLabel: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly labelProps: import('vue').PropType<import('vue').LabelHTMLAttributes>
  readonly theme: import('vue').PropType<
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
  readonly themeOverrides: import('vue').PropType<
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
  readonly builtinThemeOverrides: import('vue').PropType<
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
  readonly span: {
    readonly type: import('vue').PropType<string | number>
    readonly default: 1
  }
  readonly offset: {
    readonly type: import('vue').PropType<string | number>
    readonly default: 0
  }
  readonly suffix: BooleanConstructor
  readonly privateOffset: NumberConstructor
  readonly privateSpan: NumberConstructor
  readonly privateColStart: NumberConstructor
  readonly privateShow: {
    readonly type: BooleanConstructor
    readonly default: true
  }
}
export declare const formItemGiPropKeys: (
  | 'label'
  | 'size'
  | 'first'
  | 'offset'
  | 'span'
  | 'required'
  | 'path'
  | 'theme'
  | 'themeOverrides'
  | 'builtinThemeOverrides'
  | 'suffix'
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
  | 'privateSpan'
  | 'privateColStart'
  | 'privateShow'
  | 'privateOffset'
)[]
export type FormItemGiProps = ExtractPublicPropTypes<typeof formItemGiProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly label: StringConstructor
    readonly labelWidth: import('vue').PropType<string | number>
    readonly labelStyle: import('vue').PropType<
      string | import('vue').CSSProperties
    >
    readonly labelAlign: import('vue').PropType<
      import('./interface').LabelAlign
    >
    readonly labelPlacement: import('vue').PropType<
      import('./interface').LabelPlacement
    >
    readonly path: StringConstructor
    readonly first: BooleanConstructor
    readonly rulePath: StringConstructor
    readonly required: BooleanConstructor
    readonly showRequireMark: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly requireMarkPlacement: import('vue').PropType<
      'left' | 'right' | 'right-hanging'
    >
    readonly showFeedback: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly rule: import('vue').PropType<
      import('./interface').FormItemRule | import('./interface').FormItemRule[]
    >
    readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
    readonly ignorePathChange: BooleanConstructor
    readonly validationStatus: import('vue').PropType<
      'error' | 'success' | 'warning'
    >
    readonly feedback: StringConstructor
    readonly showLabel: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly labelProps: import('vue').PropType<
      import('vue').LabelHTMLAttributes
    >
    readonly theme: import('vue').PropType<
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
    readonly themeOverrides: import('vue').PropType<
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
    readonly builtinThemeOverrides: import('vue').PropType<
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
    readonly span: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 1
    }
    readonly offset: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 0
    }
    readonly suffix: BooleanConstructor
    readonly privateOffset: NumberConstructor
    readonly privateSpan: NumberConstructor
    readonly privateColStart: NumberConstructor
    readonly privateShow: {
      readonly type: BooleanConstructor
      readonly default: true
    }
  },
  {
    formItemInstRef: import('vue').Ref<{
      validate: import('./interface').FormItemValidate
      restoreValidation: () => void
      path?: string | undefined
      internalValidate: import('./interface').FormItemInternalValidate
    } | null>
    validate: import('./interface').FormItemValidate
    restoreValidation: () => void
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
      readonly label: StringConstructor
      readonly labelWidth: import('vue').PropType<string | number>
      readonly labelStyle: import('vue').PropType<
        string | import('vue').CSSProperties
      >
      readonly labelAlign: import('vue').PropType<
        import('./interface').LabelAlign
      >
      readonly labelPlacement: import('vue').PropType<
        import('./interface').LabelPlacement
      >
      readonly path: StringConstructor
      readonly first: BooleanConstructor
      readonly rulePath: StringConstructor
      readonly required: BooleanConstructor
      readonly showRequireMark: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly requireMarkPlacement: import('vue').PropType<
        'left' | 'right' | 'right-hanging'
      >
      readonly showFeedback: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly rule: import('vue').PropType<
        | import('./interface').FormItemRule
        | import('./interface').FormItemRule[]
      >
      readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
      readonly ignorePathChange: BooleanConstructor
      readonly validationStatus: import('vue').PropType<
        'error' | 'success' | 'warning'
      >
      readonly feedback: StringConstructor
      readonly showLabel: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly labelProps: import('vue').PropType<
        import('vue').LabelHTMLAttributes
      >
      readonly theme: import('vue').PropType<
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
      readonly themeOverrides: import('vue').PropType<
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
      readonly builtinThemeOverrides: import('vue').PropType<
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
      readonly span: {
        readonly type: import('vue').PropType<string | number>
        readonly default: 1
      }
      readonly offset: {
        readonly type: import('vue').PropType<string | number>
        readonly default: 0
      }
      readonly suffix: BooleanConstructor
      readonly privateOffset: NumberConstructor
      readonly privateSpan: NumberConstructor
      readonly privateColStart: NumberConstructor
      readonly privateShow: {
        readonly type: BooleanConstructor
        readonly default: true
      }
    }>
  >,
  {
    readonly first: boolean
    readonly offset: string | number
    readonly span: string | number
    readonly required: boolean
    readonly suffix: boolean
    readonly showRequireMark: boolean | undefined
    readonly showFeedback: boolean | undefined
    readonly showLabel: boolean | undefined
    readonly ignorePathChange: boolean
    readonly privateShow: boolean
  }
>
export default _default
