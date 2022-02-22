<template>
  <Priorities
    :themeIcon="themeIcon"
    :minisLang="minisLang"
    :appWidth="appWidth"
    :bodyWidth="bodyWidth"
    :bodyHeight="bodyHeight"
    @switchTheme="$emit('switchTheme', $event)"
    @switchLang="$emit('switchLang', $event)"
    @changeAppWidth="$emit('changeAppWidth', $event)"
  />
</template>

<script>
import Priorities from '../components/Priorities.vue'

export default {
  name: 'Home',

  components: { 
    Priorities,
  },

  props: {
    appWidth: Number,
    bodyWidth: Number,
    bodyHeight: Number,
    minisLang: String,
    themeIcon: String,
  },
}
</script>
