<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="top-logo sign-in">
          <div class="top-logo-wrap">
            <div class="path"></div>
            <img src="../../assets/icons/icon.svg" alt="logo" class="logo">
            <h1 class="big">Let’s check how much do you have today! </h1>
          </div>
        </div>

      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Log in</h2>
      </v-flex>
    </v-layout>
    <v-form ref="form" @submit.prevent="onSignin">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="email"
            name="input-2-3"
            single-line
            full-width
            hide-details
            v-model="email"
            type="email"
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="Password"
            name="input-2-3"
            single-line
            full-width
            hide-details
            v-model="password"
            type="password"
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn depressed type="submit">Log in to account</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <a href="#">Need a registration</a>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/') // redirect to main page after user click submit btn
      }
    }
  },
  methods: {
    onSignin () {
      // Vuex
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped lang="sass">
  .sign-in
    padding-bottom: 0
    .top-logo-wrap
      position: relative
  h2
    margin-bottom: 20px
  .btn
    margin-top: 10px
    margin-bottom: 20px
</style>
