import { h, defineComponent, onBeforeUnmount, toRef, watch } from 'vue'
import { NConfigProvider, configProviderProps } from 'naive-ui'
import { merge } from 'lodash-es'
import { renderFilter, renderSorter } from './data-table'
import { unconfigurableStyle, mountSvgDefs } from './unconfigurable-style-light'
import {
  unconfigurableStyle as unconfigurableDarkStyle,
  mountSvgDefs as mountSvgDarkDefs
} from './unconfigurable-style-dark'
import { themeOverridesLight } from './theme-overrides-light'
import { themeOverridesDark } from './theme-overrides-dark'
import { icons as tusimpleIcons } from './icons'
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
    renderFilter,
    renderSorter
  },
  DynamicInput: {
    buttonSize: 'small'
  }
}
export default defineComponent({
  name: 'TsConfigProvider',
  props: Object.assign(
    {
      themeName: {
        type: String,
        default: 'light'
      }
    },
    configProviderProps
  ),
  setup(props) {
    let currentUnconfigurableStyle = null
    function mountLightTheme() {
      mountSvgDefs()
      currentUnconfigurableStyle = unconfigurableStyle
      unconfigurableStyle.mount({
        id: 'naive-ui/tusimple-theme'
      })
    }
    function mountDarkTheme() {
      mountSvgDarkDefs()
      currentUnconfigurableStyle = unconfigurableDarkStyle
      unconfigurableDarkStyle.mount({
        id: 'naive-ui/tusimple-theme'
      })
    }
    function unmountTheme() {
      if (currentUnconfigurableStyle) {
        currentUnconfigurableStyle.unmount()
      }
    }
    watch(
      toRef(props, 'themeName'),
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
    onBeforeUnmount(() => {
      unmountTheme()
    })
  },
  render() {
    const { $props } = this
    const { themeOverrides, componentOptions, icons, themeName } = $props
    const tusimpleThemeOverrides =
      themeName === 'light' ? themeOverridesLight : themeOverridesDark
    return h(
      NConfigProvider,
      Object.assign({ class: `ts-${themeName}-theme` }, $props, {
        themeOverrides: themeOverrides
          ? merge({}, tusimpleThemeOverrides, themeOverrides)
          : tusimpleThemeOverrides,
        componentOptions: componentOptions
          ? merge({}, tusimpleComponentOptions, componentOptions)
          : tusimpleComponentOptions,
        icons: icons ? merge({}, tusimpleIcons, icons) : tusimpleIcons
      }),
      this.$slots
    )
  }
})
