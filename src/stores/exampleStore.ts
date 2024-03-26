import { defineStore } from 'pinia';

/**
 *
 *  https://pinia.vuejs.org/core-concepts/
 *  https://pinia.vuejs.org/ssr/nuxt.html
 *
 */

export const useExampleStore = defineStore('exampleStore', {
   state: () => ({}),
   getters: {},
   actions: {},
   persist: true,
});
