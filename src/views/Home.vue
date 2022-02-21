<template>
  <Priorities
    :themeIcon="themeIcon"
    :minisLang="minisLang"
    :maxWidth="maxWidth"
    :bodyWidth="bodyWidth"
    @switchTheme="$emit('switchTheme', $event)"
    @switchLang="$emit('switchLang', $event)"
    @changeMaxWidth="$emit('changeMaxWidth', $event)"
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
    maxWidth: Number,
    bodyWidth: Number,
    minisLang: String,
    themeIcon: String,
  },
}
</script>
