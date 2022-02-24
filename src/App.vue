<template>
  <div 
    class="container" 
    :style="{ 
      height: `${ innerHeight }px`, 
      maxWidth: innerWidth < 768 ? '100vw' : `${ containerWidth }px`
    }"
  >
    <Icon v-if="!isPageLoad" type="loader" class="loader" rotate/>

    <div v-else class="minis__wrapper">
      <SettingsDesktop
        v-if="isDesktop"
        :themeIcon="themeMain.icon"
        v-model="isClosedSettings"
        @switchTheme="switchTheme"
        @switchLang="switchLang"
      />

      <LayoutContent
        :appWidth="appWidth" 
        :appHeight="appHeight"
        :bodyHeight="innerHeight"
        :isDesktop="isDesktop"
        :style="{ filter: openedModalName ? 'blur(2px)' : 'none' }"
        @switchSettings="isClosedSettings = !isClosedSettings"
        @updateInputFocus="onInputFocus = $event"
        @openModal="openedModalName = $event"
      />

      <AppModal v-model="openedModalName">
        <SettingsMobile 
          v-if="openedModalName == 'settings'"
          :themeIcon="themeMain.icon"
          @switchTheme="switchTheme"
          @switchLang="switchLang"
        />
      </AppModal>

      <div class="resize_button" @mousedown.prevent="startResize"/>
      <a href="https://adequm.github.io/minis" target="_blank" class="minis">Minis</a>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';
import minisMixin from './mixins/minis.mixin';
import Icon from './components/app/Icon';
import SettingsDesktop from './components/app/SettingsDesktop';
import SettingsMobile from './components/app/SettingsMobile';
import AppModal from './components/app/AppModal';
import LayoutContent from './components/LayoutContent';

export default {
  components: {
    LayoutContent,
    AppModal,
    SettingsDesktop,
    SettingsMobile,
    Icon,
  },

  mixins: [minisMixin],

  data: () => ({
    containerWidth: 300,
    innerHeight: null,
    innerWidth: null,
    startResizeX: null,
    startResizeWidth: null,
    resizeHash: null,
    isClosedSettings: true,
    openedModalName: null,
    onInputFocus: false,
  }),

  watch: {
    isDesktop(isDesktop) {
      if(isDesktop && this.openedModalName == 'settings') {
        this.openedModalName = null;
        this.isClosedSettings = false;
      }
    }
  },

  computed: {
    isDesktop: ths => ths.innerWidth >= 768,
    appWidth: ths => ths.isDesktop ? ths.containerWidth : ths.innerWidth,
    appHeight: ths => ths.isDesktop ? 560 : ths.innerHeight,
  },

  methods: {
    setContainerWidth({ pageX }) {
      requestAnimationFrame(() => {
        if(_.isNull(this.startResizeX) || _.isNull(this.startResizeWidth)) return;
        const containerWidth = pageX - this.startResizeX + this.startResizeWidth;
        this.containerWidth = _.clamp(containerWidth, 300, 600);
      })
    },

    startResize(event) {
      this.startResizeX = event.pageX;
      this.startResizeWidth = this.containerWidth;
      document.addEventListener('mousemove', this.setContainerWidth);
      document.addEventListener('mouseup', this.stopResize);
      window.addEventListener('mouseleave', this.stopResize);
    },

    stopResize() {
      this.startResizeX = null;
      this.startResizeWidth = null;
      document.removeEventListener('mousemove', this.setContainerWidth);
      document.removeEventListener('mouseup', this.stopResize);
      window.removeEventListener('mouseleave', this.stopResize);
    },
  },

  beforeMount() {
    const updateInnerSize = () => {
      this.innerWidth = document.body.offsetWidth;
      if(this.onInputFocus) return;
      this.innerHeight = innerHeight;
    }

    updateInnerSize();
    window.addEventListener('resize', updateInnerSize);
    setInterval(updateInnerSize, 1000);
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

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  outline: none;
  color: inherit;
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

    .minis__wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      box-shadow: 0 3px 0 2px var(--main-bg-color);
      border-radius: 10px;
      box-sizing: border-box;

      .minis {
        display: none;
        position: relative;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: var(--special-color);
        opacity: .5;
        cursor: pointer;
        transition: opacity .2s;
        text-decoration: none;
        border: none;
        outline: none;
        width: 50px;
        height: 30px;
        bottom: 30px;
        margin: auto;
        z-index: 5;
        user-select: none; 
        &:hover { opacity: 1; }
        &:focus { color: var(--text-color); }
      }

      .resize_button {
        display: none;
      }
    }

  }
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@media screen and (min-width: 768px) {
  body {
    .container {
      max-height: 560px;
      margin: auto;

      .minis__wrapper {
        .minis {
          display: flex;
        }

        .resize_button {
          position: absolute;
          display: block;
          width: 10px;
          height: 10px;
          background: var(--special-color);
          transform: translateY(-100%);
          right: 0;
          z-index: 6;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          border-radius: 0 0 10px 0;
          cursor: w-resize;
        }
      }
    }
  }
}
</style>
