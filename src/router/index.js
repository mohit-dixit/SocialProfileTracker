import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import TrackerHome from '@/components/TrackerHome'
import GithubSearch from '@/components/Github/GithubSearch'
import StackSearch from '@/components/Stack/StackSearch'
import LinkedinSearch from '@/components/Linkedin/LinkedinSearch'
import TwitterSearch from '@/components/Twitter/TwitterSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/TrackerHome',
      name: 'TrackerHome',
      component: TrackerHome
    },
    {
      path: '/GithubSearch',
      name: 'GithubSearch',
      component: GithubSearch
    }
    ,
    {
      path: '/StackSearch',
      name: 'StackSearch',
      component: StackSearch
    }
    ,
    {
      path: '/LinkedinSearch',
      name: 'LinkedinSearch',
      component: LinkedinSearch
    }
    ,
    {
      path: '/TwitterSearch',
      name: 'TwitterSearch',
      component: TwitterSearch
    }
  ]
})
