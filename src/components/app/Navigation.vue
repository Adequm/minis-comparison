<template>
  <div class="navigation">
    <button 
      v-if="!isModeCompare"
      class="navigation__item"
      v-text="isModeEditor ? 'История' : 'Редактор'"
      @click="$emit('switchModeEditor')"
    />
    <button v-else class="navigation__item navigation__item-nohover" style="cursor: default;">
      <span v-text="`Шаг: ${ compareStep } из ${ compareMaxSteps }`"/>
      <div class="compare_loader" :style="{ width: compareLoaderWidth }"/>
    </button>

    <button 
      v-if="isModeEditor"
      class="navigation__item navigation__item-special"
      :disabled="!isEditorDataExist"
      @click="isEditorDataExist && $emit('switchModeCompare')"
    >
      <Icon :type="isModeCompare ? 'x' : 'send'"/>
    </button>
    <button 
      v-else
      class="navigation__item"
      style="color: var(--special-color);"
      :disabled="!isHistoryExist"
      @click="isHistoryExist && $emit('removeFromHistory')"
    >
      <Icon type="trash"/>
    </button>
  </div>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'Navigation',

  components: {
    Icon,
  },

  props: {
    isModeCompare: Boolean,
    isModeEditor: Boolean,
    isHistoryExist: Boolean,
    isEditorDataExist: Boolean,
    compareStep: Number,
    compareMaxSteps: Number,
  },

  computed: {
    compareLoaderWidth: ths => `${ ths.compareStep / ths.compareMaxSteps * 100 }%`,
  },
};
</script>

<style lang="scss" scope>
.navigation {
  grid-template-columns: 2fr 1fr;
  user-select: none; 
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-auto-flow: column dense;
  gap: 20px;
  box-sizing: border-box;
  z-index: 5;

  button:focus {
    outline: 1px solid var(--text-color);
  }

  &__item {
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--content-bg-color);
    user-select: none; 
    &:not(&-nohover):hover { opacity: .8; }
    &-special {
      background-color: var(--special-color);
      color: #F3F3F3;
    }
    &[disabled] {
      cursor: default;
      color: var(--main-bg-color) !important;
      background-color: var(--content-bg-color);
    }
    .compare_loader {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      max-width: 100%;
      border-radius: 10px;
      background-color: var(--special-color);
      opacity: 0.33;
      transition: width 0.33s;
    }
  }
}
</style>