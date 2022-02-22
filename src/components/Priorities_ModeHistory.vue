<template>
  <div class="priorities__list" id="Priorities_ModeHistory">
    <div class="abccba" :class="{ isEnd, isBeginning }">
      <div class="wrapper__priorities">
        <Swiper 
          ref="swiper"
          @activeIndexChange="swiperPage = $event.realIndex"
        >
          <SwiperSlide
            v-for="(history, historyIndex) of historyData"
            :key="historyIndex"
          >
            <div class="slide__container" :style="{ height: slideContrainerHeight }">
              <div class="history__date" v-text="history.date"/>
              <HistoryList :history="history.chunks"/>
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
import HistoryList from './HistoryList';

export default {
  name: 'Priorities_ModeHistory',

  components: {
    HistoryList,
    Swiper,
    SwiperSlide,
    Icon,
  },

  props: {
    isDesktop: Boolean,
    appWidth: Number,
    bodyWidth: Number,
    bodyHeight: Number,
  },

  data: () => ({
    priorities: ['Что важнее прямо сейчас?'],
    swiperRef: null,
    swiperPage: 0,
    slideContrainerHeight: 0,
    historyData: [
      {
        date: '*Дата создания*',
        chunks: [
          {
            question: 'Вопрос № 1',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 2',
            answers: ['123', '312', '231232', 'fsdfsd', '412']
          },
          {
            question: 'Вопрос № 3',
            answers: ['123', '312', '412']
          },
        ]
      },
      {
        date: '*Дата создания 2*',
        chunks: [
          {
            question: 'Вопрос № 1',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 2',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 3',
            answers: ['123', '312', '412']
          },
        ]
      },
      {
        date: '*Дата создания 3*',
        chunks: [
          {
            question: 'Вопрос № 1',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 2',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 3',
            answers: ['123', '312', '412']
          },
        ]
      },
      {
        date: '*Дата создания 4*',
        chunks: [
          {
            question: 'Вопрос № 1',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 2',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 3',
            answers: ['123', '312', '412']
          },
        ]
      },
      {
        date: '*Дата создания 5*',
        chunks: [
          {
            question: 'Вопрос № 1',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 2',
            answers: ['123', '312', '412']
          },
          {
            question: 'Вопрос № 3',
            answers: ['123', '312', '412']
          },
        ]
      }
    ]
  }),

  watch: {
    appWidth: ['setSlideHeight', 'setSlideWidth'],
    bodyWidth: ['setSlideWidth', 'setSlideHeight'],
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
      const swiper = document.querySelector('#Priorities_ModeHistory .swiper-wrapper');
      swiper.style.setProperty('max-width', `${ size }px`);
      swiper.style.setProperty('transform', `translate3d(-${ this.swiperPage * size }px, 0px, 0px)`);

      const slides = document.querySelectorAll('#Priorities_ModeHistory .swiper-slide');
      [].forEach.call(slides, (slide, index) => {
        slide.style.setProperty('width', `${ size }px`);
        this.swiperRef.slidesGrid[index] = index * size;
        this.swiperRef.slidesSizesGrid[index] = size;
        this.swiperRef.snapGrid[index] = index * size;
      });
    },

    nextSlide() {
      this.swiperPage = Math.min(this.swiperPage + 1, this.slideList.length - 1);
    },

    prevSlide() {
      this.swiperPage = Math.max(this.swiperPage - 1, 0);
    },
  },

  mounted() {
    this.swiperRef = this.$refs.swiper.swiperRef;
    this.swiperRef.slideTo(0, 0);
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

      .history__date {
        text-align: center;
        border-radius: 10px;
        background-color: var(--content-bg-color);
        padding: 10px;
        margin: 10px;
        margin-bottom: 0;
      }

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