<template lang="html">
  <section class="tracker-home">
    <div>
    <h1>Select Search</h1><router-link to="/">Log Out</router-link>
    </div>
    <router-link to="/GithubSearch"><img src="../assets/github.png" height="200" width="200" /></router-link>
    <router-link to="/StackSearch"><img src="../assets/stackoverflow.png" height="250" width="250" /></router-link>
    <router-link to="/LinkedInSearch"><img src="../assets/linkedin.png" height="200" width="200" /></router-link>
    <router-link to="/TwitterSearch"><img src="../assets/twitter.png" height="250" width="250" /></router-link>
  </section>
</template>

<script lang="js">
  export default {
    name: 'tracker-home',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped>
  .tracker-home {}
</style>
