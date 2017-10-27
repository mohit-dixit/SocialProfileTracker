<template>

    <div class="userProfile">


        <a :href="'https://github.com/' + paramUserProfile.login" target="_blank" class="vcard-avatar d-block">
            <img alt="" class="avatar width-full rounded-2" height="230" :src="paramUserProfile.avatar_url" width="230">
        </a>


        <div class="vcard-names-container py-3 is-placeholder" style="visibility: hidden; display: none; height: 86px;"></div>
        <div class="vcard-names-container py-3" style="position: static; top: 0px; left: 442.5px; width: 229px;">
            <h1 class="vcard-names">
                <span class="vcard-fullname d-block" itemprop="name">{{paramUserProfile.name}}</span>
                <span class="vcard-username d-block" itemprop="additionalName">{{paramUserProfile.login}}</span>
            </h1>
        </div>

        <div class="user-profile-bio">
            <div v-if="paramUserProfile.bio">{{paramUserProfile.bio}}</div>
        </div>


        <ul class="vcard-details border-top border-gray-light py-3">
            <li v-if="paramUserProfile.company" class="vcard-detail pt-1">
                <svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                    <path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"></path>
                </svg>
                <div>{{paramUserProfile.company}}</div>
            </li>

            <li v-if="paramUserProfile.location" class="vcard-detail pt-1">
                <svg aria-hidden="true" class="octicon octicon-location" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                    <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                </svg>
                {{paramUserProfile.location}}
            </li>


        </ul>


    </div>


</template>

<script>
    export default {
        name: 'appUserProfile',
        props: ['paramUserProfile'],
    }
</script>

<style>

</style>
