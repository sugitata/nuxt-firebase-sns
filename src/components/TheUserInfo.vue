<template lang="html">
  <div class="userinfo">
    <div v-if="user">
      <div>
        <p>
          <strong>{{ user.displayName }}</strong>
        </p>
      </div>
    </div>
    <div v-else>
      <!-- <b-button
        variant="primary"
      > -->
        <a @click="callAuth">Signin with Google</a>
      <!-- </b-button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth'])
  }
}
</script>

<style lang="css">
</style>
