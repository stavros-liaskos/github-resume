<template>
  <div class="contact z-3 section">
    <headline-animated
      :class="['text-center']"
      :content="'Let\'s talk'"/>

    <p class="desc text-center">
      Do you want to tell me something amazing?
      Do you have any questions?
      Don't hesitate to contact me at:
      <a 
        href="mailto:hello@stavrosliaskos.com" 
        target="_blank">hello@stavrosliaskos.com</a>
    </p>

    <br>

    <div class="mobile">
      <p class="text-center">Or follow me at:</p>

      <br>

      <social-links/>
    </div>
  </div>
</template>

<script>
import HeadlineAnimated from '~/components/HeadlineAnimated'
import SocialLinks from '~/components/SocialLinks'

export default {
  components: {
    SocialLinks,
    HeadlineAnimated
  }
}
</script>

<style lang="scss">
.contact {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .desc {
    white-space: pre-line;
  }

  ul {
    display: flex;
    justify-content: space-around;

    .fab {
      display: inline-block !important;
      cursor: pointer;
      font-size: 3rem;
      width: 30px;
    }
  }
}

@include breakpoint($breakpoint_screen_md) {
  .contact {
    .mobile {
      display: none;
    }
  }
}
</style>
