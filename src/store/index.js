import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';
import _ from 'lodash';

import minisModule from './minis';

const store = {};
Vue.use(Vuex);

store.state = () => ({
  savedHistory: [],
  questions: [],
  priorities: [],
});


store.mutations = {
  addToHistory: ({ savedHistory }, data) => savedHistory.unshift(data),
  removeFromHistory: ({ savedHistory }, index) => savedHistory.splice(index, 1),

  removeQuestion: ({ questions }, index) => questions.splice(index, 1),
  addQuestion: ({ questions }, question) => !questions.includes(question) && questions.push(question),

  removePriority: ({ priorities }, index) => priorities.splice(index, 1),
  addPriority: ({ priorities }, priority) => !priorities.includes(priority) && priorities.push(priority),
};


const persistedMinis = [
  'minis.minisThemeMain', 'minis.minisThemeSpecial', 'minis.minisLang',
  'minis.themesJSON', 'minis.translateJSON', 'minis.minisJSON',
];
const persistedLocal = ['savedHistory', 'questions', 'priorities'];
const projectKey = `minis-${ location.pathname.split('/')[1] }`;
store.modules = { minis: minisModule };
store.plugins = [
  createMutationsSharer({ predicate: () => [...persistedMinis, ...persistedLocal] }),
  createPersistedState({ paths: persistedMinis, key: 'minis' }),
  createPersistedState({ paths: persistedLocal, key: projectKey }),
];

export default new Vuex.Store(store);