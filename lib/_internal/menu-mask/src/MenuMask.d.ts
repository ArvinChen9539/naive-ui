declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
  },
  {
    showOnce: (message: string, duration?: number | undefined) => void
    message: import('vue').Ref<string | null>
    show: import('vue').Ref<boolean>
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
      clsPrefix: {
        type: StringConstructor
        required: true
      }
    }>
  >,
  {}
>
export default _default
