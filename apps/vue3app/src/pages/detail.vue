<template>
  <div>
    detail--vue3
  </div>
</template>

<script lang='ts'>
import { reactive,toRefs} from 'vue'
interface DataProps {}
export default {
    name: '',
    setup() {
        const data: DataProps = reactive({

        })
        const refData = toRefs(data);
        return {
            ...refData,
        }
      }
  };
</script>
<style scoped lang='scss'>
</style>