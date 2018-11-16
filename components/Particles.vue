<template>
  <div>
    <!--no-ssr explained: https://github.com/creotip/vue-particles/issues/28-->
    <no-ssr>
      <vue-particles
        :particle-opacity="0.2"
        :particles-number="30"
        :particle-size="4"
        :lines-width="1"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        :click-effect="true"
        color="#dedede"
        shape-type="circle"
        lines-color="#dedede"
        hover-mode="grab"
        click-mode="push"
      />
    </no-ssr>
  </div>
</template>

<style lang="scss">
#particles-js {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
