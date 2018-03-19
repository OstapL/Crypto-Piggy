<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="top-logo sign-up">
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
        <h2>Sign up</h2>
      </v-flex>
    </v-layout>
    <v-form @submit.prevent="signUp">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="Email"
            name="email"
            single-line
            full-width
            hide-details
            v-model="email"
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="Password"
            name="password"
            single-line
            full-width
            hide-details
            v-model="password"
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="RePassword"
            name="password2"
            single-line
            full-width
            hide-details
            v-model="password2"
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn depressed type="submit">Create account</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <a href="#">Already registered</a>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      password2: null
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', {email: this.email, password: this.password, password2: this.password2})
    }
  }
}
</script>

<style scoped lang="sass">
  .sign-up
    padding-bottom: 0
    .top-logo-wrap
      position: relative
  h2
    margin-bottom: 20px
  .btn
    margin-top: 10px
    margin-bottom: 20px
</style>
