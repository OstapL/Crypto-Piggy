<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="top-logo home-page">
          <div class="top-logo-wrap">
            <div class="path"></div>
            <img src="../assets/icons/icon.svg" alt="logo" class="logo">
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-form ref="form">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            placeholder="Type wallet address"
            name="input-2-3"
            single-line
            full-width
            hide-details
        ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn depressed>Search</v-btn>
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
  h2
    margin-bottom: 20px
  .btn
    margin-top: 10px
    margin-bottom: 20px
  .home-page
    .top-logo-wrap
      img
        width: 100px

</style>
