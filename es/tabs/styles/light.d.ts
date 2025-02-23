import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  colorSegment: string
  tabFontSizeCard: string
  tabTextColorLine: string
  tabTextColorActiveLine: string
  tabTextColorHoverLine: string
  tabTextColorDisabledLine: string
  tabTextColorSegment: string
  tabTextColorActiveSegment: string
  tabTextColorHoverSegment: string
  tabTextColorDisabledSegment: string
  tabTextColorBar: string
  tabTextColorActiveBar: string
  tabTextColorHoverBar: string
  tabTextColorDisabledBar: string
  tabTextColorCard: string
  tabTextColorHoverCard: string
  tabTextColorActiveCard: string
  tabTextColorDisabledCard: string
  barColor: string
  closeIconColor: string
  closeIconColorHover: string
  closeIconColorPressed: string
  closeColorHover: string
  closeColorPressed: string
  closeBorderRadius: string
  tabColor: string
  tabColorSegment: string
  tabBorderColor: string
  tabFontWeightActive: string
  tabFontWeight: string
  tabBorderRadius: string
  paneTextColor: string
  fontWeightStrong: string
  tabFontSizeSmall: string
  tabFontSizeMedium: string
  tabFontSizeLarge: string
  tabGapSmallLine: string
  tabGapMediumLine: string
  tabGapLargeLine: string
  tabPaddingSmallLine: string
  tabPaddingMediumLine: string
  tabPaddingLargeLine: string
  tabPaddingVerticalSmallLine: string
  tabPaddingVerticalMediumLine: string
  tabPaddingVerticalLargeLine: string
  tabGapSmallBar: string
  tabGapMediumBar: string
  tabGapLargeBar: string
  tabPaddingSmallBar: string
  tabPaddingMediumBar: string
  tabPaddingLargeBar: string
  tabPaddingVerticalSmallBar: string
  tabPaddingVerticalMediumBar: string
  tabPaddingVerticalLargeBar: string
  tabGapSmallCard: string
  tabGapMediumCard: string
  tabGapLargeCard: string
  tabPaddingSmallCard: string
  tabPaddingMediumCard: string
  tabPaddingLargeCard: string
  tabPaddingSmallSegment: string
  tabPaddingMediumSegment: string
  tabPaddingLargeSegment: string
  tabPaddingVerticalLargeSegment: string
  tabPaddingVerticalSmallCard: string
  tabPaddingVerticalMediumCard: string
  tabPaddingVerticalLargeCard: string
  tabPaddingVerticalSmallSegment: string
  tabPaddingVerticalMediumSegment: string
  tabGapSmallSegment: string
  tabGapMediumSegment: string
  tabGapLargeSegment: string
  panePaddingSmall: string
  panePaddingMedium: string
  panePaddingLarge: string
  closeSize: string
  closeIconSize: string
}
export type TabsThemeVars = ReturnType<typeof self>
declare const tabsLight: Theme<'Tabs', TabsThemeVars>
export default tabsLight
export type TabsTheme = typeof tabsLight
