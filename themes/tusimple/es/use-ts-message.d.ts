import { MessageOptions, MessageReactive, MessageApi } from 'naive-ui'
export interface ExtendedApi {
  danger: (content: string, options: MessageOptions) => MessageReactive
}
export type TsMessageApi = MessageApi & ExtendedApi
declare function useMessage(): TsMessageApi
export { useMessage }
