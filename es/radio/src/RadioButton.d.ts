import { ExtractPublicPropTypes } from '../../_utils'
import { radioProps } from './use-radio'
export declare const radioButtonProps: {
  readonly name: StringConstructor
  readonly value: {
    readonly type: import('vue').PropType<string | number | boolean>
    readonly default: 'on'
  }
  readonly checked: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly defaultChecked: BooleanConstructor
  readonly disabled: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly label: StringConstructor
  readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
  readonly onUpdateChecked: import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  readonly 'onUpdate:checked': import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  readonly checkedValue: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
}
export type RadioButtonProps = ExtractPublicPropTypes<typeof radioProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly name: StringConstructor
    readonly value: {
      readonly type: import('vue').PropType<string | number | boolean>
      readonly default: 'on'
    }
    readonly checked: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly defaultChecked: BooleanConstructor
    readonly disabled: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly label: StringConstructor
    readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
    readonly onUpdateChecked: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    readonly 'onUpdate:checked': import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    readonly checkedValue: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
  },
  import('./use-radio').UseRadio,
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
      readonly name: StringConstructor
      readonly value: {
        readonly type: import('vue').PropType<string | number | boolean>
        readonly default: 'on'
      }
      readonly checked: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly defaultChecked: BooleanConstructor
      readonly disabled: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly label: StringConstructor
      readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
      readonly onUpdateChecked: import('vue').PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
      >
      readonly 'onUpdate:checked': import('vue').PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
      >
      readonly checkedValue: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
    }>
  >,
  {
    readonly value: string | number | boolean
    readonly disabled: boolean | undefined
    readonly checked: boolean | undefined
    readonly defaultChecked: boolean
    readonly checkedValue: boolean | undefined
  }
>
export default _default
