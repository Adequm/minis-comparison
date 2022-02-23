<template>
  <div class="minis__content">
    <Navigation
      :compareStep="compareStep"
      :compareMaxSteps="30"
      :isModeEditor="isModeEditor"
      :isModeCompare="isModeCompare"
      :isHistoryExist="!!lodash.size(savedHistory)"
      :isEditorDataExist="!!questions.length && priorities.length >= 2"
      @removeFromHistory="removeFromHistoryHandler"
      @switchModeCompare="isModeCompare = !isModeCompare"
      @switchModeEditor="isModeEditor = !isModeEditor"
    />

    <div class="minis__display">
      <LayoutCompare
        v-if="isModeCompare"
        :horizontal="isDesktop && appWidth >= 530"
        :appWidth="appWidth"
        :bodyHeight="bodyHeight"
        :questions="questions"
        :priorities="priorities"
        @nextStep="compareStep++"
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

import LayoutEditor from '../components/layouts/LayoutEditor';
import LayoutCompare from '../components/layouts/LayoutCompare';
import LayoutHistory from '../components/layouts/LayoutHistory';
import Navigation from '../components/app/Navigation';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Priorities',

  components: {
    LayoutEditor,
    LayoutCompare,
    LayoutHistory,
    Navigation,
  },

  props: {
    appWidth: Number,
    bodyHeight: Number,
    isDesktop: Boolean,
  },

  data: () => ({
    lodash: _,
    isModeEditor: true,
    isModeCompare: false,
    compareStep: 1,
    slideIndexHistory: 0,
    slideIndexEditor: 1,
    valueQuestion: '',
    valuePriority: '',
  }),

  computed: {
    ...mapState([
      'savedHistory', 
      'questions', 
      'priorities',
    ]),
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
  grid-template-rows: 15% 85%;
  height: inherit;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  font-size: 18px;
  box-shadow: 0 3px 0 2px var(--main-bg-color);
  position: relative;

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
    .minis__display {
      padding-bottom: 30px;
    }
  }
}
</style>