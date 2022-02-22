<template>
  <div class="priorities__list" id="Priorities_ModeEditor">
    <div class="content__wrapper" :style="{ height: textareaHeight }">
      <form 
        @submit.prevent="addTo" 
        :style="{ height: textareaHeight }"
        defaultfocus="textarea"
      >
        <textarea 
          v-model="value"
          ref="textarea"
          id="textarea"
          :rows="textareaRows"
          :placeholder="swiperPage ? 'Ваш приоритет' : 'Ваш вопрос'"
          @keydown.enter="textareaKeyDownEnter"
        />
        <button type="submit"><Icon type="plus"/></button>
      </form>
    </div>
    <div class="abccba" :class="{ isEnd, isBeginning }">
      <div class="wrapper__priorities">
        <Swiper ref="swiper" @activeIndexChange="swiperPage = $event.realIndex">
          <SwiperSlide>
            <div class="slide__container" :style="{ height: slideContrainerHeight }">
              <QuestionsList
                :questions="questions"
                @remove="questions.splice($event, 1)"
                @edit="editPriority(questions, $event)"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide__container" :style="{ height: slideContrainerHeight }">
              <PrioritiesList
                :priorities="priorities"
                @remove="priorities.splice($event, 1)"
                @edit="editPriority(priorities, $event)"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="priorities__buttons" style="gap: 10px; padding: 10px;">
        <div class="priorities__button" @click="prevSlide" :disabled="isBeginning">
          <Icon type="chevrons-left"/>
        </div>
        <div class="priorities__button" @click="nextSlide" :disabled="isEnd">
          <Icon type="chevrons-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon';
import { Swiper, SwiperSlide } from 'swiper-vue2';

import PrioritiesList from './PrioritiesList';
import QuestionsList from './QuestionsList';

