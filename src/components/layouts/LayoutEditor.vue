<template>
  <div class="layout swiper-horizontal" id="layout-editor">

    <div class="layout__textarea_wrapper">
      <AppTextarea
        v-if="!slideIndex || isSlideHalf"
        ref="textareaQuestions"
        :resize="appWidth"
        :value="valueQuestion"
        :placeholder="textareaPlaceholderQuestions"
        :title="valueQuestion && textareaPlaceholderQuestions"
        @input="$emit('updateValueQuestion', $event)"
        @submit="$emit('updateValueQuestion', '') && $emit('addQuestion', $event)"
        @updateInputFocus="$emit('updateInputFocus', $event)"
      />
      <AppTextarea
        v-if="slideIndex || isSlideHalf"
        ref="textareaPriorities"
        :resize="appWidth"
        :value="valuePriority"
        :placeholder="textareaPlaceholderPriorities"
        :title="valuePriority && textareaPlaceholderPriorities"
        @input="$emit('updateValuePriority', $event)"
        @submit="$emit('updateValuePriority', '') && $emit('addPriority', $event)"
        @updateInputFocus="$emit('updateInputFocus', $event)"
      />
    </div>

    <div class="layout__display" :class="{ isEnd, isBeginning }">
      <div class="layout__display_content">
        <Swiper 
          ref="swiper" 
          :slidesPerView="isSlideHalf ? 2 : 1"
          @activeIndexChange="$emit('changeSlide', $event.realIndex)" 
        >
          <SwiperSlide>
            <div class="slide__container" :style="{ height: `${ slideHeight }px` }">
              <DisplayQuestions
                v-if="questions.length"
                :questions="questions"
                @remove="$emit('removeQuestion', $event)"
                @edit="edit('question', $event)"
              />
              <DisplayEmpty
                v-else
                :text="translate('editor.displays.questions.title')"
                icon="notebook"
                :button="questionsList.length && translate('editor.displays.questions.buttonAdd')"
                @click="questionsList.forEach(q => $emit('addQuestion', q))"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide__container" :style="{ height: `${ slideHeight }px` }">
              <DisplayPriorities
                v-if="priorities.length"
                :priorities="priorities"
                @remove="$emit('removePriority', $event)"
                @edit="edit('priority', $event)"
              />
              <DisplayEmpty
                v-else
                :text="translate('editor.displays.priorities.title')"
                icon="star"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <SlideButtons
        :limit="slideList.length"
        :isBeginning="isBeginning"
        :isEnd="isEnd"
        :value="slideIndex"
        @input="$emit('changeSlide', $event)"
      />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper-vue2';

import { SlideButtons, AppTextarea } from '@minis-core/components';
import { translateMixin } from '@minis-core/mixins';

import DisplayPriorities from '../display/DisplayPriorities';
import DisplayQuestions from '../display/DisplayQuestions';
import DisplayEmpty from '../display/DisplayEmpty';

