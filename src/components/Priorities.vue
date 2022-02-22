<template>
  <div class="wrapper">
    <div class="priorities" ref="priorities">

      <div class="settings" :class="{ isClosedSettings }">
        <Icon type="settings" @click="isClosedSettings = !isClosedSettings"/>
        <Icon :type="themeIcon" @click="$emit('switchTheme', 'main')"/>
        <Icon type="heart" @click="$emit('switchTheme', 'special')"/>
        <Icon type="globe" @click="$emit('switchLang')"/>
        <!-- <Icon type="help-circle"/> -->
      </div>

      <div class="priorities__buttons">
        <div class="priorities__button" @click="swiperPage = !swiperPage">
          <Icon :type="swiperPage ? 'chevrons-left' : 'chevrons-right'"/>
        </div>
        <div class="priorities__button">
          <Icon type="clock"/>
        </div>
        <div class="priorities__button priorities__button-special">
          <Icon type="send"/>
        </div>
      </div>

      <div class="priorities__list">
        <div class="content__wrapper" :style="{ height: textareaHeight }">
          <form 
            @submit.prevent="addPriority" 
            :style="{ height: textareaHeight }"
            defaultfocus="textarea"
          >
            <textarea 
              v-model="value"
              ref="textarea"
              id="textarea"
              :rows="textareaRows"
              :placeholder="swiperPage ? 'Ваш вопрос' : 'Ваш приоритет'"
              @keydown.enter="textareaKeyDownEnter"
            />
            <button type="submit"><Icon type="plus"/></button>
          </form>
        </div>
        <div class="abccba" :class="{ next: swiperPage }">
          <div class="wrapper__priorities">
            <Swiper ref="swiper" @activeIndexChange="swiperPage = $event.activeIndex">
              <SwiperSlide>
                <QuestionsList
                  :questions="questions"
                  @remove="questions.splice($event, 1)"
                  @edit="editPriority(questions, $event)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PrioritiesList
                  :priorities="priorities"
                  @remove="priorities.splice($event, 1)"
                  @edit="editPriority(priorities, $event)"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="resize_button" @mousedown.prevent="startResize"/>
    </div>
    <a href="https://adequm.github.io/minis" target="_blank" class="minis">Minis</a>
  </div>
</template>

<script>
import Icon from './Icon';
import { Swiper, SwiperSlide } from 'swiper-vue2';

import PrioritiesList from './PrioritiesList';
import QuestionsList from './QuestionsList';

export default {
  name: 'Priorities',

  components: {
    PrioritiesList,
    QuestionsList,
    Swiper,
    SwiperSlide,
    Icon,
  },

  props: {
    themeIcon: String,
    minisLang: String,
    maxWidth: Number,
    bodyWidth: Number,
  },

  data: () => ({
    console,
    value: '',
    priorities: ['Что важнее прямо сейчас?'],
    questions: [
      'Что важнее прямо сейчас?',
      'Что больше хочется?',
      'Чего быстрее добиться?'
    ],
    swiperPage: 0,
    textareaRows: 1,
    mode: 'priorities',
    isClosedSettings: true,
    isResize: false,
    startX: null,
  }),

  watch: {
    value: 'setMaxTextareaRows',
    maxWidth: ['setMaxTextareaRows', 'setSwiperSize'],
    bodyWidth: ['setMaxTextareaRows', 'setSwiperSize'],
    swiperPage(swiperPage) {
      const size = (this.bodyWidth < 768 ? this.bodyWidth : this.maxWidth) - 40;
      const [swiper] = document.getElementsByClassName('swiper-wrapper');
      swiper.style.setProperty('transition', `transform .25s`);
      swiper.style.setProperty('transform', `translate3d(-${ swiperPage * size }px, 0px, 0px)`);
    }
  },

  computed: {
    textareaHeight() {
      const rows = `${ this.textareaRows }em`;
      const lineHeight = `${ this.textareaRows * 0.2 }em`;
      return `calc(${ rows } + ${ lineHeight } + 30px)`;
    },
  },

  methods: {
    setSwiperSize() {
      const size = (this.bodyWidth < 768 ? this.bodyWidth : this.maxWidth) - 40;
      const [swiper] = document.getElementsByClassName('swiper-wrapper');
      const slides = document.getElementsByClassName('swiper-slide');
      swiper.style.setProperty('max-width', `${ size }px`);
      swiper.style.setProperty('display', `grid`);
      swiper.style.setProperty('grid-auto-flow', `column`);
      swiper.style.setProperty('transform', `translate3d(-${ this.swiperPage * size }px, 0px, 0px)`);
      [].forEach.call(slides, slide => {
        slide.style.setProperty('width', `${ size }px`);
      });
      const { snapGrid } = this.$refs.swiper.swiperRef;
      this.$refs.swiper.swiperRef.snapGrid = snapGrid.map((_, index) => index * size);
    },
    setMaxTextareaRows() {
      this.textareaRows = 1;
      this.$nextTick(() => {
        const { scrollHeight } = this.$refs.textarea;
        const newTextareaRows = Math.ceil((scrollHeight - 28)/19);
        if(newTextareaRows > 5) this.value = this.value.slice(0, -1);
        this.textareaRows = Math.min(5, newTextareaRows);
      })
    },

    editPriority(array, index) {
      this.value = array[index];
      array.splice(index, 1);
      this.$refs.textarea.focus();
    },

    setMaxWidth({ pageX }) {
      requestAnimationFrame(() => {
        const maxWidth = pageX - this.startResizeX + this.startResizeWidth;
        this.$emit('changeMaxWidth', maxWidth);
      })
    },

    startResize(event) {
      this.startResizeX = event.pageX;
      this.startResizeWidth = this.maxWidth;
      document.addEventListener('mousemove', this.setMaxWidth);
      document.addEventListener('mouseup', this.stopResize);
      window.addEventListener('mouseleave', this.stopResize);
    },

    stopResize() {
      this.startResizeX = null;
      this.startResizeWidth = null;
      document.removeEventListener('mousemove', this.setMaxWidth);
      document.removeEventListener('mouseup', this.stopResize);
      window.removeEventListener('mouseleave', this.stopResize);
    },

    textareaKeyDownEnter(event) {
      if(event.shiftKey) return;
      event.preventDefault();
      this.addPriority();
    },

    addPriority(event) {
      if(this.value.replace(/\n/g, '')) {
        this.priorities.push(this.value.trim());
      };
      this.value = '';
    },

    keydown({ key, shiftKey }) {
      switch(key) {
        case 'Escape':
          this.isClosedSettings = !this.isClosedSettings;
          break;
      }
    },
  },

  beforeMount() {
    document.addEventListener('keydown', this.keydown);
  },

  mounted() {
    this.setSwiperSize();
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
        &:hover {
          opacity: .8;
        }
        &-special {
          background-color: var(--special-color);
          color: #F3F3F3;
        }
      }
    }

    &__list {
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
      .wrapper__priorities {
        height: 100%;
        box-sizing: border-box;
        background: var(--main-bg-color);
        border-radius: 10px;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar{
          background: transparent;
        }
      }
      .abccba {
        border-radius: 10px; 
        overflow: hidden; 
        height: 100%;
        &::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 20px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          background-color: var(--special-color);
          top: calc(50% - 10px);
        }
        &:not(.next)::after {
          left: calc(100% - 20px);
        }
        &.next::after {
          right: calc(100% - 20px);
          transform: scale(-1);
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

      &__list {
        padding-bottom: 30px;
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