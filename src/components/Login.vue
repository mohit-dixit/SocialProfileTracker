<template lang="html">
  <section class="login">
    <div class="divbody">
      <fieldset style="width:35%;">
        <legend>Login:</legend>
        <form v-on:submit="loginUser">
          <table style="margin-left: 40%; margin-top: 10%;">
            <tr>
              <td>Username</td>
              <td><input type="text" v-model="login.username" placeholder="User Name" name="username" required></td>
            </tr>
            <br>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" v-model="login.password" placeholder="Password" name="password" required>
              </td>
            </tr>
            <br>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Login">
                <br>
                <div class="clsValidator" v-if="isIncorrectCredential">
                  <i class="fa fa-close"></i> Incorrect Credentials!
                </div>
              </td>
            </tr>
          </table>
        </form>
      </fieldset>
    </div>
  </section>
</template>

<script lang="js">
import router from 'vue-router'
  export default {
    name: 'login',
    props: [],
    mounted() {

    },
    data() {
      return {
        login: {},
        isIncorrectCredential: false
      }
    },
    methods: {
      loginUser: function(e) {
         e.preventDefault();
        const matchUserName = 'aaa';
        const matchPassword = 'aaa';
        if ((matchUserName == this.login.username) && (matchPassword == this.login.password)) {
           this.$router.push('TrackerHome')
        } else {
          this.isIncorrectCredential = true;
        }
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .login {}

  .clsValidator {
    font-size: small;
    ;
    color: red;
  }
</style>
