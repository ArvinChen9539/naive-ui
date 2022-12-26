'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const naive_ui_1 = require('naive-ui')
const lodash_es_1 = require('lodash-es')
const data_table_1 = require('./data-table')
const unconfigurable_style_light_1 = require('./unconfigurable-style-light')
const unconfigurable_style_dark_1 = require('./unconfigurable-style-dark')
const theme_overrides_light_1 = require('./theme-overrides-light')
const theme_overrides_dark_1 = require('./theme-overrides-dark')
const icons_1 = require('./icons')
const tusimpleComponentOptions = {
  Pagination: {
    inputSize: 'medium'
  },
  DatePicker: {
    timePickerSize: 'medium'
  },
  Dialog: {
    iconPlacement: 'top'
  },
  DataTable: {
    renderFilter: data_table_1.renderFilter,
    renderSorter: data_table_1.renderSorter
  },
  DynamicInput: {
    buttonSize: 'small'
  }
}
exports.default = (0, vue_1.defineComponent)({
  name: 'TsConfigProvider',
  props: Object.assign(
    {
      themeName: {
        type: String,
        default: 'light'
      }
    },
    naive_ui_1.configProviderProps
  ),
  setup(props) {
    let currentUnconfigurableStyle = null
    function mountLightTheme() {
      ;(0, unconfigurable_style_light_1.mountSvgDefs)()
      currentUnconfigurableStyle =
        unconfigurable_style_light_1.unconfigurableStyle
      unconfigurable_style_light_1.unconfigurableStyle.mount({
        id: 'naive-ui/tusimple-theme'
      })
    }
    function mountDarkTheme() {
      ;(0, unconfigurable_style_dark_1.mountSvgDefs)()
      currentUnconfigurableStyle =
        unconfigurable_style_dark_1.unconfigurableStyle
      unconfigurable_style_dark_1.unconfigurableStyle.mount({
        id: 'naive-ui/tusimple-theme'
      })
    }
    function unmountTheme() {
      if (currentUnconfigurableStyle) {
        currentUnconfigurableStyle.unmount()
      }
    }
    ;(0, vue_1.watch)(
      (0, vue_1.toRef)(props, 'themeName'),
      (themeName) => {
        if (themeName === 'light') {
          unmountTheme()
          mountLightTheme()
        } else {
          unmountTheme()
          mountDarkTheme()
        }
      },
      {
        immediate: true
      }
    )
    ;(0, vue_1.onBeforeUnmount)(() => {
      unmountTheme()
    })
  },
  render() {
    const { $props } = this
    const { themeOverrides, componentOptions, icons, themeName } = $props
    const tusimpleThemeOverrides =
      themeName === 'light'
        ? theme_overrides_light_1.themeOverridesLight
        : theme_overrides_dark_1.themeOverridesDark
    return (0, vue_1.h)(
      naive_ui_1.NConfigProvider,
      Object.assign({ class: `ts-${themeName}-theme` }, $props, {
        themeOverrides: themeOverrides
          ? (0, lodash_es_1.merge)({}, tusimpleThemeOverrides, themeOverrides)
          : tusimpleThemeOverrides,
        componentOptions: componentOptions
          ? (0, lodash_es_1.merge)(
              {},
              tusimpleComponentOptions,
              componentOptions
            )
          : tusimpleComponentOptions,
        icons: icons
          ? (0, lodash_es_1.merge)({}, icons_1.icons, icons)
          : icons_1.icons
      }),
      this.$slots
    )
  }
})
