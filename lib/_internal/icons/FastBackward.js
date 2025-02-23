'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
exports.default = (0, vue_1.defineComponent)({
  name: 'FastBackward',
  render() {
    return (0, vue_1.h)(
      'svg',
      {
        viewBox: '0 0 20 20',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      (0, vue_1.h)(
        'g',
        {
          stroke: 'none',
          'stroke-width': '1',
          fill: 'none',
          'fill-rule': 'evenodd'
        },
        (0, vue_1.h)(
          'g',
          { fill: 'currentColor', 'fill-rule': 'nonzero' },
          (0, vue_1.h)('path', {
            d: 'M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z'
          })
        )
      )
    )
  }
})
