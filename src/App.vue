<template>
  <div 
    class="container" 
    :style="{ 
      height: `${ innerHeight }px`, 
      maxWidth: innerWidth < 768 ? '100vw' : `${ appWidth }px`
    }"
  >
    <Icon 
      v-if="!isPageLoad"
      type="loader"
      class="loader"
      rotate
    />
    <router-view
      v-else
      :themeIcon="themeMain.icon"
      :minisLang="minisLang"
      :appWidth="appWidth"
      :bodyWidth="innerWidth"
      :bodyHeight="innerHeight"
      @switchTheme="switchTheme"
      @switchLang="switchLang"
      @changeAppWidth="changeContainerAppWidth"
    />
  </div>
</template>

<script>
import minisMixin from './mixins/minis.mixin';
import Icon from './components/Icon.vue';

export default {
  components: {
    Icon,
  },

  mixins: [minisMixin],

  data: () => ({
    console,
    innerHeight: null,
    innerWidth: null,
    appWidth: 300,
  }),

  methods: {
    changeContainerAppWidth(val) {
      this.appWidth = Math.min(600, Math.max(val, 300));
    }
  },

  beforeMount() {
    this.innerHeight = innerHeight;
    this.innerWidth = innerWidth;
    window.addEventListener('resize', event => {
      this.innerHeight = innerHeight;
      this.innerWidth = innerWidth;
    })
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar{
  width: 5px; 
	background-color: var(--content-bg-color);
}
::-webkit-scrollbar-thumb{
  width: 5px; 
	background-color: var(--special-color); 
}
::selection {
	background: var(--special-color); 
}

body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  display: flex;
  background-image: url("assets/confetti.svg");
  background-repeat: repeat;
  background-position: center;
  background-color: #333;
  min-height: 100vh;
  overflow: hidden;

  .loader {
    width: 30%;
    height: 100%;
    margin: auto;
    display: block;
    opacity: .5;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
  }
}

@media screen and (min-width: 768px) {
  body {
    .container {
      max-height: 560px;
      margin: auto;
    }
  }
}
</style>
