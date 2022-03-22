<template>
  <div 
    class="container" 
    :class="{ 
      fullscreen: isFullscreen || isFrame, 
      fullscreenFrame: isFullscreenInFrame,
    }"
    :style="{ 
      height: `${ innerHeight }px`, 
      maxHeight: isDesktop ? `${ containerHeight }px` : '100vh',
    }"
  >
    <AppLoader v-if="!isPageLoad" :size="100" rotate/>

    <div v-else class="frames__container">
      <input 
        id="checkboxFullscreen"
        style="display: none"
        type="checkbox"
        v-model="isFullscreenInFrame"
      />
      <div 
        v-for="(minis, minisIndex) of links"
        :key="`${minis}_${minisIndex}`"
        v-show="!isFullscreen || framePageIndex == minisIndex"
        class="minis__wrapper"
        :style="{ 
          width: `${ appWidth }px`,
          maxWidth: `${ minisWrapperMaxWidth }px`,
        }"
      >
        <SettingsDesktop
          v-if="!minisIndex && isDesktop && !isFrame"
          :themeIcon="themeMain.icon"
          :appHeight="appHeight"
          :appWidth="appWidth"
          :translate="translate"
          :translateDef="translateDef"
          :showHints="minisHints"
          v-model="isClosedSettings"
          @switchHints="switchHints"
          @switchTheme="switchTheme"
          @switchLang="switchLang"
          @switchFullscreen="$store.commit(switchFullscreenKey)"
        />

        <LayoutContent
          v-if="minis == projectKey"
          ref="layoutContent"
          :appIndex="appIndex"
          :appIndexLocal="minisIndex"
          :appWidth="appWidth" 
          :appHeight="appHeight"
          :bodyHeight="innerHeight"
          :isDesktop="isDesktop"
          :isFrame="isFrame"
          :isWidthMore768="isWidthMore768"
          :isShowSettingsButton="isShowSettingsButton"
          :style="{ filter: openedModalName ? 'blur(2px)' : 'none' }"
          @switchSettings="isClosedSettings = !isClosedSettings"
          @updateInputFocus="onInputFocus = $event"
          @openModal="openModal"
          @setSlideIndexHistory="slideIndexHistory = $event"
        />

        <LayoutFrame
          v-else
          :isResize="!!startResizeX"
          :link="`${ domen + minis }?index=${ minisIndex }`"
          :style="{ filter: openedModalName ? 'blur(2px)' : 'none' }"
          @load="initFrameSettingsWatcher(minisIndex)"
        />

        <AppModal
          v-if="!isFullscreen || framePageIndex == minisIndex"
          v-model="openedModalName"
          :isRoundedBorder="isWidthMore768 && !isFullscreen"
        >
          <SettingsMobile 
            v-if="openedModalName == 'settings'"
            :themeIcon="themeMain.icon"
            :title="translateChain(minis)('title')()"
            :showArrows="links.length > 1"
            :isWidthMore768="isWidthMore768"
            @switchTheme="switchTheme"
            @switchLang="switchLang"
            @switchFullscreen="$store.commit(switchFullscreenKey)"
            @clickToArrow="clickToArrow"
          />
          <div v-if="openedModalName == 'deletionConfirmation'" class="confirmation">
            <span v-text="translate('history.displays.history.buttonDeleteConfirm')"/>
            <strong v-text="getFormatDate(lodash.get(savedHistory[slideIndexHistory], 'date'))"/>
            <button v-text="translateDef('delete')" @click="removeFromHistoryHandler"/>
          </div>
        </AppModal>

        <div 
          v-show="isDesktop" 
          class="resize_button" 
          @mousedown.prevent="startResize"
          @dblclick.prevent="autoResize"
        />
        <a 
          v-if="isShowMinisButton" 
          href="https://adequm.github.io/minis" 
          target="_blank" 
          class="minis"
          v-text="'Minis'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import { AppLoader, AppModal, SettingsDesktop, SettingsMobile, LayoutFrame } from '@minis-core/components';
import { minisMixin, resizeMixin, faviconMixin, translateMixin, coreMixin, frameMixin } from '@minis-core/mixins';
import LayoutContent from './components/LayoutContent';

import { mapState } from 'vuex';

export default {
  components: {
    AppModal,
    AppLoader,
    SettingsDesktop,
    SettingsMobile,
    LayoutContent,
    LayoutFrame,
  },

  mixins: [
    minisMixin, 
    resizeMixin, 
    faviconMixin, 
    translateMixin,
    coreMixin,
    frameMixin,
  ],

  data: () => ({
    lodash: _,
    slideIndexHistory: 0,
  }),

  computed: {
    ...mapState([
      'switchFullscreenKey',
      'savedHistory'
    ]),
  },

  methods: {
    getFormatDate(dateNow) {
      if(!dateNow) return this.translate('error');
      const date = new Date(dateNow);
      const day = date.getDate().toString().padStart(2, 0);
      const month = (date.getMonth() + 1).toString().padStart(2, 0);
      const year = date.getFullYear();
      const hour = date.getHours().toString().padStart(2, 0);
      const minutes = date.getMinutes().toString().padStart(2, 0);
      return `${ day }.${ month }.${ year } | ${ hour }:${ minutes }`;
    },

    removeFromHistoryHandler() {
      _.each(this.$refs.layoutContent, layout => {
        layout.removeFromHistoryHandler(this.slideIndexHistory);
      })
      this.openedModalName = null;
    },
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 5px; 
	background-color: var(--content-bg-color);
}
::-webkit-scrollbar-thumb {
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

  .container {
    width: 100vw;
    margin: 0 auto;

    .frames__container {
      height: 100%; 
      display: flex; 
      justify-content: center; 
      gap: 20px; 
      flex-direction: row-reverse;
      .minis__wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        box-shadow: 0 3px 0 2px var(--main-bg-color);
        border-radius: 10px;
        box-sizing: border-box;

        .confirmation {
          display: flex;
          flex-direction: column;
          text-align: center;
          font-size: 18px;
          strong {
            color: var(--special-color);
          }
          button {
            margin-top: 10px;
            border-radius: 10px;
            padding: 10px;
            background: var(--special-color);
            cursor: pointer;
            &:hover {
              opacity: .8;
            }
          }
        }

        .minis {
          display: flex;
          position: absolute;
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
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 5;
          user-select: none; 
          &:hover { opacity: 1; }
          &:focus { color: var(--text-color); }
        }

        .resize_button {
          position: absolute;
          display: block;
          width: 10px;
          height: 10px;
          background: var(--special-color);
          transform: translateY(-100%);
          right: 0;
          top: 100%;
          z-index: 101;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          border-radius: 0 0 10px 0;
          cursor: se-resize;
        }
      }
    }
  }
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@media screen and (min-width: 768px) {
  body .container {
    margin: auto;
  }
}
</style>
