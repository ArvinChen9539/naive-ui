import { Ref, Slots, UnwrapNestedRefs } from 'vue'
import { VirtualListInst } from 'vueuc'
import { NLocale, NDateLocale } from '../../locales'
import type { ScrollbarInst } from '../../_internal'
import type {
  IsHourDisabled,
  IsMinuteDisabled,
  IsSecondDisabled
} from '../../time-picker/src/interface'
import type { TimePickerProps } from '../../time-picker/src/TimePicker'
import type { MergedTheme } from '../../_mixins'
import type { DatePickerTheme } from '../styles/light'
import {
  uniCalendarValidation,
  dualCalendarValidation
} from './validation-utils'
export type Value = number | [number, number]
export type DefaultTime = string | [string | undefined, string | undefined]
export type FormattedValue = string | [string, string]
export type Shortcuts =
  | Record<string, number | (() => number)>
  | Record<
      string,
      | [number, number]
      | readonly [number, number]
      | (() => [number, number] | readonly [number, number])
    >
export type OnUpdateValue = (
  value: number &
    (number | null) &
    [number, number] &
    ([number, number] | null),
  formattedValue: string &
    (string | null) &
    [string, string] &
    ([string, string] | null)
) => void
export type OnConfirm = OnUpdateValue
export type OnConfirmImpl = OnUpdateValueImpl
export type OnUpdateFormattedValue = (
  value: string &
    (string | null) &
    [string, string] &
    ([string, string] | null),
  timestampValue: number &
    (number | null) &
    [number, number] &
    ([number, number] | null)
) => void
export type OnUpdateFormattedValueImpl = (
  value: string | [string, string] | null,
  timestampValue: number | [number, number] | null
) => void
export type OnUpdateValueImpl = (
  value: Value | null,
  formattedValue: string | [string, string] | null
) => void
export type OnPanelUpdateValue = (
  value: number &
    (number | null) &
    [number, number] &
    ([number, number] | null),
  doUpdate: boolean
) => void
export type OnPanelUpdateValueImpl = (
  value: Value | null,
  doUpdate: boolean
) => void
export type OnClose = (disableUpdateOnClose: boolean) => void
export interface RangePanelChildComponentRefs {
  startYearScrollbarRef: Ref<ScrollbarInst | null>
  endYearScrollbarRef: Ref<ScrollbarInst | null>
  startMonthScrollbarRef: Ref<ScrollbarInst | null>
  endMonthScrollbarRef: Ref<ScrollbarInst | null>
  startYearVlRef: Ref<VirtualListInst | null>
  endYearVlRef: Ref<VirtualListInst | null>
}
export interface PanelChildComponentRefs {
  monthScrollbarRef: Ref<ScrollbarInst | null>
  yearScrollbarRef: Ref<ScrollbarInst | null>
  yearVlRef: Ref<VirtualListInst | null>
}
export interface PanelRef
  extends Partial<
    UnwrapNestedRefs<PanelChildComponentRefs & RangePanelChildComponentRefs>
  > {
  $el: HTMLElement
}
export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type DatePickerInjection = {
  mergedClsPrefixRef: Ref<string>
  mergedThemeRef: Ref<MergedTheme<DatePickerTheme>>
  timePickerSizeRef: Ref<'small' | 'medium' | 'large'>
  timePickerPropsRef: Ref<
    undefined | TimePickerProps | [TimePickerProps, TimePickerProps]
  >
  localeRef: Ref<NLocale['DatePicker']>
  dateLocaleRef: Ref<NDateLocale>
  isDateDisabledRef: Ref<IsDateDisabled | undefined>
  rangesRef: Ref<Record<string, [number, number]> | undefined>
  closeOnSelectRef: Ref<boolean>
  updateValueOnCloseRef: Ref<boolean>
  firstDayOfWeekRef: Ref<FirstDayOfWeek | undefined>
  datePickerSlots: Slots
} & ReturnType<typeof uniCalendarValidation> &
  ReturnType<typeof dualCalendarValidation>
export declare const datePickerInjectionKey: import('vue').InjectionKey<DatePickerInjection>
export type IsDateDisabled = IsSingleDateDisabled | IsRangeDateDisabled
export type IsSingleDateDisabled = (date: number) => boolean
export type IsRangeDateDisabled = (
  date: number,
  position: 'start' | 'end',
  value: [number, number] | null
) => boolean
export interface TimeValidator {
  isHourDisabled?: IsHourDisabled
  isMinuteDisabled?: IsMinuteDisabled
  isSecondDisabled?: IsSecondDisabled
}
export type IsTimeDisabled = IsSingleTimeDisabled | IsRangeTimeDisabled
export type IsSingleTimeDisabled = (date: number) => TimeValidator
export type IsRangeTimeDisabled = (
  date: number,
  position: 'start' | 'end',
  value: [number, number]
) => TimeValidator
export interface DatePickerInst {
  focus: () => void
  blur: () => void
}