export default {
  name: 'LayoutEditor',

  mixins: [translateMixin],

  components: {
    SlideButtons,
    AppTextarea,
    DisplayPriorities,
    DisplayQuestions,
    DisplayEmpty,
    Swiper,
    SwiperSlide,
  },

  props: {
    isShow: Boolean,
    appWidth: Number,
    appHeight: Number,
    bodyHeight: Number,
    questions: {
      type: Array,
      default: () => [],
    },
    priorities: {
      type: Array,
      default: () => [],
    },
    valueQuestion: String,
    valuePriority: String,
    slideIndex: Number,
  },

  data: () => ({
    swiperRef: null,
    slideHeight: 0,
    questionsList: [],
  }),

  watch: {
    appWidth: ['setSlideWidth', 'setSlideHeight'],
    appHeight: ['setSlideWidth', 'setSlideHeight'],
    textareaHeight: ['setSlideWidth', 'setSlideHeight'],
    slideIndex(slideIndex) {
      this.swiperRef.slideTo(this.isSlideHalf ? 0 : slideIndex);
      this.setSlideWidth();
    },
    bodyHeight: {
      immediate: true,
      handler: 'setSlideHeight',
    },
    minisLang: {
      immediate: true,
      handler() {
        this.questionsList = this.translate('editor.displays.questions.questionsList', []);
      }
    },
  },

  computed: {
    isEnd() {
      const isEndSlide = this.slideIndex === this.slideList.length - 1;
      return !!this.swiperRef && this.swiperRef.isEnd || isEndSlide || this.isSlideHalf;
    },
    isBeginning() {
      const isBeginningSlide = this.slideIndex === 0;
      return !!this.swiperRef && this.swiperRef.isBeginning || isBeginningSlide || this.isSlideHalf;
    },
    slideList() {
      return this.swiperRef?.slides || [];
    },
    textareaPlaceholderPriorities: ths => ths.translate('editor.displays.priorities.placeholder'),
    textareaPlaceholderQuestions: ths => ths.translate('editor.displays.questions.placeholder'),
    isSlideHalf: ths => ths.appWidth >= 1000,
    slideWidth: ths => ths.isSlideHalf ? (ths.appWidth - 40) / 2 : ths.appWidth - 40,
  },

  methods: {
    setSlideHeight() {
      this.$nextTick(() => {
        this.slideHeight = this.$refs?.swiper?.$el?.offsetHeight;
      })
    },

    setSlideWidth() {
      const width = this.slideWidth;
      const slideTransform = `translate3d(-${ this.slideIndex * width }px, 0px, 0px)`;

      const swiperWrapper = document.querySelector('#layout-editor .swiper-wrapper');
      _.invoke(swiperWrapper?.style, 'setProperty', 'max-width', `${ width }px`);
      _.invoke(swiperWrapper?.style, 'setProperty', 'transform', slideTransform);
      if(this.isSlideHalf) {
        _.invoke(this.swiperRef, 'slideTo', 0);
      }

      const swiperSlides = document.querySelectorAll('#layout-editor .swiper-slide');
      [].forEach.call(swiperSlides, (slide, slideIndex) => {
        slide.style.setProperty('width', `${ width }px`);
        this.swiperRef.slidesGrid[slideIndex] = slideIndex * width;
        this.swiperRef.snapGrid[slideIndex] = slideIndex * width;
        this.swiperRef.slidesSizesGrid[slideIndex] = width;
      });
    },

    edit(type, index) {
      if(type == 'priority') {
        this.$emit('updateValuePriority', this.priorities[index]);
        this.$emit('removePriority', index);
        this.$refs.textareaPriorities.focus();
      } else {
        this.$emit('updateValueQuestion', this.questions[index]);
        this.$emit('removeQuestion', index);
        this.$refs.textareaQuestions.focus();
      }
    },
  },

  mounted() {
    const newSlideIndex = this.isSlideHalf ? 0 : this.slideIndex;
    this.swiperRef = this.$refs.swiper.swiperRef;
    this.swiperRef.slideTo(newSlideIndex, 0);
    this.$emit('changeSlide', newSlideIndex);
    this.$nextTick(this.setSlideWidth);
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
}

.layout {
  height: 100%;
  flex-direction: column;
  display: flex;

  .layout__textarea_wrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .layout__display {
    border-radius: 10px; 
    overflow: hidden; 
    height: 100%;
    background: var(--main-bg-color);
    &:hover {
      outline: 1px solid var(--special-color);
    }

    &::after, &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 20px;
      clip-path: polygon(0 0, 100% 50%, 0 100%);
      background-color: var(--special-color);
      top: calc(50% + 35px/2);
    }
    &::before {
      left: calc(100% - 20px);
    }
    &::after {
      right: calc(100% - 20px);
      transform: scale(-1);
    }

    &.isEnd::before { display: none; }
    &.isBeginning::after { display: none; }

    .layout__display_content {
      height: calc(100% - 45px);
      box-sizing: border-box;
      position: relative;
      overflow-x: hidden;
      overflow-y: auto;

      .slide__container {
        overflow: hidden auto; 
        &::-webkit-scrollbar{
          background: transparent;
        }
      }
    }
  }
}
</style>