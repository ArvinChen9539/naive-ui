import { CNode, CProperties } from 'css-render'
declare const namespace = 'n'
declare const prefix: string
declare const c: import('css-render').createCNode<
    import('css-render').CSelector
  >,
  find: import('css-render').CFindTarget
declare const cB: import('css-render').createCNode<
    string | import('css-render').CLazySelector<string>
  >,
  cE: import('css-render').createCNode<
    string | import('css-render').CLazySelector<string>
  >,
  cM: import('css-render').createCNode<
    string | import('css-render').CLazySelector<string>
  >,
  cNotM: import('css-render').createCNode<
    string | import('css-render').CLazySelector<string>
  >
declare function insideModal(style: CNode): CNode
declare function insidePopover(style: CNode): CNode
declare function asModal(style: CProperties): CNode
declare const cCB: typeof cB
export {
  c,
  cB,
  cE,
  cM,
  cNotM,
  cCB,
  insideModal,
  insidePopover,
  asModal,
  prefix,
  namespace,
  find
}
export { createKey } from './create-key'
