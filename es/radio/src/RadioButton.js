import { h, defineComponent } from 'vue'
import { resolveWrappedSlot } from '../../_utils'
import { setup, radioProps } from './use-radio'
export const radioButtonProps = radioProps
export default defineComponent({
  name: 'RadioButton',
  props: radioProps,
  setup,
  render() {
    const { mergedClsPrefix } = this
    return h(
      'label',
      {
        class: [
          `${mergedClsPrefix}-radio-button`,
          this.mergedDisabled && `${mergedClsPrefix}-radio-button--disabled`,
          this.renderSafeChecked && `${mergedClsPrefix}-radio-button--checked`,
          this.focus && [`${mergedClsPrefix}-radio-button--focus`]
        ]
      },
      h('input', {
        ref: 'inputRef',
        type: 'radio',
        class: `${mergedClsPrefix}-radio-input`,
        value: this.value,
        name: this.mergedName,
        checked: this.renderSafeChecked,
        disabled: this.mergedDisabled,
        onChange: this.handleRadioInputChange,
        onFocus: this.handleRadioInputFocus,
        onBlur: this.handleRadioInputBlur
      }),
      h('div', { class: `${mergedClsPrefix}-radio-button__state-border` }),
      resolveWrappedSlot(this.$slots.default, (children) => {
        if (!children && !this.label) return null
        return h(
          'div',
          { ref: 'labelRef', class: `${mergedClsPrefix}-radio__label` },
          children || this.label
        )
      })
    )
  }
})
