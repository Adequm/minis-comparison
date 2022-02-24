<template>
  <div 
    class="minis__content"
    :style="{ 
      minHeight: `${ appHeight }px`,
      gridTemplateRows
    }"
  >
    <Navigation
      :isDesktop="isDesktop"
      :isModeEditor="isModeEditor"
      :isModeCompare="isModeCompare"
      :isHistoryExist="!!lodash.size(savedHistory)"
      :isEditorDataExist="!!questions.length && priorities.length >= 2"
      :compareQuestionIndex="compareQuestionIndex"
      :compareMaxQuestionsIndex="questions.length"
      @removeFromHistory="removeFromHistoryHandler"
      @switchModeCompare="isModeCompare = !isModeCompare"
      @switchModeEditor="isModeEditor = !isModeEditor"
      @openModal="$emit('openModal', $event)"
    />

    <div class="minis__display">
      <LayoutCompare
        v-if="isModeCompare"
        :horizontal="isDesktop && appWidth >= 530"
        :appWidth="appWidth"
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
          ref="layoutHistory"
          :appWidth="appWidth"
          :bodyHeight="bodyHeight"
          :savedHistory="savedHistory"
          @changeSlide="slideIndexHistory = $event"
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
import Navigation from './app/Navigation';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'LayoutContent',

  components: {
    LayoutEditor,
    LayoutCompare,
    LayoutHistory,
    Navigation,
  },

  props: {
    appWidth: Number,
    appHeight: Number,
    bodyHeight: Number,
    isDesktop: Boolean,
  },

  data: () => ({
    lodash: _,
    isModeEditor: true,
    isModeCompare: false,
    compareQuestionIndex: 1,
    slideIndexHistory: 0,
    slideIndexEditor: 1,
    valueQuestion: '',
    valuePriority: '',
  }),

  watch: {
    isModeCompare() {
      this.compareQuestionIndex = 1;
    }
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
      'addToHistory', 
      'removeFromHistory',
      'addQuestion',
      'removeQuestion',
      'addPriority',
      'removePriority'
    ]),
    removeFromHistoryHandler() {
      this.removeFromHistory(this.slideIndexHistory);
      this.$refs.layoutHistory.deleteSlide(this.slideIndexHistory);
    },

    finishComparison(priorities) {
      this.addToHistory(priorities);
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

  .minis__display {
    padding: 20px;
    position: relative;
    z-index: 2;
    background-color: var(--content-bg-color);
    border-radius: 10px;
  }
}

@media screen and (min-width: 768px) {
  .minis__content {
    border-radius: 10px;
    clip-path: polygon(
      0 5px, 5px 0, calc(100% - 5px) 0, 100% 5px, 
      100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px)
    );
    .minis__display {
      padding-bottom: 30px;
    }
  }
}
</style>