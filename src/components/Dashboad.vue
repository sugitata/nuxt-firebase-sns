<template lang="html">
  <div class="dashboad">
    <AppHeader />
    <div class="container">
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppHeader
  },
}
</script>

<style lang="scss" scoped>
</style>
