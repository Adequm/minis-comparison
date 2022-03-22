<template>
  <div class="navigation">
    <button 
      v-if="!isModeCompare"
      class="navigation__item"
      v-text="pageName"
      @click="$emit('switchModeEditor')"
    />
    <div v-else class="navigation__item nohover" style="cursor: default;">
      <span style="z-index: 1;" v-text="compareStep"/>
      <div class="compare_loader" :style="{ width: compareLoaderWidth }"/>
    </div>

    <button 
      v-if="isShowSettingsButton"
      id="settingsButton"
      class="navigation__item navigation__item-settings nofocus nohover"
      :loading="isFrame && 'loading'"
      @click="$emit('openModal', 'settings')"
    >
      <Icon class="settings__button-done" type="settings"/>
      <Icon class="settings__button-loading" type="physics" rotate/>
    </button>

    <button 
      v-if="isModeEditor"
      class="navigation__item navigation__item-special"
      :disabled="!isEditorDataExist && !isModeCompare"
      @click="(isEditorDataExist || isModeCompare) && $emit('switchModeCompare')"
    >
      <Icon :type="isModeCompare ? 'cross-small' : 'paper-plane'"/>
    </button>
    <button 
      v-else
      class="navigation__item nofocus"
      style="color: var(--special-color);"
      :disabled="!isHistoryExist"
      @click="isHistoryExist && $emit('switchModeHistory')"
    >
      <Icon :type="isHistoryModeAnswers ? 'menu-dots-vertical' : 'menu-dots'"/>
    </button>
  </div>
</template>

<script>
import { Icon } from '@minis-core/components';
import { translateMixin } from '@minis-core/mixins';

export default {
  name: 'AppNavigation',

  mixins: [translateMixin],

  components: {
    Icon,
  },

  props: {
    isFrame: Boolean,
    isShowSettingsButton: Boolean,
    isModeCompare: Boolean,
    isModeEditor: Boolean,
    isHistoryExist: Boolean,
    isEditorDataExist: Boolean,
    isHistoryModeAnswers: Boolean,
    compareQuestionIndex: Number,
    compareMaxQuestionsIndex: Number,
  },

  computed: {
    compareLoaderWidth: ths => `${ +(ths.compareQuestionIndex / ths.compareMaxQuestionsIndex * 100).toFixed(2) }%`,
    pageName() {
      return this.isModeEditor 
        ? this.translate('history.title')
        : this.translate('editor.title');
    },
    compareStep() {
      const stepName = this.translate('compare.title');
      return `${ stepName }: ${ this.compareQuestionIndex }/${ this.compareMaxQuestionsIndex }`;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  user-select: none; 
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  z-index: 5;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;

  button:not(.nofocus):focus {
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
    padding: 0;

    &:nth-child(1) {
      width: 200%;
      max-width: 300px;
    }

    &.navigation__item-settings {
      margin-left: auto;
      width: 100%;
      max-width: 50px;
      &:not([loading="loading"]) {
        .settings__button-loading { display: none }
      }
      &[loading="loading"] {
        .settings__button-done { display: none }
        pointer-events: none;
      }
    }

    &:nth-last-child(1) {
      width: 100%;
      max-width: 150px;
    }

    &:not(.nohover):hover { opacity: .8; }
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
      background-color: var(--special-color-100);
      transition: width .5s;
    }
  }
}
</style>