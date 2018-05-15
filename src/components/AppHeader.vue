<template>
  <div class="app-header d-flex align-items-center">
    <div class="mx-3 mr-auto">
      <h3>Sample project</h3>
    </div>
    <div v-if="user" class="app-header__account d-flex align-items-center mx-3">
      <span class="mx-2">{{ this.user.displayName }}</span>
      <b-button
        variant="primary"
        @click="callSingOut"
        class="mx-2"
      >
        Sign out
      </b-button>
    </div>
    <div v-else class="app-header__account d-flex mx-3">
      <b-button
        variant="primary"
        @click="callSignIn"
        class="mx-2"
      >
        Signin with Google
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callSignIn', 'callSingOut'])
  }
}

</script>

<style lang="scss" scoped>
.app-header {
  height: 3.5rem;
  overflow: hidden;
  background-color: #2890c8;
  color: #fff;
}
</style>
