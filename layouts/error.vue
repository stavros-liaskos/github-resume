<template>
  <div class="z-3 text-center section-secondary">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>Ooops, An error occurred!</h1>
    <br>
    <go-home/>
  </div>
</template>

<script>
import GoHome from '~/components/GoHome'

export default {
  components: {
    GoHome
  },

  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles';
@import '../assets/styles';

// add properties to the parent .container (note that "scoped" is removed from <style>)
.container {
  display: flex; // stretch div to fit parent height
}
</style>
