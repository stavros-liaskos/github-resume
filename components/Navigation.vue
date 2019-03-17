<template>
  <div
    :class="{ active: isNavOpen}"
    class="navigation z-1">
    <navi-toolbar/>

    <div class="menu-container">
      <div class="menu-wrapper">

        <div class="">
          Hover me:
        </div>

        <ul class="menu-list">

          <li class="menu-item">
            <nuxt-link
              class="item-link text-light underline h1 flip"
              to="/"
              @click.native="toggleMenu()">Home
            </nuxt-link>
          </li>

          <li class="menu-item">
            <nuxt-link
              class="item-link text-light underline h1 flip"
              to="/about"
              @click.native="toggleMenu()">About
            </nuxt-link>
          </li>

          <li class="menu-item">
            <nuxt-link
              class="item-link text-light underline h1 flip"
              to="/contact"
              @click.native="toggleMenu()">Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NaviToolbar from './NaviToolbar.vue'

export default {
  components: {
    NaviToolbar
  },

  data() {
    return {
      isNavOpen: false
    }
  },

  mounted() {
    this.initNavigationListener()
  },

  methods: {
    initNavigationListener() {
      this.$root.$on('toggle.navigation.state', isNaviOpen => {
        this.isNavOpen = !isNaviOpen
      })
    },

    toggleMenu() {
      this.$root.$emit('toggle.navigation.state', this.isNavOpen) // send event to index page to handle slide effect
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles';
$navi_slide_out_time: 0.8s;

.navigation {
  background: $color_black;
  position: fixed !important; // makes sure that position:relative from .z-2 is overwritten
  height: 100%;
  top: -100%;
  left: 0;
  right: 0;
  transition: top $navi_slide_out_time ease-out;

  &.active {
    // slide down effect in device
    top: 0;

    .menu-container .menu-wrapper .flip {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }

  .menu-container {
    height: 100%;
    text-align: center;
    padding: 12% 0;

    .menu-wrapper {
      height: 100%;

      .flip {
        position: relative;
        display: inline-block;
        opacity: 0;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        perspective: 1000px;
        transform: rotateY(180deg);
        transition: all 0.3s linear $navi_slide_out_time;
      }

      .menu-list {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
      }

      .menu-item {
        display: inline-block;
        margin: 0;
        width: auto;
      }
    }
  }
}

@include breakpoint($breakpoint_screen_md) {
  .navigation {
    width: 100%;
    left: -100%;
    top: unset;
    transition: left $navi_slide_out_time ease-out;

    &.active {
      // slide right effect in device
      left: 0;
    }

    .menu-container {
      width: 90%;
      padding: 0;

      .menu-list {
        flex-direction: row;
      }
    }
  }
}
</style>
