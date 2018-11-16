<template>
  <footer class="footer z-3 container text-center">
    <div class="m-y-5">
      <logo/>
    </div>

    <div class="footer-lower">
      <span class="text-light footer-item">© {{ dateYear }} Stavros Liaskos</span>

      <nuxt-link
        class=" footer-item"
        to="/privacy-policy">Privacy Policy </nuxt-link>
      <nuxt-link
        class=" footer-item"
        to="/terms-and-conditions">Terms and Conditions </nuxt-link>
      <nuxt-link
        class=" footer-item"
        to="/sitemap.xml">Sitemap </nuxt-link>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      dateYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  min-height: unset !important; // unset it from .container
  height: $footer_height;
  position: relative;

  .logo {
    width: 50px;
  }
}

.footer-lower {
  display: flex;
  flex-direction: column;

  .footer-item {
    margin-top: $space_2;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .footer-lower {
    display: block;

    .footer-item {
      float: right;
      margin-left: $space_3;

      &:first-child {
        float: left;
        margin-left: 0;
      }
    }
  }
}
</style>
