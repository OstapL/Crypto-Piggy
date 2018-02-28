<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-form>
          <v-text-field
          placeholder="Email"
          name="input-2-3"
          single-line
          full-width
          hide-details
        ></v-text-field>
        <v-btn depressed>Create account</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Crypto Piggy</h1>
        <h2>Sign up</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <a href="#">Already registered</a>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

</script>

<style lang="sass">
  @import 'stylus/main'
</style>
