<template>
  <div class="history__container-scroll" @click="choicedItem = null">

    <div
      v-for="(chunk, chunkIndex) of historyOfDate"
      :key="chunkIndex"
      class="history__chunk"
    >
      <div 
        class="history__chunk_item history__chunk_item-question" 
        v-text="chunk.question"
      />
      <div
        v-for="(answer, answerIndex) of chunk.answers"
        :key="answerIndex"
        class="history__chunk_item"
        :class="{ 'history__chunk_item-active': choicedItem == answer }"
        @click.stop="choicedItem = answer"
        v-text="answer"
      />
    </div>

  </div>
</template>

<script>
import Icon from '../app/Icon';

export default {
  name: 'DisplayHistory',

  components: {
    Icon,
  },

  props: {
    historyOfDate: Array,
  },

  data: () => ({
    choicedItem: null,
  }),
};
</script>

<style lang="scss" scoped>
.history__container-scroll {
  padding: 10px;
  padding-bottom: 0;
  font-size: 14px;
  box-sizing: border-box;
  overflow: auto;
  display: grid;
  grid-template-columns: minmax(170px, 1fr);
  gap: 10px;
  background: var(--main-bg-color);
  border-radius: 10px;
  width: auto;
  
  .history__chunk {
    display: grid; 
    gap: 10px; 
    grid-auto-rows: min-content;

    .history__chunk_item {
      padding: 10px;
      background: var(--content-bg-color);
      border-radius: 10px;
      cursor: pointer;
      overflow-wrap: anywhere;
      &:hover {
        opacity: .8;
      }
      &-question {
        background: var(--special-color); 
        font-weight: bold; 
        text-align: center;
      }
      &-active {
        box-shadow: inset 0 0 0 1px var(--special-color);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .history__container-scroll {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
}
</style>