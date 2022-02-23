<template>
  <div class="settings" :class="{ isClosedSettings: value }">
    <Icon type="settings" @click="$emit('input', !value)"/>
    <Icon :type="themeIcon" @click="$emit('switchTheme', 'main')"/>
    <Icon type="heart" @click="$emit('switchTheme', 'special')"/>
    <Icon type="globe" @click="$emit('switchLang')"/>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Settings',

  components: { 
    Icon,
  },

  props: {
    themeIcon: String,
    value: Boolean,
  },
};
</script>

<style lang="scss" scope>
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

@media screen and (min-width: 768px) {
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
          animation: rotate 2s infinite linear;
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
}
</style>