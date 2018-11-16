<template>
  <div
    class="form-container z-1">

    <div class="form-input">
      <input
        id="github-username"
        v-model="name"
        :placeholder="placeholder"
        type="text"
        required="required"
        value=""
        @keyup="hasErrorClass($event.target.value.length)">
      <span class="form-input-line"/>
      <label
        :class="{ error: isError }"
        for="github-username">{{ placeholder }}</label>
    </div>

    <button
      class="m-t-2"
      @click="submit()">Generate!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '', // data for the name on the form,
      resume: {}, // resume data,
      placeholder: 'Github username here', // form's configurable placeholder
      isError: false
    }
  },

  methods: {
    hasErrorClass(length) {
      if (!length) {
        this.$store.commit('saveIsNotFound', false)
        this.placeholder = 'Github username here'
      }
      this.isError = this.$store.state.isNotFound
    },
    submit() {
      this.$http.get('https://api.github.com/users/' + this.name).then(
        response => {
          const user_API = JSON.parse(response.bodyText)

          this.resume.name = user_API.name
          this.resume.website = user_API.blog
          this.resume.location = user_API.location
          this.resume.url = user_API.html_url
          this.resume.public_repos = user_API.public_repos
          this.resume.followers = user_API.followers
          this.resume.repos_url = user_API.repos_url

          this.$store.commit('saveResume', this.resume)

          this.$router.push('/cv')
        },
        response => {
          this.placeholder = JSON.parse(response.bodyText).message
          this.isError = true
          this.$store.commit('saveIsNotFound', true)
        }
      )
    }
  }
}
</script>



<style lang="scss">
@import '../assets/styles';

.form-container {
  width: 100%;
  margin: auto;

  button {
    height: 38px;
  }

  .error {
    color: $color_error;
  }
}

@include breakpoint($breakpoint_screen_sm) {
  .form-container {
    width: 500px;

    .form-input {
      float: left;
    }

    button {
      float: right;
      margin: 0;
    }
  }
}

// MATERIAL FORM SIMULATION
// https://codepen.io/stavros-liaskos/pen/oMeqVp?editors=1100
$animation_duration: 0.3s;

input {
  margin-left: -#{$space_5};
  margin-right: $space_3;
  box-shadow: none;
  outline: none;
}

.form-input {
  position: relative;
  margin-top: $space_3;
  width: 300px;

  .form-input-line {
    content: '';
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: $color_white;
    transition: width #{$animation_duration} linear;
  }

  label {
    @extend .text-s;

    position: absolute;
    top: -#{$space_3};
    left: 0;
    opacity: 0;
    color: $color_white;
    margin: 0;
    transition: opacity #{$animation_duration} ease-in-out,
      transform #{$animation_duration} ease-in-out;
  }

  input {
    display: block;
    border: none;
    padding: $space_2 0;
    border-bottom: solid 1px $link_dark;
    color: $text_light;
    width: 100%;

    &:focus,
    &:valid,
    &:not([value='']):not(:focus):invalid,
    &:optional {
      box-shadow: none;
      outline: none;

      & ~ .form-input-line {
        width: 100%;
      }
    }

    &:valid ~ label {
      opacity: 1;
      transform: translateY(-#{$space_1});
    }
  }
}
</style>
