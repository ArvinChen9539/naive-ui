import { PropType, ExtractPropTypes, Ref } from 'vue'
import { FollowerPlacement } from 'vueuc'
import type { TimePickerProps } from '../../time-picker/src/TimePicker'
import type { FormValidationStatus } from '../../form/src/interface'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import { DatePickerType } from './config'
import type {
  OnUpdateValue,
  Value,
  IsDateDisabled,
  IsTimeDisabled,
  Shortcuts,
  FirstDayOfWeek,
  DefaultTime,
  FormattedValue,
  OnUpdateFormattedValue
} from './interface'
export declare const datePickerProps: {
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly clearable: BooleanConstructor
  readonly updateValueOnClose: BooleanConstructor
  readonly defaultValue: PropType<Value | null>
  readonly defaultFormattedValue: PropType<FormattedValue | null>
  readonly defaultTime: PropType<DefaultTime>
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly placement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom-start'
  }
  readonly value: PropType<Value | null>
  readonly formattedValue: PropType<FormattedValue | null>
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly type: {
    readonly type: PropType<DatePickerType>
    readonly default: 'date'
  }
  readonly valueFormat: StringConstructor
  readonly separator: StringConstructor
  readonly placeholder: StringConstructor
  readonly startPlaceholder: StringConstructor
  readonly endPlaceholder: StringConstructor
  readonly format: StringConstructor
  readonly dateFormat: StringConstructor
  readonly timeFormat: StringConstructor
  readonly actions: PropType<('clear' | 'confirm' | 'now')[] | null>
  readonly shortcuts: PropType<Shortcuts>
  readonly isDateDisabled: PropType<IsDateDisabled>
  readonly isTimeDisabled: PropType<IsTimeDisabled>
  readonly show: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly panel: BooleanConstructor
  readonly ranges: PropType<Record<string, [number, number]>>
  readonly firstDayOfWeek: PropType<FirstDayOfWeek>
  readonly inputReadonly: BooleanConstructor
  readonly closeOnSelect: BooleanConstructor
  readonly status: PropType<FormValidationStatus>
  readonly timePickerProps: PropType<
    TimePickerProps | [TimePickerProps, TimePickerProps]
  >
  readonly onClear: PropType<() => void>
  readonly onConfirm: PropType<OnUpdateValue>
  readonly defaultCalendarStartTime: NumberConstructor
  readonly defaultCalendarEndTime: NumberConstructor
  readonly bindCalendarMonths: BooleanConstructor
  readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>
  readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>
  readonly 'onUpdate:formattedValue': PropType<
    MaybeArray<OnUpdateFormattedValue>
  >
  readonly onUpdateFormattedValue: PropType<MaybeArray<OnUpdateFormattedValue>>
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly onFocus: PropType<(e: FocusEvent) => void>
  readonly onBlur: PropType<(e: FocusEvent) => void>
  readonly onChange: PropType<MaybeArray<OnUpdateValue>>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'DatePicker',
      {
        itemFontSize: string
        calendarDaysFontSize: string
        calendarTitleFontSize: string
        itemTextColor: string
        itemTextColorDisabled: string
        itemTextColorActive: string
        itemTextColorCurrent: string
        itemColorIncluded: string
        itemColorHover: string
        itemColorDisabled: string
        itemColorActive: string
        itemBorderRadius: string
        panelColor: string
        panelTextColor: string
        arrowColor: string
        calendarTitleTextColor: string
        calendarTitleColorHover: string
        calendarDaysTextColor: string
        panelHeaderDividerColor: string
        calendarDaysDividerColor: string
        calendarDividerColor: string
        panelActionDividerColor: string
        panelBoxShadow: string
        panelBorderRadius: string
        calendarTitleFontWeight: string
        scrollItemBorderRadius: string
        iconColor: string
        iconColorDisabled: string
        itemSize: string
        itemCellWidth: string
        itemCellHeight: string
        scrollItemWidth: string
        scrollItemHeight: string
        panelExtraFooterPadding: string
        panelActionPadding: string
        calendarTitlePadding: string
        calendarTitleHeight: string
        arrowSize: string
        panelHeaderPadding: string
        calendarDaysHeight: string
        calendarTitleGridTempateColumns: string
        calendarLeftPaddingDate: string
        calendarLeftPaddingDatetime: string
        calendarLeftPaddingDaterange: string
        calendarLeftPaddingDatetimerange: string
        calendarLeftPaddingMonth: string
        calendarLeftPaddingYear: string
        calendarLeftPaddingQuarter: string
        calendarLeftPaddingMonthrange: string
        calendarLeftPaddingQuarterrange: string
        calendarLeftPaddingYearrange: string
        calendarRightPaddingDate: string
        calendarRightPaddingDatetime: string
        calendarRightPaddingDaterange: string
        calendarRightPaddingDatetimerange: string
        calendarRightPaddingMonth: string
        calendarRightPaddingYear: string
        calendarRightPaddingQuarter: string
        calendarRightPaddingMonthrange: string
        calendarRightPaddingQuarterrange: string
        calendarRightPaddingYearrange: string
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
        TimePicker: import('../../_mixins').Theme<
          'TimePicker',
          {
            panelColor: string
            panelBoxShadow: string
            panelDividerColor: string
            itemTextColor: string
            itemTextColorActive: string
            itemColorHover: string
            itemOpacityDisabled: string
            itemBorderRadius: string
            borderRadius: string
            iconColor: string
            iconColorDisabled: string
            itemFontSize: string
            itemHeight: string
            itemWidth: string
            panelActionPadding: string
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DatePicker',
        {
          itemFontSize: string
          calendarDaysFontSize: string
          calendarTitleFontSize: string
          itemTextColor: string
          itemTextColorDisabled: string
          itemTextColorActive: string
          itemTextColorCurrent: string
          itemColorIncluded: string
          itemColorHover: string
          itemColorDisabled: string
          itemColorActive: string
          itemBorderRadius: string
          panelColor: string
          panelTextColor: string
          arrowColor: string
          calendarTitleTextColor: string
          calendarTitleColorHover: string
          calendarDaysTextColor: string
          panelHeaderDividerColor: string
          calendarDaysDividerColor: string
          calendarDividerColor: string
          panelActionDividerColor: string
          panelBoxShadow: string
          panelBorderRadius: string
          calendarTitleFontWeight: string
          scrollItemBorderRadius: string
          iconColor: string
          iconColorDisabled: string
          itemSize: string
          itemCellWidth: string
          itemCellHeight: string
          scrollItemWidth: string
          scrollItemHeight: string
          panelExtraFooterPadding: string
          panelActionPadding: string
          calendarTitlePadding: string
          calendarTitleHeight: string
          arrowSize: string
          panelHeaderPadding: string
          calendarDaysHeight: string
          calendarTitleGridTempateColumns: string
          calendarLeftPaddingDate: string
          calendarLeftPaddingDatetime: string
          calendarLeftPaddingDaterange: string
          calendarLeftPaddingDatetimerange: string
          calendarLeftPaddingMonth: string
          calendarLeftPaddingYear: string
          calendarLeftPaddingQuarter: string
          calendarLeftPaddingMonthrange: string
          calendarLeftPaddingQuarterrange: string
          calendarLeftPaddingYearrange: string
          calendarRightPaddingDate: string
          calendarRightPaddingDatetime: string
          calendarRightPaddingDaterange: string
          calendarRightPaddingDatetimerange: string
          calendarRightPaddingMonth: string
          calendarRightPaddingYear: string
          calendarRightPaddingQuarter: string
          calendarRightPaddingMonthrange: string
          calendarRightPaddingQuarterrange: string
          calendarRightPaddingYearrange: string
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
          TimePicker: import('../../_mixins').Theme<
            'TimePicker',
            {
              panelColor: string
              panelBoxShadow: string
              panelDividerColor: string
              itemTextColor: string
              itemTextColorActive: string
              itemColorHover: string
              itemOpacityDisabled: string
              itemBorderRadius: string
              borderRadius: string
              iconColor: string
              iconColorDisabled: string
              itemFontSize: string
              itemHeight: string
              itemWidth: string
              panelActionPadding: string
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DatePicker',
        {
          itemFontSize: string
          calendarDaysFontSize: string
          calendarTitleFontSize: string
          itemTextColor: string
          itemTextColorDisabled: string
          itemTextColorActive: string
          itemTextColorCurrent: string
          itemColorIncluded: string
          itemColorHover: string
          itemColorDisabled: string
          itemColorActive: string
          itemBorderRadius: string
          panelColor: string
          panelTextColor: string
          arrowColor: string
          calendarTitleTextColor: string
          calendarTitleColorHover: string
          calendarDaysTextColor: string
          panelHeaderDividerColor: string
          calendarDaysDividerColor: string
          calendarDividerColor: string
          panelActionDividerColor: string
          panelBoxShadow: string
          panelBorderRadius: string
          calendarTitleFontWeight: string
          scrollItemBorderRadius: string
          iconColor: string
          iconColorDisabled: string
          itemSize: string
          itemCellWidth: string
          itemCellHeight: string
          scrollItemWidth: string
          scrollItemHeight: string
          panelExtraFooterPadding: string
          panelActionPadding: string
          calendarTitlePadding: string
          calendarTitleHeight: string
          arrowSize: string
          panelHeaderPadding: string
          calendarDaysHeight: string
          calendarTitleGridTempateColumns: string
          calendarLeftPaddingDate: string
          calendarLeftPaddingDatetime: string
          calendarLeftPaddingDaterange: string
          calendarLeftPaddingDatetimerange: string
          calendarLeftPaddingMonth: string
          calendarLeftPaddingYear: string
          calendarLeftPaddingQuarter: string
          calendarLeftPaddingMonthrange: string
          calendarLeftPaddingQuarterrange: string
          calendarLeftPaddingYearrange: string
          calendarRightPaddingDate: string
          calendarRightPaddingDatetime: string
          calendarRightPaddingDaterange: string
          calendarRightPaddingDatetimerange: string
          calendarRightPaddingMonth: string
          calendarRightPaddingYear: string
          calendarRightPaddingQuarter: string
          calendarRightPaddingMonthrange: string
          calendarRightPaddingQuarterrange: string
          calendarRightPaddingYearrange: string
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
          TimePicker: import('../../_mixins').Theme<
            'TimePicker',
            {
              panelColor: string
              panelBoxShadow: string
              panelDividerColor: string
              itemTextColor: string
              itemTextColorActive: string
              itemColorHover: string
              itemOpacityDisabled: string
              itemBorderRadius: string
              borderRadius: string
              iconColor: string
              iconColorDisabled: string
              itemFontSize: string
              itemHeight: string
              itemWidth: string
              panelActionPadding: string
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
  >
}
export type DatePickerSetupProps = ExtractPropTypes<typeof datePickerProps>
export type DatePickerProps = ExtractPublicPropTypes<typeof datePickerProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly clearable: BooleanConstructor
    readonly updateValueOnClose: BooleanConstructor
    readonly defaultValue: PropType<Value | null>
    readonly defaultFormattedValue: PropType<FormattedValue | null>
    readonly defaultTime: PropType<DefaultTime>
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly placement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom-start'
    }
    readonly value: PropType<Value | null>
    readonly formattedValue: PropType<FormattedValue | null>
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly type: {
      readonly type: PropType<DatePickerType>
      readonly default: 'date'
    }
    readonly valueFormat: StringConstructor
    readonly separator: StringConstructor
    readonly placeholder: StringConstructor
    readonly startPlaceholder: StringConstructor
    readonly endPlaceholder: StringConstructor
    readonly format: StringConstructor
    readonly dateFormat: StringConstructor
    readonly timeFormat: StringConstructor
    readonly actions: PropType<('clear' | 'confirm' | 'now')[] | null>
    readonly shortcuts: PropType<Shortcuts>
    readonly isDateDisabled: PropType<IsDateDisabled>
    readonly isTimeDisabled: PropType<IsTimeDisabled>
    readonly show: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly panel: BooleanConstructor
    readonly ranges: PropType<Record<string, [number, number]>>
    readonly firstDayOfWeek: PropType<FirstDayOfWeek>
    readonly inputReadonly: BooleanConstructor
    readonly closeOnSelect: BooleanConstructor
    readonly status: PropType<FormValidationStatus>
    readonly timePickerProps: PropType<
      TimePickerProps | [TimePickerProps, TimePickerProps]
    >
    readonly onClear: PropType<() => void>
    readonly onConfirm: PropType<OnUpdateValue>
    readonly defaultCalendarStartTime: NumberConstructor
    readonly defaultCalendarEndTime: NumberConstructor
    readonly bindCalendarMonths: BooleanConstructor
    readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>
    readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>
    readonly 'onUpdate:formattedValue': PropType<
      MaybeArray<OnUpdateFormattedValue>
    >
    readonly onUpdateFormattedValue: PropType<
      MaybeArray<OnUpdateFormattedValue>
    >
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly onFocus: PropType<(e: FocusEvent) => void>
    readonly onBlur: PropType<(e: FocusEvent) => void>
    readonly onChange: PropType<MaybeArray<OnUpdateValue>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'DatePicker',
        {
          itemFontSize: string
          calendarDaysFontSize: string
          calendarTitleFontSize: string
          itemTextColor: string
          itemTextColorDisabled: string
          itemTextColorActive: string
          itemTextColorCurrent: string
          itemColorIncluded: string
          itemColorHover: string
          itemColorDisabled: string
          itemColorActive: string
          itemBorderRadius: string
          panelColor: string
          panelTextColor: string
          arrowColor: string
          calendarTitleTextColor: string
          calendarTitleColorHover: string
          calendarDaysTextColor: string
          panelHeaderDividerColor: string
          calendarDaysDividerColor: string
          calendarDividerColor: string
          panelActionDividerColor: string
          panelBoxShadow: string
          panelBorderRadius: string
          calendarTitleFontWeight: string
          scrollItemBorderRadius: string
          iconColor: string
          iconColorDisabled: string
          itemSize: string
          itemCellWidth: string
          itemCellHeight: string
          scrollItemWidth: string
          scrollItemHeight: string
          panelExtraFooterPadding: string
          panelActionPadding: string
          calendarTitlePadding: string
          calendarTitleHeight: string
          arrowSize: string
          panelHeaderPadding: string
          calendarDaysHeight: string
          calendarTitleGridTempateColumns: string
          calendarLeftPaddingDate: string
          calendarLeftPaddingDatetime: string
          calendarLeftPaddingDaterange: string
          calendarLeftPaddingDatetimerange: string
          calendarLeftPaddingMonth: string
          calendarLeftPaddingYear: string
          calendarLeftPaddingQuarter: string
          calendarLeftPaddingMonthrange: string
          calendarLeftPaddingQuarterrange: string
          calendarLeftPaddingYearrange: string
          calendarRightPaddingDate: string
          calendarRightPaddingDatetime: string
          calendarRightPaddingDaterange: string
          calendarRightPaddingDatetimerange: string
          calendarRightPaddingMonth: string
          calendarRightPaddingYear: string
          calendarRightPaddingQuarter: string
          calendarRightPaddingMonthrange: string
          calendarRightPaddingQuarterrange: string
          calendarRightPaddingYearrange: string
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
          TimePicker: import('../../_mixins').Theme<
            'TimePicker',
            {
              panelColor: string
              panelBoxShadow: string
              panelDividerColor: string
              itemTextColor: string
              itemTextColorActive: string
              itemColorHover: string
              itemOpacityDisabled: string
              itemBorderRadius: string
              borderRadius: string
              iconColor: string
              iconColorDisabled: string
              itemFontSize: string
              itemHeight: string
              itemWidth: string
              panelActionPadding: string
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DatePicker',
          {
            itemFontSize: string
            calendarDaysFontSize: string
            calendarTitleFontSize: string
            itemTextColor: string
            itemTextColorDisabled: string
            itemTextColorActive: string
            itemTextColorCurrent: string
            itemColorIncluded: string
            itemColorHover: string
            itemColorDisabled: string
            itemColorActive: string
            itemBorderRadius: string
            panelColor: string
            panelTextColor: string
            arrowColor: string
            calendarTitleTextColor: string
            calendarTitleColorHover: string
            calendarDaysTextColor: string
            panelHeaderDividerColor: string
            calendarDaysDividerColor: string
            calendarDividerColor: string
            panelActionDividerColor: string
            panelBoxShadow: string
            panelBorderRadius: string
            calendarTitleFontWeight: string
            scrollItemBorderRadius: string
            iconColor: string
            iconColorDisabled: string
            itemSize: string
            itemCellWidth: string
            itemCellHeight: string
            scrollItemWidth: string
            scrollItemHeight: string
            panelExtraFooterPadding: string
            panelActionPadding: string
            calendarTitlePadding: string
            calendarTitleHeight: string
            arrowSize: string
            panelHeaderPadding: string
            calendarDaysHeight: string
            calendarTitleGridTempateColumns: string
            calendarLeftPaddingDate: string
            calendarLeftPaddingDatetime: string
            calendarLeftPaddingDaterange: string
            calendarLeftPaddingDatetimerange: string
            calendarLeftPaddingMonth: string
            calendarLeftPaddingYear: string
            calendarLeftPaddingQuarter: string
            calendarLeftPaddingMonthrange: string
            calendarLeftPaddingQuarterrange: string
            calendarLeftPaddingYearrange: string
            calendarRightPaddingDate: string
            calendarRightPaddingDatetime: string
            calendarRightPaddingDaterange: string
            calendarRightPaddingDatetimerange: string
            calendarRightPaddingMonth: string
            calendarRightPaddingYear: string
            calendarRightPaddingQuarter: string
            calendarRightPaddingMonthrange: string
            calendarRightPaddingQuarterrange: string
            calendarRightPaddingYearrange: string
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
            TimePicker: import('../../_mixins').Theme<
              'TimePicker',
              {
                panelColor: string
                panelBoxShadow: string
                panelDividerColor: string
                itemTextColor: string
                itemTextColorActive: string
                itemColorHover: string
                itemOpacityDisabled: string
                itemBorderRadius: string
                borderRadius: string
                iconColor: string
                iconColorDisabled: string
                itemFontSize: string
                itemHeight: string
                itemWidth: string
                panelActionPadding: string
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DatePicker',
          {
            itemFontSize: string
            calendarDaysFontSize: string
            calendarTitleFontSize: string
            itemTextColor: string
            itemTextColorDisabled: string
            itemTextColorActive: string
            itemTextColorCurrent: string
            itemColorIncluded: string
            itemColorHover: string
            itemColorDisabled: string
            itemColorActive: string
            itemBorderRadius: string
            panelColor: string
            panelTextColor: string
            arrowColor: string
            calendarTitleTextColor: string
            calendarTitleColorHover: string
            calendarDaysTextColor: string
            panelHeaderDividerColor: string
            calendarDaysDividerColor: string
            calendarDividerColor: string
            panelActionDividerColor: string
            panelBoxShadow: string
            panelBorderRadius: string
            calendarTitleFontWeight: string
            scrollItemBorderRadius: string
            iconColor: string
            iconColorDisabled: string
            itemSize: string
            itemCellWidth: string
            itemCellHeight: string
            scrollItemWidth: string
            scrollItemHeight: string
            panelExtraFooterPadding: string
            panelActionPadding: string
            calendarTitlePadding: string
            calendarTitleHeight: string
            arrowSize: string
            panelHeaderPadding: string
            calendarDaysHeight: string
            calendarTitleGridTempateColumns: string
            calendarLeftPaddingDate: string
            calendarLeftPaddingDatetime: string
            calendarLeftPaddingDaterange: string
            calendarLeftPaddingDatetimerange: string
            calendarLeftPaddingMonth: string
            calendarLeftPaddingYear: string
            calendarLeftPaddingQuarter: string
            calendarLeftPaddingMonthrange: string
            calendarLeftPaddingQuarterrange: string
            calendarLeftPaddingYearrange: string
            calendarRightPaddingDate: string
            calendarRightPaddingDatetime: string
            calendarRightPaddingDaterange: string
            calendarRightPaddingDatetimerange: string
            calendarRightPaddingMonth: string
            calendarRightPaddingYear: string
            calendarRightPaddingQuarter: string
            calendarRightPaddingMonthrange: string
            calendarRightPaddingQuarterrange: string
            calendarRightPaddingYearrange: string
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
            TimePicker: import('../../_mixins').Theme<
              'TimePicker',
              {
                panelColor: string
                panelBoxShadow: string
                panelDividerColor: string
                itemTextColor: string
                itemTextColorActive: string
                itemColorHover: string
                itemOpacityDisabled: string
                itemBorderRadius: string
                borderRadius: string
                iconColor: string
                iconColorDisabled: string
                itemFontSize: string
                itemHeight: string
                itemWidth: string
                panelActionPadding: string
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    mergedStatus: import('vue').ComputedRef<FormValidationStatus | undefined>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedBordered: import('vue').ComputedRef<boolean>
    namespace: import('vue').ComputedRef<string | undefined>
    uncontrolledValue: Ref<Value | null>
    pendingValue: Ref<Value | null>
    panelInstRef: Ref<{
      $el: HTMLElement
      monthScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      yearScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      yearVlRef?:
        | {
            listElRef: HTMLElement
            itemsElRef: HTMLElement | null
            scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo
          }
        | null
        | undefined
      startYearScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      endYearScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      startMonthScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      endMonthScrollbarRef?:
        | {
            $el: HTMLElement
            containerRef: HTMLElement | null
            contentRef: HTMLElement | null
            containerScrollTop: number
            syncUnifiedContainer: () => void
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy
            sync: () => void
            handleMouseEnterWrapper: () => void
            handleMouseLeaveWrapper: () => void
          }
        | null
        | undefined
      startYearVlRef?:
        | {
            listElRef: HTMLElement
            itemsElRef: HTMLElement | null
            scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo
          }
        | null
        | undefined
      endYearVlRef?:
        | {
            listElRef: HTMLElement
            itemsElRef: HTMLElement | null
            scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo
          }
        | null
        | undefined
    } | null>
    triggerElRef: Ref<HTMLElement | null>
    inputInstRef: Ref<{
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
    isMounted: Readonly<Ref<boolean>>
    displayTime: Ref<string>
    displayStartTime: Ref<string>
    displayEndTime: Ref<string>
    mergedShow: import('vue').ComputedRef<boolean>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    isRange: import('vue').ComputedRef<boolean>
    localizedStartPlaceholder: import('vue').ComputedRef<string>
    localizedEndPlaceholder: import('vue').ComputedRef<string>
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large'>
    mergedDisabled: import('vue').ComputedRef<boolean>
    localizedPlacehoder: import('vue').ComputedRef<string>
    isValueInvalid: import('vue').ComputedRef<boolean>
    isStartValueInvalid: import('vue').ComputedRef<boolean>
    isEndValueInvalid: import('vue').ComputedRef<boolean>
    handleInputKeydown: (e: KeyboardEvent) => void
    handleClickOutside: (e: MouseEvent) => void
    handleKeydown: (e: KeyboardEvent) => void
    handleClear: () => void
    handlePanelClear: () => void
    handleTriggerClick: (e: MouseEvent) => void
    handleInputActivate: () => void
    handleInputDeactivate: () => void
    handleInputFocus: (e: FocusEvent) => void
    handleInputBlur: (e: FocusEvent) => void
    handlePanelTabOut: () => void
    handlePanelClose: (disableUpdateOnClose: boolean) => void
    handleRangeUpdateValue: (v: [string, string]) => void
    handleSingleUpdateValue: (v: string) => void
    handlePanelUpdateValue: (value: Value | null, doUpdate: boolean) => void
    handlePanelConfirm: () => void
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
        itemFontSize: string
        calendarDaysFontSize: string
        calendarTitleFontSize: string
        itemTextColor: string
        itemTextColorDisabled: string
        itemTextColorActive: string
        itemTextColorCurrent: string
        itemColorIncluded: string
        itemColorHover: string
        itemColorDisabled: string
        itemColorActive: string
        itemBorderRadius: string
        panelColor: string
        panelTextColor: string
        arrowColor: string
        calendarTitleTextColor: string
        calendarTitleColorHover: string
        calendarDaysTextColor: string
        panelHeaderDividerColor: string
        calendarDaysDividerColor: string
        calendarDividerColor: string
        panelActionDividerColor: string
        panelBoxShadow: string
        panelBorderRadius: string
        calendarTitleFontWeight: string
        scrollItemBorderRadius: string
        iconColor: string
        iconColorDisabled: string
        itemSize: string
        itemCellWidth: string
        itemCellHeight: string
        scrollItemWidth: string
        scrollItemHeight: string
        panelExtraFooterPadding: string
        panelActionPadding: string
        calendarTitlePadding: string
        calendarTitleHeight: string
        arrowSize: string
        panelHeaderPadding: string
        calendarDaysHeight: string
        calendarTitleGridTempateColumns: string
        calendarLeftPaddingDate: string
        calendarLeftPaddingDatetime: string
        calendarLeftPaddingDaterange: string
        calendarLeftPaddingDatetimerange: string
        calendarLeftPaddingMonth: string
        calendarLeftPaddingYear: string
        calendarLeftPaddingQuarter: string
        calendarLeftPaddingMonthrange: string
        calendarLeftPaddingQuarterrange: string
        calendarLeftPaddingYearrange: string
        calendarRightPaddingDate: string
        calendarRightPaddingDatetime: string
        calendarRightPaddingDaterange: string
        calendarRightPaddingDatetimerange: string
        calendarRightPaddingMonth: string
        calendarRightPaddingYear: string
        calendarRightPaddingQuarter: string
        calendarRightPaddingMonthrange: string
        calendarRightPaddingQuarterrange: string
        calendarRightPaddingYearrange: string
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
        TimePicker: import('../../_mixins').Theme<
          'TimePicker',
          {
            panelColor: string
            panelBoxShadow: string
            panelDividerColor: string
            itemTextColor: string
            itemTextColorActive: string
            itemColorHover: string
            itemOpacityDisabled: string
            itemBorderRadius: string
            borderRadius: string
            iconColor: string
            iconColorDisabled: string
            itemFontSize: string
            itemHeight: string
            itemWidth: string
            panelActionPadding: string
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
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
        TimePicker?:
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
                    Button?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                    Input?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
      }
    }>
    actions: import('vue').ComputedRef<string[] | undefined>
    triggerCssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-icon-color-override': string
          '--n-icon-color-disabled-override': string
        }>
      | undefined
    triggerThemeClass: Ref<string> | undefined
    triggerOnRender: (() => void) | undefined
    cssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-panel-border-radius': string
          '--n-panel-color': string
          '--n-panel-box-shadow': string
          '--n-panel-text-color': string
          '--n-panel-header-padding': string
          '--n-panel-header-divider-color': string
          '--n-calendar-left-padding': string
          '--n-calendar-right-padding': string
          '--n-calendar-title-color-hover': string
          '--n-calendar-title-height': string
          '--n-calendar-title-padding': string
          '--n-calendar-title-font-size': string
          '--n-calendar-title-font-weight': string
          '--n-calendar-title-text-color': string
          '--n-calendar-title-grid-template-columns': string
          '--n-calendar-days-height': string
          '--n-calendar-days-divider-color': string
          '--n-calendar-days-font-size': string
          '--n-calendar-days-text-color': string
          '--n-calendar-divider-color': string
          '--n-panel-action-padding': string
          '--n-panel-extra-footer-padding': string
          '--n-panel-action-divider-color': string
          '--n-item-font-size': string
          '--n-item-border-radius': string
          '--n-item-size': string
          '--n-item-cell-width': string
          '--n-item-cell-height': string
          '--n-item-text-color': string
          '--n-item-color-included': string
          '--n-item-color-disabled': string
          '--n-item-color-hover': string
          '--n-item-color-active': string
          '--n-item-text-color-disabled': string
          '--n-item-text-color-active': string
          '--n-scroll-item-width': string
          '--n-scroll-item-height': string
          '--n-scroll-item-border-radius': string
          '--n-arrow-size': string
          '--n-arrow-color': string
          '--n-icon-color': string
          '--n-icon-color-disabled': string
        }>
      | undefined
    themeClass: Ref<string> | undefined
    onRender: (() => void) | undefined
    focus: () => void
    blur: () => void
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
      readonly to: {
        type: PropType<string | boolean | HTMLElement>
        default: undefined
      }
      readonly bordered: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly clearable: BooleanConstructor
      readonly updateValueOnClose: BooleanConstructor
      readonly defaultValue: PropType<Value | null>
      readonly defaultFormattedValue: PropType<FormattedValue | null>
      readonly defaultTime: PropType<DefaultTime>
      readonly disabled: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly placement: {
        readonly type: PropType<FollowerPlacement>
        readonly default: 'bottom-start'
      }
      readonly value: PropType<Value | null>
      readonly formattedValue: PropType<FormattedValue | null>
      readonly size: PropType<'small' | 'medium' | 'large'>
      readonly type: {
        readonly type: PropType<DatePickerType>
        readonly default: 'date'
      }
      readonly valueFormat: StringConstructor
      readonly separator: StringConstructor
      readonly placeholder: StringConstructor
      readonly startPlaceholder: StringConstructor
      readonly endPlaceholder: StringConstructor
      readonly format: StringConstructor
      readonly dateFormat: StringConstructor
      readonly timeFormat: StringConstructor
      readonly actions: PropType<('clear' | 'confirm' | 'now')[] | null>
      readonly shortcuts: PropType<Shortcuts>
      readonly isDateDisabled: PropType<IsDateDisabled>
      readonly isTimeDisabled: PropType<IsTimeDisabled>
      readonly show: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly panel: BooleanConstructor
      readonly ranges: PropType<Record<string, [number, number]>>
      readonly firstDayOfWeek: PropType<FirstDayOfWeek>
      readonly inputReadonly: BooleanConstructor
      readonly closeOnSelect: BooleanConstructor
      readonly status: PropType<FormValidationStatus>
      readonly timePickerProps: PropType<
        TimePickerProps | [TimePickerProps, TimePickerProps]
      >
      readonly onClear: PropType<() => void>
      readonly onConfirm: PropType<OnUpdateValue>
      readonly defaultCalendarStartTime: NumberConstructor
      readonly defaultCalendarEndTime: NumberConstructor
      readonly bindCalendarMonths: BooleanConstructor
      readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>
      readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>
      readonly 'onUpdate:formattedValue': PropType<
        MaybeArray<OnUpdateFormattedValue>
      >
      readonly onUpdateFormattedValue: PropType<
        MaybeArray<OnUpdateFormattedValue>
      >
      readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
      readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
      readonly onFocus: PropType<(e: FocusEvent) => void>
      readonly onBlur: PropType<(e: FocusEvent) => void>
      readonly onChange: PropType<MaybeArray<OnUpdateValue>>
      readonly theme: PropType<
        import('../../_mixins').Theme<
          'DatePicker',
          {
            itemFontSize: string
            calendarDaysFontSize: string
            calendarTitleFontSize: string
            itemTextColor: string
            itemTextColorDisabled: string
            itemTextColorActive: string
            itemTextColorCurrent: string
            itemColorIncluded: string
            itemColorHover: string
            itemColorDisabled: string
            itemColorActive: string
            itemBorderRadius: string
            panelColor: string
            panelTextColor: string
            arrowColor: string
            calendarTitleTextColor: string
            calendarTitleColorHover: string
            calendarDaysTextColor: string
            panelHeaderDividerColor: string
            calendarDaysDividerColor: string
            calendarDividerColor: string
            panelActionDividerColor: string
            panelBoxShadow: string
            panelBorderRadius: string
            calendarTitleFontWeight: string
            scrollItemBorderRadius: string
            iconColor: string
            iconColorDisabled: string
            itemSize: string
            itemCellWidth: string
            itemCellHeight: string
            scrollItemWidth: string
            scrollItemHeight: string
            panelExtraFooterPadding: string
            panelActionPadding: string
            calendarTitlePadding: string
            calendarTitleHeight: string
            arrowSize: string
            panelHeaderPadding: string
            calendarDaysHeight: string
            calendarTitleGridTempateColumns: string
            calendarLeftPaddingDate: string
            calendarLeftPaddingDatetime: string
            calendarLeftPaddingDaterange: string
            calendarLeftPaddingDatetimerange: string
            calendarLeftPaddingMonth: string
            calendarLeftPaddingYear: string
            calendarLeftPaddingQuarter: string
            calendarLeftPaddingMonthrange: string
            calendarLeftPaddingQuarterrange: string
            calendarLeftPaddingYearrange: string
            calendarRightPaddingDate: string
            calendarRightPaddingDatetime: string
            calendarRightPaddingDaterange: string
            calendarRightPaddingDatetimerange: string
            calendarRightPaddingMonth: string
            calendarRightPaddingYear: string
            calendarRightPaddingQuarter: string
            calendarRightPaddingMonthrange: string
            calendarRightPaddingQuarterrange: string
            calendarRightPaddingYearrange: string
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
            TimePicker: import('../../_mixins').Theme<
              'TimePicker',
              {
                panelColor: string
                panelBoxShadow: string
                panelDividerColor: string
                itemTextColor: string
                itemTextColorActive: string
                itemColorHover: string
                itemOpacityDisabled: string
                itemBorderRadius: string
                borderRadius: string
                iconColor: string
                iconColorDisabled: string
                itemFontSize: string
                itemHeight: string
                itemWidth: string
                panelActionPadding: string
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
      readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'DatePicker',
            {
              itemFontSize: string
              calendarDaysFontSize: string
              calendarTitleFontSize: string
              itemTextColor: string
              itemTextColorDisabled: string
              itemTextColorActive: string
              itemTextColorCurrent: string
              itemColorIncluded: string
              itemColorHover: string
              itemColorDisabled: string
              itemColorActive: string
              itemBorderRadius: string
              panelColor: string
              panelTextColor: string
              arrowColor: string
              calendarTitleTextColor: string
              calendarTitleColorHover: string
              calendarDaysTextColor: string
              panelHeaderDividerColor: string
              calendarDaysDividerColor: string
              calendarDividerColor: string
              panelActionDividerColor: string
              panelBoxShadow: string
              panelBorderRadius: string
              calendarTitleFontWeight: string
              scrollItemBorderRadius: string
              iconColor: string
              iconColorDisabled: string
              itemSize: string
              itemCellWidth: string
              itemCellHeight: string
              scrollItemWidth: string
              scrollItemHeight: string
              panelExtraFooterPadding: string
              panelActionPadding: string
              calendarTitlePadding: string
              calendarTitleHeight: string
              arrowSize: string
              panelHeaderPadding: string
              calendarDaysHeight: string
              calendarTitleGridTempateColumns: string
              calendarLeftPaddingDate: string
              calendarLeftPaddingDatetime: string
              calendarLeftPaddingDaterange: string
              calendarLeftPaddingDatetimerange: string
              calendarLeftPaddingMonth: string
              calendarLeftPaddingYear: string
              calendarLeftPaddingQuarter: string
              calendarLeftPaddingMonthrange: string
              calendarLeftPaddingQuarterrange: string
              calendarLeftPaddingYearrange: string
              calendarRightPaddingDate: string
              calendarRightPaddingDatetime: string
              calendarRightPaddingDaterange: string
              calendarRightPaddingDatetimerange: string
              calendarRightPaddingMonth: string
              calendarRightPaddingYear: string
              calendarRightPaddingQuarter: string
              calendarRightPaddingMonthrange: string
              calendarRightPaddingQuarterrange: string
              calendarRightPaddingYearrange: string
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
              TimePicker: import('../../_mixins').Theme<
                'TimePicker',
                {
                  panelColor: string
                  panelBoxShadow: string
                  panelDividerColor: string
                  itemTextColor: string
                  itemTextColorActive: string
                  itemColorHover: string
                  itemOpacityDisabled: string
                  itemBorderRadius: string
                  borderRadius: string
                  iconColor: string
                  iconColorDisabled: string
                  itemFontSize: string
                  itemHeight: string
                  itemWidth: string
                  panelActionPadding: string
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
          >
        >
      >
      readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'DatePicker',
            {
              itemFontSize: string
              calendarDaysFontSize: string
              calendarTitleFontSize: string
              itemTextColor: string
              itemTextColorDisabled: string
              itemTextColorActive: string
              itemTextColorCurrent: string
              itemColorIncluded: string
              itemColorHover: string
              itemColorDisabled: string
              itemColorActive: string
              itemBorderRadius: string
              panelColor: string
              panelTextColor: string
              arrowColor: string
              calendarTitleTextColor: string
              calendarTitleColorHover: string
              calendarDaysTextColor: string
              panelHeaderDividerColor: string
              calendarDaysDividerColor: string
              calendarDividerColor: string
              panelActionDividerColor: string
              panelBoxShadow: string
              panelBorderRadius: string
              calendarTitleFontWeight: string
              scrollItemBorderRadius: string
              iconColor: string
              iconColorDisabled: string
              itemSize: string
              itemCellWidth: string
              itemCellHeight: string
              scrollItemWidth: string
              scrollItemHeight: string
              panelExtraFooterPadding: string
              panelActionPadding: string
              calendarTitlePadding: string
              calendarTitleHeight: string
              arrowSize: string
              panelHeaderPadding: string
              calendarDaysHeight: string
              calendarTitleGridTempateColumns: string
              calendarLeftPaddingDate: string
              calendarLeftPaddingDatetime: string
              calendarLeftPaddingDaterange: string
              calendarLeftPaddingDatetimerange: string
              calendarLeftPaddingMonth: string
              calendarLeftPaddingYear: string
              calendarLeftPaddingQuarter: string
              calendarLeftPaddingMonthrange: string
              calendarLeftPaddingQuarterrange: string
              calendarLeftPaddingYearrange: string
              calendarRightPaddingDate: string
              calendarRightPaddingDatetime: string
              calendarRightPaddingDaterange: string
              calendarRightPaddingDatetimerange: string
              calendarRightPaddingMonth: string
              calendarRightPaddingYear: string
              calendarRightPaddingQuarter: string
              calendarRightPaddingMonthrange: string
              calendarRightPaddingQuarterrange: string
              calendarRightPaddingYearrange: string
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
              TimePicker: import('../../_mixins').Theme<
                'TimePicker',
                {
                  panelColor: string
                  panelBoxShadow: string
                  panelDividerColor: string
                  itemTextColor: string
                  itemTextColorActive: string
                  itemColorHover: string
                  itemOpacityDisabled: string
                  itemBorderRadius: string
                  borderRadius: string
                  iconColor: string
                  iconColorDisabled: string
                  itemFontSize: string
                  itemHeight: string
                  itemWidth: string
                  panelActionPadding: string
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
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
    readonly type: DatePickerType
    readonly show: boolean | undefined
    readonly disabled: boolean | undefined
    readonly to: string | boolean | HTMLElement
    readonly bordered: boolean | undefined
    readonly placement: FollowerPlacement
    readonly clearable: boolean
    readonly inputReadonly: boolean
    readonly panel: boolean
    readonly updateValueOnClose: boolean
    readonly closeOnSelect: boolean
    readonly bindCalendarMonths: boolean
  }
>
export default _default
