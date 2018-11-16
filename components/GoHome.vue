<template>
  <nuxt-link
    :style="[property]"
    to="/"><h4 class="link">Go back to home <i class="fas fa-undo-alt"/></h4>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      default: function() {
        return { textAlign: 'right' }
      }
    }
  }
}
</script>
