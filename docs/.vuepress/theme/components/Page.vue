<template>
  <main class="page">
    <slot name="top"/>

    <Content/>
    <LinkFoot v-if="!$page.frontmatter.hideFooter"/>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>
    <slot name="bottom"/>
  </main>
</template>

<script>
  import LinkFoot from './LinkFoot'
  import { resolvePage } from '../util'

export default {
  props: ['sidebarItems'],
  components:{LinkFoot},
  mounted() {
    this.renderValine()
  },
  watch :{
    $route (a,b) {
      if(a.path!=b.path){
        this.renderValine()
      }
    }
  },
  computed: {

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    }
  },
  methods: {
    renderValine () {
      let $page = document.querySelector('.page')
      let vcomments = document.getElementById('vcomments')
      if(!vcomments){
        vcomments = document.createElement('div')
        vcomments.id = 'vcomments'
      }
      if(this.$page.frontmatter.hideFooter){
        vcomments.remove();
      }else{
        if ($page && !vcomments){
          $page.appendChild(vcomments)
        }else{
          $page = document.querySelector('.page')
          $page.appendChild(vcomments)
        }
        this.valine()
      }
    },
    valine () {
      const Valine = require('valine')
      const leancloudStorage = require('leancloud-storage')
      // require window
      if (typeof window !== 'undefined') {
        window.AV = leancloudStorage
      }
      // 初始化valine
      new Valine({
        el: '#vcomments' ,
        appId: '***************-*******',// your appId
        appKey: '***************', // your appKey
        verify:false,
        notify:true,
        visitor: true,
        avatar:'wavatar',
        placeholder: '春霄苦短，少女前进吧！' +'\n'+
                '夜は短し歩けよ乙女！' +'\n'+
                'Yoru wa Mijikashi Arukeyo Otome!' +'\n'+
                'The Night is Short, Walk on Girl!',
        path: window.location.pathname
      });
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...item.children || [])
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

#vcomments{

  width: 68%;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.page
  padding-bottom 2rem
  display block

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

</style>
