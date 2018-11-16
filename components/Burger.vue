<template>
  <div 
    :class="{ active: isNavOpen }"
    class="burger-menu"
    @click="clickHandler()"
  >
    <span class="burger-menu-line"/>
    <span class="burger-menu-line"/>
    <span class="burger-menu-line"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isHovered: false
    }
  },

  mounted() {
    this.$root.$on('toggle.navigation.state', isNaviOpen => {
      this.isHovered = false
      if (this.isNavOpen) {
        setTimeout(() => {
          this.isNavOpen = false
        }, 700) // delay until css transition is complete
      } else {
        this.isNavOpen = true
      }
    })
  },

  methods: {
    clickHandler() {
      this.$root.$emit('toggle.navigation.state', this.isNavOpen) // send event to index page to handle slide effect
    }
  }
}
</script>

<style lang="scss">
// Burger menu variables
$burger_menu_width: $space_5;
$burger_menu_height: 24px;
$burger_menu_line_height_device: 1px;
$burger_menu_line_height_desktop: 2px;
$burger-menu-color: $color_white;

.burger-menu {
  position: absolute;
  top: $space_2;
  right: $space_2;
  width: $burger_menu_width;
  height: $burger_menu_height;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 99;
  overflow: hidden;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover {
    .burger-menu-line {
      transform: rotate3d(0, 1, 0.1, 180deg);
    }
  }

  .burger-menu-line:nth-child(1) {
    transition: all 0.5s ease 0s;
  }

  .burger-menu-line:nth-child(2) {
    transition: all 0.4s ease 0s;
  }

  .burger-menu-line:nth-child(3) {
    transition: all 0.3s ease 0s;
  }

  &.active {
    // rotate animation
    .burger-menu-line:nth-child(1) {
      transform: translateY(11px) translateX(0) rotate(45deg);
    }
    .burger-menu-line:nth-child(2) {
      opacity: 0;
    }
    .burger-menu-line:nth-child(3) {
      transform: translateY(-11px) translateX(0) rotate(-45deg);
    }

    &.hovered {
      // disable animation when hovered+active
      .burger-menu-line {
        animation: 0;
      }
    }
  }

  .burger-menu-line {
    display: block;
    width: 100%;
    background: $burger-menu-color;
    height: $burger_menu_line_height_device;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .burger-menu {
    top: $space_8;
    left: $space_2;
    width: $burger_menu_width;
    height: $burger_menu_height;

    .burger-menu-line {
      height: $burger_menu_line_height_desktop;
    }
  }
}
</style>
