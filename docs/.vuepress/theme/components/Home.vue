<template>
    <main class="home" aria-labelledby="main-title">
          <header class="hero">
               <div class="model-left"></div>
               <div class="model-right"></div>
               <div style="position: relative;z-index: 2">
                   <img
                           v-if="data.heroImage"
                           :src="$withBase(data.heroImage)"
                           alt="hero"
                   >
                   <h1 id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>
                   <p class="description">
                       {{ data.tagline || $description || 'Welcome to your VuePress site' }}
                   </p>

                   <p
                           class="action"
                           v-if="data.actionText && data.actionLink"
                   >
                       <a :href="$withBase(actionLink.link)" class="nav-link action-button">
                           <span class="actionTxt">{{actionLink.text}}</span>
                           <span class="rainbow"></span>
                       </a>
                   </p>
               </div>
          </header>
          <div
                  class="features"
                  v-if="data.features && data.features.length"
          >
            <div
                    class="feature"
                    v-for="(feature, index) in data.features"
                    :key="index"
            >
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </div>
          </div>

          <Content class="custom"/>

          <div
                  class="footer"
                  v-if="data.footer"
          >
            {{ data.footer }}
          </div>
    </main>
</template>

<script>
import NavLink from './NavLink.vue'
import './../styles/homeBg.styl'
export default {

  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
  .home
    padding $navbarHeight 2rem 0
    max-width 980px
    margin 0px auto
    display block
    .hero
      text-align center
      position relative
      .home-bg
        height 100%
        width 100%
        max-width 100%
      img
        max-width: 100%
        max-height 280px
        display block
        margin 3rem auto 1.5rem
        border-radius: 50%;
        background-color: #fdfdfd;
        box-shadow:2px 5px 6px 0px #eee;
      h1
        font-size 3rem
      h1, .description, .action
        margin 1.8rem auto
      .description
        //max-width 35rem
        //color lighten($textColor, 40%)
        font-size 1.6rem
        line-height 1.3
        color: #ffffff;
        font-weight: 200;
        background: black;
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
      .action-button
        color: #fff;
        background :#000
        border: 3px solid #fff;
        border-radius: 50px;
        padding: 0.8rem 2rem;
        font: 24px "Margarine", sans-serif;
        outline: none;
        cursor: pointer;
        position: relative;
        transition: 0.2s ease-in-out;
        letter-spacing: 2px;
        display: inline-block;
        width : 10rem;
        .actionTxt
          animation: typing 4s steps(12) infinite;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
        .rainbow
            width: 120px;
            height: 120px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: -40px;
            transition: 0.5s ease;
            opacity: 0;
            transform: rotate(0);
        .rainbow:before
            content: "🌈";
            left: 0;
            position absolute
        &:hover
            .rainbow
              opacity: 1;
              animation: rotate-nonstop 0.2s infinite;
    .features
      border-top 1px solid $borderColor
      padding 1.2rem 0
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      align-items flex-start
      align-content stretch
      justify-content space-between
    .feature
      flex-grow 1
      flex-basis 30%
      max-width 30%
      h2
        font-size 1.4rem
        font-weight 500
        border-bottom none
        padding-bottom 0
        color lighten($textColor, 10%)
      p
        color lighten($textColor, 25%)
    .footer
      padding 2.5rem
      border-top 1px solid $borderColor
      text-align center
      color lighten($textColor, 25%)

  @keyframes rotate-nonstop{
      50% {
          transform: rotate(92deg);
      }
  }
  @keyframes typing{
      0% {
        width: 0;
      }
      50% {
        width: 100%;
      }
      55%, 65%, 75% {
        opacity: 1;
      }
      60%, 70% {
        opacity: 0;
      }
      80% {
        width: 100%;
      }
      100% {
        width: 0;
      }
  }

  @media (max-width: $MQMobile)
    .home
      .features
        flex-direction column
      .feature
        max-width 100%
        padding 0 2.5rem

  @media (max-width: $MQMobileNarrow)
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 2rem
        h1, .description, .action
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
      .feature
        h2
          font-size 1.25rem
</style>
