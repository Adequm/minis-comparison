<template>
  <div class="wrapper__priorities_scroll">

    <template v-if="history.length">
      <div
        v-for="(chunk, chunkIndex) of history"
        :key="chunkIndex"
        style="display: grid; gap: 10px; grid-auto-rows: min-content;"
      >
        <div 
          class="priority" 
          v-text="chunk.question"
          style="background: var(--special-color); font-weight: bold; text-align: center;"
        />
        <div
          v-for="(answer, answerIndex) of chunk.answers"
          :key="answerIndex"
          class="priority"
          v-text="answer"
        />
      </div>
    </template>

    <span v-else style="opacity: .5; grid-column: 1/4; user-select: none;">
      Напиши выше свои цели на месяц/два/три
      (купить кактус, зашить шторы, приготовить бутерброды с икрой)
      Ответь честно на вопросы и по итогу сверху окажутся более важные цели, ближе к низу будут менее важные
    </span>

  </div>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'HistoryList',

  components: {
    Icon,
  },

  props: {
    history: Array,
  },
}
</script>

<style lang="scss">
.wrapper__priorities_scroll {
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
      &:nth-child(1) {
        margin-right: 5px;
      }
      &:hover {
        color: var(--special-color);
      }
    }
    span {
      overflow-wrap: anywhere;
    }
  }
}

@media screen and (min-width: 768px) {
  .wrapper__priorities_scroll {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
}
</style>