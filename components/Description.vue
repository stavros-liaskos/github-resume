<template>
  <div class="z-2">
    <div
      id="description"
      class="description section">
      <h1 class="desc-title">Hey, are you</h1>

      <vue-typer
        v-bind="{text: typedTxt}"
        initial-action="erasing"/>

      <h1 class="desc-title">creating resumes?</h1>

      <github-form/>
    </div>
  </div>
</template>

<script>
import GithubForm from '~/components/GithubForm.vue'

export default {
  components: {
    GithubForm
  },
  data() {
    return {
      isResumeReady: true
    }
  },

  computed: {
    typedTxt() {
      return ['bored of', 'tired of']
    },

    followers() {
      if (this.$store.state.resume.followers === 1) return 'follower'
      else return 'followers'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles';
.vue-typer {
  display: block;
  @extend .h1;
  @extend .bg-dark;

  .custom.char {
    &.typed {
      @extend .h1;
    }

    &.selected {
      @extend .h1;
      background: $color_medium_grey;
      color: $text_dark;
    }
  }

  .custom.caret {
    @extend .h1;
    background-color: $bg_light;
  }
}

.description {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh; // because .section uns  ets height for mobile

  .learn-more {
    position: absolute;
    bottom: 75px;
    width: 100%;
  }

  .fas {
    color: $link_dark;
  }

  .scroll-promt {
    display: none;
  }
}

@include breakpoint($breakpoint_screen_sm) {
  .description {
    text-align: center;

    .desc-title {
      margin: 0 $space_2;
    }

    .scroll-promt {
      display: inline;
    }
  }
}
</style>
