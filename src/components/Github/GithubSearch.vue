<template>

  <div id="app">
    <app-header :paramUserName="userName" v-on:FetchProfile="handleFetchProfile"></app-header>

    <div class="loading" v-if="loading"><img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64"></div>

    <div v-if="errorIsActive" class="container-lg clearfix px-3 mt-4">

      <h1>User Profile not found.</h1>
      <h3>Please enter a different username.</h3>

    </div>

    <div v-if="!errorIsActive" class="container-lg clearfix px-3 mt-4">
      <div class="col-3 float-left pr-3">

        <app-User-Profile :paramUserProfile="userProfile"></app-User-Profile>

      </div>
      <div class="col-9 float-left pl-2">

	     <app-User-Profile-Counter :paramUserProfile="userProfile"></app-User-Profile-Counter>

		 <div class="position-relative col-12 clear-fix mt-4 border-bottom ">
		   <p class="f6">
		   <b>"Github Search Profile app."</b>
		   <br/>Just a simple app, made with VueJS 2.x and built with Vue CLI.
		   If you like this project, you can
			<a href="https://github.com/tahaipek/VueJs-2-Github-Search-Profile/fork" target="_blank" class="btn btn-sm" title="Fork your own copy of tahaipek/VueJs-2-Github-Search-Profile to your account" >
				<svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
				Fork
			</a>
			or
			<a href="https://github.com/tahaipek/VueJs-2-Github-Search-Profile"  target="_blank" class="btn btn-sm" title="Star tahaipek/VueJs-2-Github-Search-Profile">
				<svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
				Star
			</a>
						  it on GitHub =))
		   </p>
	   </div>


        <app-User-Repositories :userRepositories="userRepositories" ></app-User-Repositories>

      </div>
    </div>
  </div>

</template>

<script>
  import css from '../../assets/github.css';
  import AppHeader from '../../components/Github/GitHeader.vue'
  import AppUserProfile from '../../components/Github/GitUserProfile.vue'
  import AppUserProfileCounter from '../../components/Github/GitUserProfileCounter.vue'
  import AppUserRepositories from '../../components/Github/GitUserRepositories.vue'


  const clientId = '60b9f23dedffbdfc476c';
  const clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppUserProfile,
      AppUserProfileCounter,
      AppUserRepositories,
    },
    data() {
      return {
        userName: 'mohit-dixit',
        errorIsActive: false,
        userProfile: {},
        userRepositories: [],
        loading: false
      }
    },
    methods: {
      handleFetchProfile(userName) {
        this.userName = userName //sub component property to this.data.userName
        this.fetchUserFromServices();
      },

      fetchUserFromServices() {
        this.loading = true;
        let githubUserApiurl = `https://api.github.com/users/${this.userName}?client_id=${clientId}&client_secret=${clientSecret}`;

        fetch(githubUserApiurl)
          .then((response) => {
            this.errorIsActive = !response.ok;
            return response.json()
          })
          .then((result) => {
            console.log(result);
            if (!result.message) {
              this.errorIsActive = false;
              this.loading = false;
            }
            this.userProfile = result;
            this.fetchUserRepositoriesFromServices();
            this.loading = false;

          }).catch((err) => {
            console.log(err);
            this.errorIsActive = true;
            this.loading = false;
          });

      },
      fetchUserRepositoriesFromServices() {
        this.loading = true;
        let githubUserRepoApiurl = `https://api.github.com/users/${this.userName}/repos?client_id=${clientId}&client_secret=${clientSecret}`;

        fetch(githubUserRepoApiurl)
          .then((response) => { return response.json() })
          .then((result) => {
            console.log(result);
            this.userRepositories = result;
            this.loading = false;
          });
      },

    },
    created(){
      this.fetchUserFromServices();
    }

  }
</script>

<style>
.loading{
  will-change: transform,opacity;
    -webkit-transition: opacity .25s ease,-webkit-transform .3s cubic-bezier(.4,0,.2,1);
    transition: opacity .25s ease,-webkit-transform .3s cubic-bezier(.4,0,.2,1);
    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .25s ease;
    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .25s ease,-webkit-transform .3s cubic-bezier(.4,0,.2,1);
  position:fixed; top:54px; bottom:0; left:0; right:0; background: rgba(0,0,0,0.4); z-index:9999;
  img{position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;}
}
</style>
