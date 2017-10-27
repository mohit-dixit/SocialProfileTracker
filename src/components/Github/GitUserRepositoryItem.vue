<template>

    <div class="pinned-repo-item-content">

        <a :href="paramRepo.html_url" class="text-bold">
            <span class="repo">{{paramRepo.name}}</span>
        </a>
        </span>

        <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">{{paramRepo.description}}</p>

        <p class="mb-0 f6 text-gray">
            <span class="repo-language-color pinned-repo-meta" style="background-color:#ccc;"></span> {{paramRepo.language}}
            <a :href="paramRepo.html_url + '/stargazers'" class="pinned-repo-meta muted-link">
                <svg  :style="changeStarColor" aria-label="stars" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14">
                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path>
                </svg>
                {{paramRepo.stargazers_count}}
            </a>
            <a v-if="paramRepo.forks_count > 0" :href="paramRepo.html_url + '/network'" class="pinned-repo-meta muted-link">
                <svg aria-label="forks" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10">
                    <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
                {{paramRepo.forks_count}}
            </a>
        </p>
    </div>

</template>

<script>
    export default {
        name: 'appUserRepositoryItem',
        props: ['paramRepo', 'paramHideNonStar', 'hideNonFork'],
        computed: {
            changeStarColor: function(){
                return this.paramRepo.stargazers_count > 0 ? 'color:#ff8f00;' : '';
            }
        }
    }
</script>
