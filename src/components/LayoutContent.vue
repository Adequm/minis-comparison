<template>
  <div 
    class="minis__content"
    :style="{ 
      minHeight: `${ appHeight }px`,
      gridTemplateRows
    }"
  >
    <AppNavigation
      :isFrame="isFrame"
      :isModeEditor="isModeEditor"
      :isModeCompare="isModeCompare"
      :isShowSettingsButton="isShowSettingsButton"
      :isHistoryExist="!!lodash.size(savedHistory)"
      :isEditorDataExist="!!lodash.size(questions) && lodash.size(priorities) >= 2"
      :isHistoryModeAnswers="isHistoryModeAnswers"
      :compareQuestionIndex="compareQuestionIndex"
      :compareMaxQuestionsIndex="lodash.size(questions)"
      @switchModeCompare="isModeCompare = !isModeCompare"
      @switchModeEditor="isModeEditor = !isModeEditor"
      @openModal="$emit('openModal', $event)"
      @switchModeHistory="isHistoryModeAnswers = !isHistoryModeAnswers"
    />

    <div class="minis__display">
      <LayoutCompare
        v-if="isModeCompare"
        :horizontal="isWidthMore768 && appWidth >= 530"
        :appWidth="appWidth"
        :appHeight="appHeight"
        :appIndex="appIndex"
        :appIndexLocal="appIndexLocal"
        :bodyHeight="bodyHeight"
        :questions="questions"
        :priorities="priorities"
        @nextStep="compareQuestionIndex++"
        @finish-comparison="finishComparison"
      />
      <template v-else>
        <LayoutEditor
          v-if="isModeEditor"
          :appWidth="appWidth"
          :appHeight="appHeight"
          :appIndex="appIndex"
          :appIndexLocal="appIndexLocal"
          :bodyHeight="bodyHeight"
          :questions="questions"
          :priorities="priorities"
          :valueQuestion="valueQuestion"
          :valuePriority="valuePriority"
          :slideIndex="slideIndexEditor"
          @changeSlide="slideIndexEditor = $event"
          @updateValueQuestion="valueQuestion = $event"
          @updateValuePriority="valuePriority = $event"
          @addPriority="addPriority"
          @addQuestion="addQuestion"
          @removeQuestion="removeQuestion"
          @removePriority="removePriority"
          @updateInputFocus="$emit('updateInputFocus', $event)"
        />
        <LayoutHistory
          v-if="!isModeEditor"
          :ref="`layoutHistory_${appIndex}_${appIndexLocal}`"
          :appWidth="appWidth"
          :appIndex="appIndex"
          :appIndexLocal="appIndexLocal"
          :bodyHeight="bodyHeight"
          :savedHistory="savedHistory"
          :isHistoryModeAnswers="isHistoryModeAnswers"
          @changeSlide="slideIndexHistory = $event"
          @openModal="$emit('openModal', $event)"
        />
      </template>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';

import LayoutEditor from './layouts/LayoutEditor';
import LayoutCompare from './layouts/LayoutCompare';
import LayoutHistory from './layouts/LayoutHistory';
import AppNavigation from './app/AppNavigation';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'LayoutContent',

  components: {
    LayoutEditor,
    LayoutCompare,
    LayoutHistory,
    AppNavigation,
  },

  props: {
    appIndex: [Number, String],
    appIndexLocal: [Number, String],
    appWidth: Number,
    appHeight: Number,
    bodyHeight: Number,
    isDesktop: Boolean,
    isWidthMore768: Boolean,
    isShowSettingsButton: Boolean,
    isFrame: Boolean,
  },

  data: () => ({
    lodash: _,
    isModeEditor: true,
    isModeCompare: false,
    isHistoryModeAnswers: false,
    compareQuestionIndex: 1,
    slideIndexHistory: 0,
    slideIndexEditor: 1,
    valueQuestion: '',
    valuePriority: '',
  }),

  watch: {
    isModeCompare() {
      this.compareQuestionIndex = 1;
    },
    slideIndexHistory(index) {
      this.$emit('setSlideIndexHistory', index);
    },
  },

  computed: {
    ...mapState([
      'savedHistory', 
      'questions', 
      'priorities',
    ]),
    gridTemplateRows() {
      const header = Math.min(this.appHeight * 0.15, 85);
      const content = this.appHeight - header;
      return `${ header }px ${ content }px`;
    },
  },

  methods: {
    ...mapMutations([
      'addToCompareHistory', 
      'removeFromHistory',
      'addQuestion',
      'removeQuestion',
      'addPriority',
      'removePriority'
    ]),
    removeFromHistoryHandler() {
      const layoutHistory = this.$refs[`layoutHistory_${this.appIndex}_${this.appIndexLocal}`];
      this.removeFromHistory(this.slideIndexHistory);
      _.invoke(layoutHistory, 'deleteSlide', this.slideIndexHistory);
    },

    finishComparison(priorities) {
      this.addToCompareHistory(priorities);
      this.isModeEditor = false;
      this.isModeCompare = false;
    },

    keydown({ key, shiftKey }) {
      switch(key) {
        case 'Escape':
          this.$emit('switchSettings');
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
.swiper-container, 
.swiper-wrapper, 
.swiper-slide {
  height: 100% !important;
}

.swiper-horizontal {
  .swiper-wrapper {
    display: grid !important;
    grid-auto-flow: column !important;
  }
}

.swiper-vertical {
  .swiper-wrapper {
    display: block !important;
    grid-auto-flow: column !important;
  }
}

.minis__content {
  display: grid;
  height: inherit;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  font-size: 18px;
  position: relative;
  top: 0;
  z-index: 1;
  width: inherit;
  max-width: inherit;

  .minis__display {
    padding: 20px;
    position: relative;
    z-index: 2;
    background-color: var(--content-bg-color);
    border-radius: 10px;
    width: inherit;
    max-width: inherit;
    box-sizing: border-box;
  }
}

@media screen and (min-width: 768px) {
  .container:not(.fullscreen) .minis__content {
    border-radius: 10px;
    clip-path: polygon(
      0 5px, 5px 0, calc(100% - 5px) 0, 101% 5px, 
      101% calc(100% - 5px), calc(100% - 5px) 101%, 5px 101%, 0 calc(100% - 5px)
    );
  }
  .container:not(.fullscreen):not(.fullscreenFrame) .minis__content .minis__display {
    padding-bottom: 30px;
  }
}
</style>