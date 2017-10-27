<template>

    <div class="user-profile-nav top-0 is-stuck">
        <nav class="underline-nav" data-pjax="" role="navigation">
            <a target="_blank" :href="'https://github.com/' + paramUserProfile.login + '?tab=repositories'" class="underline-nav-item selected">Repositories <span class="counter">{{paramUserProfile.public_repos}}</span></a>
            <a target="_blank" :href="'https://github.com/' + paramUserProfile.login + '?tab=stars'" class="underline-nav-item ">Gist <span class="counter">{{paramUserProfile.public_gists}}</span></a>
            <a target="_blank" :href="'https://github.com/' + paramUserProfile.login + '?tab=followers'" class="underline-nav-item ">Followers <span class="counter">{{paramUserProfile.followers}}</span></a>
            <a target="_blank" :href="'https://github.com/' + paramUserProfile.login + '?tab=following'" class="underline-nav-item ">Following <span class="counter">{{paramUserProfile.following}}</span></a>
        </nav>
    </div>

</template>

<script>
    export default {
        name: 'appUserProfileCounter',
        props: ['paramUserProfile']
    }
</script>


<style>
</style>
