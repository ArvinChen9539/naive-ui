import type { ExtractPublicPropTypes } from '../../_utils'
export declare const formItemRowProps: {
  label: StringConstructor
  labelWidth: import('vue').PropType<string | number>
  labelStyle: import('vue').PropType<string | import('vue').CSSProperties>
  labelAlign: import('vue').PropType<import('./interface').LabelAlign>
  labelPlacement: import('vue').PropType<import('./interface').LabelPlacement>
  path: StringConstructor
  first: BooleanConstructor
  rulePath: StringConstructor
  required: BooleanConstructor
  showRequireMark: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  requireMarkPlacement: import('vue').PropType<
    'left' | 'right' | 'right-hanging'
  >
  showFeedback: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  rule: import('vue').PropType<
    import('./interface').FormItemRule | import('./interface').FormItemRule[]
  >
  size: import('vue').PropType<'small' | 'medium' | 'large'>
  ignorePathChange: BooleanConstructor
  validationStatus: import('vue').PropType<'error' | 'success' | 'warning'>
  feedback: StringConstructor
  showLabel: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  labelProps: import('vue').PropType<import('vue').LabelHTMLAttributes>
  theme: import('vue').PropType<
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
  themeOverrides: import('vue').PropType<
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
  builtinThemeOverrides: import('vue').PropType<
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
  span: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 1
  }
  push: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  pull: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  offset: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  gutter: {
    readonly type: import('vue').PropType<string | number | [number, number]>
    readonly default: 0
  }
  alignItems: StringConstructor
  justifyContent: StringConstructor
}
export type FormItemRowProps = ExtractPublicPropTypes<typeof formItemRowProps>
declare const _default: import('vue').DefineComponent<
  {
    label: StringConstructor
    labelWidth: import('vue').PropType<string | number>
    labelStyle: import('vue').PropType<string | import('vue').CSSProperties>
    labelAlign: import('vue').PropType<import('./interface').LabelAlign>
    labelPlacement: import('vue').PropType<import('./interface').LabelPlacement>
    path: StringConstructor
    first: BooleanConstructor
    rulePath: StringConstructor
    required: BooleanConstructor
    showRequireMark: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    requireMarkPlacement: import('vue').PropType<
      'left' | 'right' | 'right-hanging'
    >
    showFeedback: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    rule: import('vue').PropType<
      import('./interface').FormItemRule | import('./interface').FormItemRule[]
    >
    size: import('vue').PropType<'small' | 'medium' | 'large'>
    ignorePathChange: BooleanConstructor
    validationStatus: import('vue').PropType<'error' | 'success' | 'warning'>
    feedback: StringConstructor
    showLabel: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    labelProps: import('vue').PropType<import('vue').LabelHTMLAttributes>
    theme: import('vue').PropType<
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
    themeOverrides: import('vue').PropType<
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
    builtinThemeOverrides: import('vue').PropType<
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
    span: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 1
    }
    push: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    pull: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    offset: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    gutter: {
      readonly type: import('vue').PropType<string | number | [number, number]>
      readonly default: 0
    }
    alignItems: StringConstructor
    justifyContent: StringConstructor
  },
  {
    formItemColInstRef: import('vue').Ref<{
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
      label: StringConstructor
      labelWidth: import('vue').PropType<string | number>
      labelStyle: import('vue').PropType<string | import('vue').CSSProperties>
      labelAlign: import('vue').PropType<import('./interface').LabelAlign>
      labelPlacement: import('vue').PropType<
        import('./interface').LabelPlacement
      >
      path: StringConstructor
      first: BooleanConstructor
      rulePath: StringConstructor
      required: BooleanConstructor
      showRequireMark: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      requireMarkPlacement: import('vue').PropType<
        'left' | 'right' | 'right-hanging'
      >
      showFeedback: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      rule: import('vue').PropType<
        | import('./interface').FormItemRule
        | import('./interface').FormItemRule[]
      >
      size: import('vue').PropType<'small' | 'medium' | 'large'>
      ignorePathChange: BooleanConstructor
      validationStatus: import('vue').PropType<'error' | 'success' | 'warning'>
      feedback: StringConstructor
      showLabel: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      labelProps: import('vue').PropType<import('vue').LabelHTMLAttributes>
      theme: import('vue').PropType<
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
      themeOverrides: import('vue').PropType<
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
      builtinThemeOverrides: import('vue').PropType<
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
      span: {
        readonly type: import('vue').PropType<
          import('../../legacy-grid/src/interface').Span
        >
        readonly default: 1
      }
      push: {
        readonly type: import('vue').PropType<
          import('../../legacy-grid/src/interface').Span
        >
        readonly default: 0
      }
      pull: {
        readonly type: import('vue').PropType<
          import('../../legacy-grid/src/interface').Span
        >
        readonly default: 0
      }
      offset: {
        readonly type: import('vue').PropType<
          import('../../legacy-grid/src/interface').Span
        >
        readonly default: 0
      }
      gutter: {
        readonly type: import('vue').PropType<
          string | number | [number, number]
        >
        readonly default: 0
      }
      alignItems: StringConstructor
      justifyContent: StringConstructor
    }>
  >,
  {
    push: import('../../legacy-grid/src/interface').Span
    first: boolean
    offset: import('../../legacy-grid/src/interface').Span
    span: import('../../legacy-grid/src/interface').Span
    required: boolean
    showRequireMark: boolean | undefined
    showFeedback: boolean | undefined
    showLabel: boolean | undefined
    ignorePathChange: boolean
    gutter: string | number | [number, number]
    pull: import('../../legacy-grid/src/interface').Span
  }
>
export default _default
