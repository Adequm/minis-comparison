import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';

const projectKey = location.pathname.split('/')[1].split('-').slice(1).join('-');
const fullscreenKey = `${ projectKey }-isFullscreen`;
import { vuexMinisModule as minisModule, persistedMinis } from '@minis-core/mixins';

const store = {};
Vue.use(Vuex);

store.state = () => ({
  [fullscreenKey]: false,
  switchFullscreenKey: `switch_${fullscreenKey}`,
  projectKey,
  savedHistory: [],
  questions: [],
  priorities: [],
});


store.getters = {
  isFullscreen: state => state[fullscreenKey],
};


store.mutations = {
  [`switch_${fullscreenKey}`]: state => Vue.set(state, fullscreenKey, !state[fullscreenKey]),

  addToHistory: ({ savedHistory }, data) => savedHistory.unshift(data),
  removeFromHistory: ({ savedHistory }, index) => savedHistory.splice(index, 1),

  addQuestion: ({ questions }, question) => !questions.includes(question) && questions.push(question),
  removeQuestion: ({ questions }, index) => questions.splice(index, 1),

  addPriority: ({ priorities }, priority) => !priorities.includes(priority) && priorities.push(priority),
  removePriority: ({ priorities }, index) => priorities.splice(index, 1),
};


const persistedLocal = [
  fullscreenKey,
  'savedHistory', 
  'questions', 
  'priorities',
];
store.modules = { minis: minisModule };
store.plugins = [
  createMutationsSharer({ predicate: () => [...persistedMinis, ...persistedLocal] }),
  createPersistedState({ paths: persistedMinis, key: 'minis' }),
  createPersistedState({ paths: persistedLocal, key: `minis-${projectKey}` }),
];

export default new Vuex.Store(store);