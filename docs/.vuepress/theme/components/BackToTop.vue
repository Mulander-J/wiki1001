<template>
  <transition-group name="fade">
    <svg
      v-if="topShow"
      class="go-to-top"
      key="goTop"
      @click="scrollToTop"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284"
    >
      <g transform="translate(-229 -126.358)">
        <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)"/>
        <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)"/>
      </g>
    </svg>
    <svg
            v-if="endShow"
            class="go-to-top go-to-end"
            @click="scrollToEnd"
            key="goEnd"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284"
    >
      <g transform="translate(-229 -126.358)">
        <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)"/>
        <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)"/>
      </g>
    </svg>
  </transition-group>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },

  data () {
    return {
      scrollTop: null,
      scrollEnd: null
    }
  },

  mounted () {
    this.scrollTop = this.getScrollTop()
    this.scrollEnd = this.getScrollEnd()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
      this.scrollEnd = this.getScrollEnd()
    }, 100))
  },

  methods: {
    getScrollTop () {
      return window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0
    },

    getScrollEnd () {
      return document.documentElement.scrollHeight ||
              document.body.scrollHeight || this.threshold
    },

    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    },
    scrollToEnd () {
      window.scrollTo({ top: this.scrollEnd, behavior: 'smooth' })
      this.scrollTop = this.scrollEnd
    }
  },

  computed: {
    topShow () {
      return this.scrollTop > this.threshold
    },
    endShow () {
      return (this.scrollEnd - this.scrollTop) > 3*this.threshold
    }
  }
}
</script>

<style lang='stylus' scoped>
.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 5rem;
  right: 2.5rem;
  width: 2rem;
  color: $accentColor;
  z-index: 1;
}
.go-to-end{
  bottom: 2rem;
  transform: rotateZ(180deg);
}
.go-to-top:hover {
  color: lighten($accentColor, 30%);
}

@media (max-width: 959px) {
  .go-to-top {
    display: none;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
