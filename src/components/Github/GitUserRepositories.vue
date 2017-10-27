<template>
<div class="repositoryContainer">

    <div class="position-relative col-12 clear-fix mt-4 mb-6">
            <h2 class=" d-block f4 text-normal">Filter</h2>

            <div class="mt-1 d-block clear-fix">
                <div class="checkbox mr-3 d-block float-left">
                    <input id="hideNonStar" name="hideNonStar" type="checkbox" v-model="hideNonStar">
                    <label for="hideNonStar">Hide non-star</label>
                </div>

                <div class="checkbox mr-3 d-block float-left">
                    <input id="hideNonFork" name="hideNonFork" type="checkbox" v-model="hideNonFork">
                    <label for="hideNonFork">Hide non-fork</label>
                </div>
            </div>

    </div>

    <div class="position-relative col-12 clear-fix mt-0 border-top">
        <div class="mt-4">
            <h2 class="f4 mb-2 text-normal">Repositories</h2>

            <ol class="pinned-repos-list mb-4">

                <li v-for="repo in userRepositories" v-show="itemIsHidden(repo)" class="pinned-repo-item p-3 mb-3 border border-gray-dark rounded-2 public source box-shadow">
                    <app-User-Repository-Item :paramRepo="repo" :paramHideNonStar="hideNonStar" :paramHideNonFork="hideNonFork"></app-User-Repository-Item>
                </li>
            </ol>
        </div>
    </div>


</div>
</template>

<script>
    import AppUserRepositoryItem from '../Github/GitUserRepositoryItem.vue'

    export default {
        name: 'appUserRepositories',
        props: ['userRepositories'],
        components: {
            AppUserRepositoryItem
        },
        data(){
            return {
                hideNonStar: false,
                hideNonFork: false
            }
        },
        methods: {
            itemIsHidden: function(item){
                let isHidden = true;

                if (this.hideNonStar){
                    if(item.stargazers_count == 0) isHidden = false;
                }

                if (this.hideNonFork){
                    if(item.forks_count == 0) isHidden = false;
                }

                return isHidden;
            }
        }
    }
</script>
