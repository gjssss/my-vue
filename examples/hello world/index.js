import { watchEffect, reactive } from '../../dist/my-vue.esm.js'

const a = reactive({
  val: 123,
})

watchEffect(() => {
  console.log('检测到依赖变化', a.val)
})

a.val = 456
