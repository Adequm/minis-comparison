<template>
  <div class="wrapper">
    <div class="priorities">

      <div class="settings" :class="{ isClosedSettings }">
        <Icon type="settings" @click="isClosedSettings = !isClosedSettings"/>
        <Icon :type="themeIcon" @click="$emit('switchTheme', 'main')"/>
        <Icon type="heart" @click="$emit('switchTheme', 'special')"/>
        <Icon type="globe" @click="$emit('switchLang')"/>
      </div>

      <div class="priorities__buttons" style="grid-template-columns: 2fr 1fr;">
        <div 
          class="priorities__button"
          v-text="isModeEditor ? 'История' : 'Редактор'"
          @click="isModeEditor = !isModeEditor"
        />
        <div 
          class="priorities__button priorities__button-special"
          :disabled="!isModeEditor"
        >
          <Icon type="send"/>
        </div>
      </div>

      <Priorities_ModeEditor
        ref="modeEditor"
        v-show="isModeEditor"
        :appWidth="appWidth"
        :bodyWidth="bodyWidth"
        :bodyHeight="bodyHeight"
        :isDesktop="bodyWidth >= 768"
        :isShow="isModeEditor"
      />
      <Priorities_ModeHistory
        ref="modeHistory"
        v-if="!isModeEditor"
        :appWidth="appWidth"
        :bodyWidth="bodyWidth"
        :bodyHeight="bodyHeight"
        :isDesktop="bodyWidth >= 768"
      />

      <div class="resize_button" @mousedown.prevent="startResize"/>
    </div>
    <a href="https://adequm.github.io/minis" target="_blank" class="minis">Minis</a>
  </div>
</template>

<script>
import Icon from './Icon';
import Priorities_ModeEditor from './Priorities_ModeEditor.vue';
import Priorities_ModeHistory from './Priorities_ModeHistory.vue';

export default {
  name: 'Priorities',

  components: {
    Icon,
    Priorities_ModeEditor,
    Priorities_ModeHistory,
  },

  props: {
    themeIcon: String,
    minisLang: String,
    appWidth: Number,
    bodyWidth: Number,
    bodyHeight: Number,
  },

  data: () => ({
    isModeEditor: true,
    isClosedSettings: true,
    isResize: false,
    startX: null,
  }),

  methods: {
    setAppWidth({ pageX }) {
      requestAnimationFrame(() => {
        const appWidth = pageX - this.startResizeX + this.startResizeWidth;
        this.$emit('changeAppWidth', appWidth);
      })
    },

    startResize(event) {
      this.startResizeX = event.pageX;
      this.startResizeWidth = this.appWidth;
      document.addEventListener('mousemove', this.setAppWidth);
      document.addEventListener('mouseup', this.stopResize);
      window.addEventListener('mouseleave', this.stopResize);
    },

    stopResize() {
      this.startResizeX = null;
      this.startResizeWidth = null;
      document.removeEventListener('mousemove', this.setAppWidth);
      document.removeEventListener('mouseup', this.stopResize);
      window.removeEventListener('mouseleave', this.stopResize);
    },

    keydown({ key, shiftKey }) {
      switch(key) {
        case 'Escape':
          this.isClosedSettings = !this.isClosedSettings;
          break;
        // case 'ArrowLeft':
        //   this.swiperPage = 0;
        //   break;
        // case 'ArrowRight':
        //   this.swiperPage = 1;
        //   break;
      }
    },
  },

  beforeMount() {
    document.addEventListener('keydown', this.keydown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;

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
    width: 50px;
    height: 30px;
    bottom: 30px;
    margin: auto;
    z-index: 5;
    user-select: none; 
    &:hover {
      opacity: 1;
    }
  }

  .priorities {
    display: grid;
    grid-template-rows: 15% 85%;
    height: 100%;
    background-color: var(--main-bg-color);
    color: var(--text-color);
    font-size: 18px;
    box-shadow: 0 3px 0 2px var(--main-bg-color);
    position: relative;

    .settings {
      display: grid;
      align-items: center;
      justify-items: center;
      position: absolute;
      width: calc((100vw - 100px)/4);
      grid-auto-rows: 50px;
      max-width: 50px; 
      min-height: 35%;
      left: 0;
      z-index: 3;
      &.isClosedSettings {
        & > svg:nth-child(1) { opacity: 1; }
        & > svg:nth-child(n+2) { display: none; }
      }
      & > svg {
        cursor: pointer;
        width: 100%;
        &:nth-child(1) { opacity: .5; }
        &:nth-child(n+2) { opacity: 1; }
      }
    }

    &__buttons {
      user-select: none; 
      padding: 20px;
      border-radius: 10px;
      display: grid;
      grid-auto-flow: column dense;
      gap: 20px;
      box-sizing: border-box;
      z-index: 5;

      .priorities__button {
        cursor: pointer;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: var(--content-bg-color);
        user-select: none; 
        &:hover { opacity: .8;}
        &-special {
          background-color: var(--special-color);
          color: #F3F3F3;
        }
        &[disabled] {
          cursor: default;
          color: var(--main-bg-color);
          background-color: var(--content-bg-color);
        }
      }
    }

    .resize_button {
      display: none;
    }
  }
}



@media screen and (min-width: 768px) {
  .wrapper {
    .minis {
      display: flex;
    }
    .priorities {
      border-radius: 10px;

      .settings {
        align-content: center;
        left: calc(100% + 20px);
        color: var(--special-color);
        z-index: 1;
        &::after, &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--main-bg-color);
          border-radius: 10px;
          z-index: -1;
          transition: transform .2s;
        }
        &::before {
          transform: translateX(calc(-100% - 18px));
          z-index: 1;
        }
        & > svg {
          transition: transform .2s;
          opacity: 1;
          &:nth-child(1) { 
            opacity: 1;
            position: absolute;
            bottom: 100%;
            right: calc(50% + 10px);
            transition: transform .5s;
            &:hover {
              transform: rotate(90deg);
            }
          }
        }
        &.isClosedSettings {
          &::after, & > svg:nth-child(n+2) {
            display: block;
            transform: translateX(calc(-100% - 20px))
          }
        }
      }

      .resize_button {
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        background: var(--special-color);
        bottom: 0;
        right: 0;
        z-index: 6;
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        border-radius: 0 0 10px 0;
        cursor: w-resize;
      }
    }
  }
}
</style>