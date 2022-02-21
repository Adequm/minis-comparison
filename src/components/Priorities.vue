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
        <div class="priorities__button" v-text="'Вопросы'"/>
        <div class="priorities__button priorities__button-special" v-text="'Сравнить'"/>
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
              :placeholder="'Ваш приоритет'"
              @keydown.enter="textareaKeyDownEnter"
            />
            <button type="submit"><Icon type="plus"/></button>
          </form>
        </div>
        <div style="border-radius: 10px; overflow: hidden; height: 100%;">
          <div class="wrapper__priorities">
            <div class="wrapper__priorities_scroll">
              <template v-if="priorities.length">
                <div 
                  v-for="(priority, index) of priorities"
                  :key="index"
                  class="priority"
                >
                  <span v-text="priority"/>
                  <div style="float: right">
                    <Icon type="trash" :strokeWidth="3" @click="priorities.splice(index, 1)"/>
                    <Icon type="edit" :strokeWidth="3" @click="editPririty(index)"/>
                  </div>
                </div>
              </template>

              <span v-else style="opacity: .5; grid-column: 1/4; user-select: none;">
                Напиши выше свои цели на месяц/два/три
                (купить кактус, зашить шторы, приготовить бутерброды с икрой)
                Ответь честно на вопросы и по итогу сверху окажутся более важные цели, ближе к низу будут менее важные
              </span>

            </div>
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

export default {
  name: 'Priorities',

  components: {
    Icon,
  },

  props: {
    themeIcon: String,
    minisLang: String,
    maxWidth: Number,
    bodyWidth: Number,
  },

  data: () => ({
    value: '',
    priorities: [],
    textareaRows: 1,
    isClosedSettings: true,
    isResize: false,
    startX: null,
  }),

  watch: {
    value: 'setMaxTextareaRows',
    maxWidth: 'setMaxTextareaRows',
    bodyWidth: 'setMaxTextareaRows',
  },

  computed: {
    textareaHeight() {
      const rows = `${ this.textareaRows }em`;
      const lineHeight = `${ this.textareaRows * 0.2 }em`;
      return `calc(${ rows } + ${ lineHeight } + 20px)`;
    },
  },

  methods: {
    setMaxTextareaRows() {
      this.textareaRows = 1;
      this.$nextTick(() => {
        const { scrollHeight } = this.$refs.textarea;
        const newTextareaRows = Math.ceil((scrollHeight - 18)/19);
        if(newTextareaRows > 5) this.value = this.value.slice(0, -1);
        this.textareaRows = Math.min(5, newTextareaRows);
      })
    },

    editPririty(index) {
      this.value = this.priorities[index];
      this.priorities.splice(index, 1);
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
        this.priorities.push(this.value);
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
      grid-template-columns: repeat(2, 1fr);
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
            padding: 10px;
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
            width: 3em;
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
        overflow: auto;
        &::-webkit-scrollbar{
          background: transparent;
        }

        &_scroll {
          padding: 10px;
          font-size: 14px;
          box-sizing: border-box;
          overflow: auto;
          display: grid;
          grid-template-columns: minmax(170px, 1fr);
          gap: 10px;
          background: var(--main-bg-color);
          border-radius: 10px;
          width: auto;

          .priority {
            padding: 10px;
            background: var(--content-bg-color);
            border-radius: 10px;
            svg {
              height: 1.2em;
              width: 1.2em;
              color: var(--main-bg-color);
              margin-top: auto;
              cursor: pointer;
              &:hover {
                color: var(--special-color);
              }
            }
            span {
              overflow-wrap: anywhere;
            }
          }
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
        .wrapper__priorities_scroll {
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
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