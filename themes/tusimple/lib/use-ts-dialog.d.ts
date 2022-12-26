import { DialogOptions, DialogReactive, DialogApi } from 'naive-ui'
export interface ExtendedApi {
  danger: (options: DialogOptions) => DialogReactive
}
export type TsDialogApi = DialogApi & ExtendedApi
declare function useDialog(): TsDialogApi
export { useDialog }
