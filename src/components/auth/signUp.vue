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
    <v-form ref="form">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="Email"
            name="input-2-3"
            single-line
            full-width
            hide-details
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
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn depressed>Create account</v-btn>
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
export default {

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
