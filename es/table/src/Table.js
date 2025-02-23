import { defineComponent, computed, h } from 'vue'
import { useConfig, useTheme, useThemeClass } from '../../_mixins'
import { useRtl } from '../../_mixins/use-rtl'
import { createKey } from '../../_utils'
import { tableLight } from '../styles'
import style from './styles/index.cssr'
export const tableProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: true
  },
  bottomBordered: {
    type: Boolean,
    default: true
  },
  singleLine: {
    type: Boolean,
    default: true
  },
  striped: Boolean,
  singleColumn: Boolean,
  size: {
    type: String,
    default: 'medium'
  }
})
export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } =
      useConfig(props)
    const themeRef = useTheme(
      'Table',
      '-table',
      style,
      tableLight,
      props,
      mergedClsPrefixRef
    )
    const rtlEnabledRef = useRtl('Table', mergedRtlRef, mergedClsPrefixRef)
    const cssVarsRef = computed(() => {
      const { size } = props
      const {
        self: {
          borderColor,
          tdColor,
          tdColorModal,
          tdColorPopover,
          thColor,
          thColorModal,
          thColorPopover,
          thTextColor,
          tdTextColor,
          borderRadius,
          thFontWeight,
          lineHeight,
          borderColorModal,
          borderColorPopover,
          tdColorStriped,
          tdColorStripedModal,
          tdColorStripedPopover,
          [createKey('fontSize', size)]: fontSize,
          [createKey('tdPadding', size)]: tdPadding,
          [createKey('thPadding', size)]: thPadding
        },
        common: { cubicBezierEaseInOut }
      } = themeRef.value
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-td-color': tdColor,
        '--n-td-color-modal': tdColorModal,
        '--n-td-color-popover': tdColorPopover,
        '--n-td-text-color': tdTextColor,
        '--n-border-color': borderColor,
        '--n-border-color-modal': borderColorModal,
        '--n-border-color-popover': borderColorPopover,
        '--n-border-radius': borderRadius,
        '--n-font-size': fontSize,
        '--n-th-color': thColor,
        '--n-th-color-modal': thColorModal,
        '--n-th-color-popover': thColorPopover,
        '--n-th-font-weight': thFontWeight,
        '--n-th-text-color': thTextColor,
        '--n-line-height': lineHeight,
        '--n-td-padding': tdPadding,
        '--n-th-padding': thPadding,
        '--n-td-color-striped': tdColorStriped,
        '--n-td-color-striped-modal': tdColorStripedModal,
        '--n-td-color-striped-popover': tdColorStripedPopover
      }
    })
    const themeClassHandle = inlineThemeDisabled
      ? useThemeClass(
          'table',
          computed(() => {
            return props.size[0]
          }),
          cssVarsRef,
          props
        )
      : undefined
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass:
        themeClassHandle === null || themeClassHandle === void 0
          ? void 0
          : themeClassHandle.themeClass,
      onRender:
        themeClassHandle === null || themeClassHandle === void 0
          ? void 0
          : themeClassHandle.onRender
    }
  },
  render() {
    var _a
    const { mergedClsPrefix } = this
    ;(_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this)
    return h(
      'table',
      {
        class: [
          `${mergedClsPrefix}-table`,
          this.themeClass,
          {
            [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
            [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
            [`${mergedClsPrefix}-table--bordered`]: this.bordered,
            [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
            [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
            [`${mergedClsPrefix}-table--striped`]: this.striped
          }
        ],
        style: this.cssVars
      },
      this.$slots
    )
  }
})
