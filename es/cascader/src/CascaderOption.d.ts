import { PropType } from 'vue'
import { TmNode } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    tmNode: {
      type: PropType<TmNode>
      required: true
    }
  },
  {
    checkStrategy: import('vue').Ref<import('treemate').CheckStrategy>
    multiple: import('vue').Ref<boolean>
    cascade: import('vue').Ref<boolean>
    checked: import('vue').ComputedRef<boolean>
    indeterminate: import('vue').ComputedRef<boolean>
    hoverPending: import('vue').ComputedRef<boolean>
    keyboardPending: import('vue').ComputedRef<boolean>
    isLoading: import('vue').ComputedRef<boolean>
    showCheckbox: import('vue').Ref<boolean>
    isLeaf: import('vue').ComputedRef<boolean>
    disabled: import('vue').ComputedRef<boolean>
    label: import('vue').ComputedRef<any>
    mergedClsPrefix: import('vue').Ref<string>
    mergedTheme: import('vue').Ref<{
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
        menuBorderRadius: string
        menuColor: string
        menuBoxShadow: string
        menuDividerColor: string
        menuHeight: string
        optionArrowColor: string
        optionHeight: string
        optionFontSize: string
        optionColorHover: string
        optionTextColor: string
        optionTextColorActive: string
        optionTextColorDisabled: string
        optionCheckMarkColor: string
        loadingColor: string
        columnWidth: string
      }
      peers: {
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
        InternalSelection: import('../../_mixins').Theme<
          'InternalSelection',
          {
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            textColor: string
            textColorDisabled: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            border: string
            borderHover: string
            borderActive: string
            borderFocus: string
            boxShadowHover: string
            boxShadowActive: string
            boxShadowFocus: string
            caretColor: string
            arrowColor: string
            arrowColorDisabled: string
            loadingColor: string
            borderWarning: string
            borderHoverWarning: string
            borderActiveWarning: string
            borderFocusWarning: string
            boxShadowHoverWarning: string
            boxShadowActiveWarning: string
            boxShadowFocusWarning: string
            colorActiveWarning: string
            caretColorWarning: string
            borderError: string
            borderHoverError: string
            borderActiveError: string
            borderFocusError: string
            boxShadowHoverError: string
            boxShadowActiveError: string
            boxShadowFocusError: string
            colorActiveError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            paddingSingle: string
            paddingMultiple: string
            clearSize: string
            arrowSize: string
          },
          {
            Popover: import('../../_mixins').Theme<
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
        Checkbox: import('../../_mixins').Theme<
          'Checkbox',
          {
            labelLineHeight: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderRadius: string
            color: string
            colorChecked: string
            colorDisabled: string
            colorDisabledChecked: string
            colorTableHeader: string
            colorTableHeaderModal: string
            colorTableHeaderPopover: string
            checkMarkColor: string
            checkMarkColorDisabled: string
            checkMarkColorDisabledChecked: string
            border: string
            borderDisabled: string
            borderDisabledChecked: string
            borderChecked: string
            borderFocus: string
            boxShadowFocus: string
            textColor: string
            textColorDisabled: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            labelPadding: string
            labelFontWeight: string
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
      peerOverrides: {
        InternalSelectMenu?:
          | {
              peers?:
                | {
                    Scrollbar?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                              color: string
                              colorHover: string
                            },
                            any
                          >
                        >
                      | undefined
                    Empty?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        InternalSelection?:
          | {
              peers?:
                | {
                    Popover?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        Scrollbar?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Checkbox?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Empty?:
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
    handleClick: (e: MouseEvent) => void
    handleCheckboxUpdateValue: () => void
    mergedHandleMouseEnter: import('vue').ComputedRef<(() => void) | undefined>
    mergedHandleMouseMove: import('vue').ComputedRef<(() => void) | undefined>
    renderLabel: import('vue').Ref<
      | ((
          option: import('./interface').CascaderOption,
          checked: boolean
        ) => import('vue').VNodeChild)
      | undefined
    >
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
      tmNode: {
        type: PropType<TmNode>
        required: true
      }
    }>
  >,
  {}
>
export default _default
