import { commonDark } from '../../_styles/common'
import { self } from './light'
const cardDark = {
  name: 'Card',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars)
    const { cardColor, modalColor, popoverColor } = vars
    commonSelf.colorEmbedded = cardColor
    commonSelf.colorEmbeddedModal = modalColor
    commonSelf.colorEmbeddedPopover = popoverColor
    return commonSelf
  }
}
export default cardDark
