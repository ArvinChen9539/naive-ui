import rtlStyle from '../src/styles/rtl.cssr'
import { buttonRtl } from '../../button/styles/rtl'
import { spaceRtl } from '../../space/styles/rtl'
export const thingRtl = {
  name: 'Thing',
  style: rtlStyle,
  peers: [buttonRtl, spaceRtl]
}
