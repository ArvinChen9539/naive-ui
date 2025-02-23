import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    abstract: BooleanConstructor
    bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    clsPrefix: StringConstructor
    locale: PropType<{
      name: string
      global: {
        undo: string
        redo: string
        confirm: string
        clear: string
      }
      Popconfirm: {
        positiveText: string
        negativeText: string
      }
      Cascader: {
        placeholder: string
        loading: string
        loadingRequiredMessage: (label: string) => string
      }
      Time: {
        dateFormat: string
        dateTimeFormat: string
      }
      DatePicker: {
        yearFormat: string
        monthFormat: string
        dayFormat: string
        yearTypeFormat: string
        monthTypeFormat: string
        dateFormat: string
        dateTimeFormat: string
        quarterFormat: string
        clear: string
        now: string
        confirm: string
        selectTime: string
        selectDate: string
        datePlaceholder: string
        datetimePlaceholder: string
        monthPlaceholder: string
        yearPlaceholder: string
        quarterPlaceholder: string
        startDatePlaceholder: string
        endDatePlaceholder: string
        startDatetimePlaceholder: string
        endDatetimePlaceholder: string
        startMonthPlaceholder: string
        endMonthPlaceholder: string
        monthBeforeYear: boolean
        firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
        today: string
      }
      DataTable: {
        checkTableAll: string
        uncheckTableAll: string
        confirm: string
        clear: string
      }
      LegacyTransfer: {
        sourceTitle: string
        targetTitle: string
      }
      Transfer: {
        selectAll: string
        unselectAll: string
        clearAll: string
        total: (num: number) => string
        selected: (num: number) => string
      }
      Empty: {
        description: string
      }
      Select: {
        placeholder: string
      }
      TimePicker: {
        placeholder: string
        positiveText: string
        negativeText: string
        now: string
      }
      Pagination: {
        goto: string
        selectionSuffix: string
      }
      DynamicTags: {
        add: string
      }
      Log: {
        loading: string
      }
      Input: {
        placeholder: string
      }
      InputNumber: {
        placeholder: string
      }
      DynamicInput: {
        create: string
      }
      ThemeEditor: {
        title: string
        clearAllVars: string
        clearSearch: string
        filterCompName: string
        filterVarName: string
        import: string
        export: string
        restore: string
      }
      Image: {
        tipPrevious: string
        tipNext: string
        tipCounterclockwise: string
        tipClockwise: string
        tipZoomOut: string
        tipZoomIn: string
        tipClose: string
        tipOriginalSize: string
      }
    } | null>
    dateLocale: PropType<
      import('../../../src/locales/date/enUS').NDateLocale | null
    >
    namespace: StringConstructor
    rtl: PropType<
      import('../../../src/config-provider/src/internal-interface').RtlProp
    >
    tag: {
      readonly type: StringConstructor
      readonly default: 'div'
    }
    hljs: PropType<import('../../../src/_mixins').Hljs>
    katex: PropType<typeof import('katex').default>
    theme: PropType<import('naive-ui').GlobalTheme | null>
    themeOverrides: PropType<import('naive-ui').GlobalThemeOverrides | null>
    componentOptions: PropType<import('naive-ui').GlobalComponentConfig>
    icons: PropType<import('naive-ui').GlobalIconConfig>
    breakpoints: PropType<
      import('../../../src/config-provider/src/internal-interface').Breakpoints
    >
    preflightStyleDisabled: BooleanConstructor
    inlineThemeDisabled: {
      readonly type: BooleanConstructor
      readonly default: undefined
    }
    as: {
      readonly type: PropType<string | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    themeName: {
      type: PropType<'dark' | 'light'>
      default: string
    }
  },
  void,
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
      abstract: BooleanConstructor
      bordered: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      clsPrefix: StringConstructor
      locale: PropType<{
        name: string
        global: {
          undo: string
          redo: string
          confirm: string
          clear: string
        }
        Popconfirm: {
          positiveText: string
          negativeText: string
        }
        Cascader: {
          placeholder: string
          loading: string
          loadingRequiredMessage: (label: string) => string
        }
        Time: {
          dateFormat: string
          dateTimeFormat: string
        }
        DatePicker: {
          yearFormat: string
          monthFormat: string
          dayFormat: string
          yearTypeFormat: string
          monthTypeFormat: string
          dateFormat: string
          dateTimeFormat: string
          quarterFormat: string
          clear: string
          now: string
          confirm: string
          selectTime: string
          selectDate: string
          datePlaceholder: string
          datetimePlaceholder: string
          monthPlaceholder: string
          yearPlaceholder: string
          quarterPlaceholder: string
          startDatePlaceholder: string
          endDatePlaceholder: string
          startDatetimePlaceholder: string
          endDatetimePlaceholder: string
          startMonthPlaceholder: string
          endMonthPlaceholder: string
          monthBeforeYear: boolean
          firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
          today: string
        }
        DataTable: {
          checkTableAll: string
          uncheckTableAll: string
          confirm: string
          clear: string
        }
        LegacyTransfer: {
          sourceTitle: string
          targetTitle: string
        }
        Transfer: {
          selectAll: string
          unselectAll: string
          clearAll: string
          total: (num: number) => string
          selected: (num: number) => string
        }
        Empty: {
          description: string
        }
        Select: {
          placeholder: string
        }
        TimePicker: {
          placeholder: string
          positiveText: string
          negativeText: string
          now: string
        }
        Pagination: {
          goto: string
          selectionSuffix: string
        }
        DynamicTags: {
          add: string
        }
        Log: {
          loading: string
        }
        Input: {
          placeholder: string
        }
        InputNumber: {
          placeholder: string
        }
        DynamicInput: {
          create: string
        }
        ThemeEditor: {
          title: string
          clearAllVars: string
          clearSearch: string
          filterCompName: string
          filterVarName: string
          import: string
          export: string
          restore: string
        }
        Image: {
          tipPrevious: string
          tipNext: string
          tipCounterclockwise: string
          tipClockwise: string
          tipZoomOut: string
          tipZoomIn: string
          tipClose: string
          tipOriginalSize: string
        }
      } | null>
      dateLocale: PropType<
        import('../../../src/locales/date/enUS').NDateLocale | null
      >
      namespace: StringConstructor
      rtl: PropType<
        import('../../../src/config-provider/src/internal-interface').RtlProp
      >
      tag: {
        readonly type: StringConstructor
        readonly default: 'div'
      }
      hljs: PropType<import('../../../src/_mixins').Hljs>
      katex: PropType<typeof import('katex').default>
      theme: PropType<import('naive-ui').GlobalTheme | null>
      themeOverrides: PropType<import('naive-ui').GlobalThemeOverrides | null>
      componentOptions: PropType<import('naive-ui').GlobalComponentConfig>
      icons: PropType<import('naive-ui').GlobalIconConfig>
      breakpoints: PropType<
        import('../../../src/config-provider/src/internal-interface').Breakpoints
      >
      preflightStyleDisabled: BooleanConstructor
      inlineThemeDisabled: {
        readonly type: BooleanConstructor
        readonly default: undefined
      }
      as: {
        readonly type: PropType<string | undefined>
        readonly validator: () => boolean
        readonly default: undefined
      }
      themeName: {
        type: PropType<'dark' | 'light'>
        default: string
      }
    }>
  >,
  {
    abstract: boolean
    tag: string
    as: string | undefined
    bordered: boolean | undefined
    preflightStyleDisabled: boolean
    inlineThemeDisabled: boolean
    themeName: 'dark' | 'light'
  }
>
export default _default