export default {
  name: 'Priorities_ModeEditor',

  components: {
    PrioritiesList,
    QuestionsList,
    Swiper,
    SwiperSlide,
    Icon,
  },

  props: {
    isShow: Boolean,
    isDesktop: Boolean,
    appWidth: Number,
    bodyWidth: Number,
    bodyHeight: Number,
  },

  data: () => ({
    value: '',
    priorities: ['Я хочу Пикачу'],
    questions: [
      'Что важнее прямо сейчас?',
      'Что больше хочется?',
      'Чего быстрее добиться?'
    ],
    swiperRef: null,
    swiperPage: 0,
    slideContrainerHeight: 0,
    textareaRows: 1,
  }),

  watch: {
    value: 'setMaxTextareaRows',
    isShow: 'setSlideWidth',
    appWidth: ['setMaxTextareaRows', 'setSlideWidth', 'setSlideHeight'],
    bodyWidth: ['setMaxTextareaRows', 'setSlideWidth', 'setSlideHeight'],
    textareaHeight: ['setSlideWidth', 'setSlideHeight'],
    isSwiperScroll: ['setSlideWidth'],
    swiperPage(swiperPage) {
      this.swiperRef.slideTo(swiperPage);
      this.setSlideWidth();
    },
    bodyHeight: {
      immediate: true,
      handler: 'setSlideHeight',
    },
  },

  computed: {
    textareaHeight() {
      const rows = `${ this.textareaRows }em`;
      const lineHeight = `${ this.textareaRows * 0.2 }em`;
      return `calc(${ rows } + ${ lineHeight } + 30px)`;
    },
    isEnd() {
      const isEndSlide = this.swiperPage === this.slideList.length - 1;
      return !!this.swiperRef && this.swiperRef.isEnd || isEndSlide;
    },
    isBeginning() {
      const isBeginningSlide = this.swiperPage === 0;
      return !!this.swiperRef && this.swiperRef.isBeginning || isBeginningSlide;
    },
    slideList() {
      return this.swiperRef?.slides || [];
    },
  },

  methods: {
    setSlideHeight() {
      this.$nextTick(() => {
        const { offsetHeight } = this.$refs.swiper.$el;
        this.slideContrainerHeight = `${ offsetHeight - 5 }px`;
      })
    },

    setSlideWidth() {
      const size = (this.isDesktop ? this.appWidth : this.bodyWidth) - 40;
      const swiper = document.querySelector('#Priorities_ModeEditor .swiper-wrapper');
      swiper.style.setProperty('max-width', `${ size }px`);
      swiper.style.setProperty('transform', `translate3d(-${ this.swiperPage * size }px, 0px, 0px)`);

      const slides = document.querySelectorAll('#Priorities_ModeEditor .swiper-slide');
      [].forEach.call(slides, (slide, index) => {
        slide.style.setProperty('width', `${ size }px`);
        this.swiperRef.slidesGrid[index] = index * size;
        this.swiperRef.slidesSizesGrid[index] = size;
        this.swiperRef.snapGrid[index] = index * size;
      });
    },

    setMaxTextareaRows() {
      this.textareaRows = 1;
      this.$nextTick(() => {
        const { scrollHeight } = this.$refs.textarea;
        const newTextareaRows = Math.ceil((scrollHeight - 28)/19);
        if(newTextareaRows > 5) this.value = this.value.slice(0, -1);
        this.textareaRows = Math.max(1, Math.min(5, newTextareaRows));
      })
    },

    editPriority(array, index) {
      this.value = array[index];
      array.splice(index, 1);
      this.$refs.textarea.focus();
    },

    textareaKeyDownEnter(event) {
      if(event.shiftKey) return;
      event.preventDefault();
      this.addTo();
    },

    nextSlide() {
      this.swiperPage = Math.min(this.swiperPage + 1, this.slideList.length - 1);
    },

    prevSlide() {
      this.swiperPage = Math.max(this.swiperPage - 1, 0);
    },

    addTo() {
      const data = this.swiperPage ? this.priorities : this.questions;
      if(this.value.replace(/\n/g, '')) {
        data.push(this.value.trim());
      };
      this.value = '';
    },
  },

  mounted() {
    this.swiperRef = this.$refs.swiper.swiperRef;
    this.swiperRef.slideTo(1, 0);
    this.$nextTick(this.setSlideWidth);
  },
};
</script>

<style lang="scss">
.swiper-container, 
.swiper-wrapper, 
.swiper-slide {
  height: 100% !important;
}
.swiper-wrapper {
  display: grid;
  grid-auto-flow: column;
}
.swiper-container {
  overflow: hidden;
}


.priorities__list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  box-sizing: border-box;
  z-index: 2;
  background-color: var(--content-bg-color);
  border-radius: 10px;
  .content__wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: var(--main-bg-color);
    border-radius: 10px;
    form {
      width: 100%;
      height: 100%;
      position: relative;
      font-size: 14px;
      border-radius: inherit;
      textarea {
        width: inherit;
        resize: none;
        margin: 0;
        background: none;
        border: none;
        outline: none;
        padding: 15px;
        padding-right: 3em;
        box-sizing: border-box;
        border-radius: inherit;
        color: var(--text-color);
        font-size: inherit;
        font-family: inherit;
        line-height: 1.2;
        &:not(:focus):hover {
          outline: 1px solid var(--text-color);
        }
        &:focus {
          outline: 1px solid var(--special-color);
        }
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
        height: calc(100% - 10px);
        width: 30px;
        border: none;
        outline: none;
        cursor: pointer;
        margin: 5px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--special-color);
        color: var(--text-color);
        &:not(:focus):hover {
          opacity: .5;
        }
        &:focus:not(:active) {
          background: var(--content-bg-color);
          outline: 1px solid var(--special-color);
        }
      }
    }
  }

  .abccba {
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
      top: calc(50% - 10px);
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

    .wrapper__priorities {
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

@media screen and (min-width: 768px) {
  .priorities__list {
    padding-bottom: 30px;
  }
}
</style>