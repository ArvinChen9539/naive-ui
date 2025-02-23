import { tagDark } from '../../tag/styles'
import { inputDark } from '../../input/styles'
import { buttonDark } from '../../button/styles'
import { spaceDark } from '../../space/styles'
import { commonDark } from '../../_styles/common'
const dynamicTagsDark = {
  name: 'DynamicTags',
  common: commonDark,
  peers: {
    Input: inputDark,
    Button: buttonDark,
    Tag: tagDark,
    Space: spaceDark
  },
  self() {
    return {
      inputWidth: '64px'
    }
  }
}
export default dynamicTagsDark
