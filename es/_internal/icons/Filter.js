import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'Filter',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 28 28',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      h(
        'g',
        { stroke: 'none', 'stroke-width': '1', 'fill-rule': 'evenodd' },
        h(
          'g',
          { 'fill-rule': 'nonzero' },
          h('path', {
            d: 'M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z'
          })
        )
      )
    )
  }
})
