import Vue from 'vue/dist/vue.esm.js';
import Recursive from './recursive.vue'

const fruits = {
  "name": "フルーツ",
  "nodes": [
    {
      "name": "みかん",
      "nodes": [
        { "name": "みかん", "nodes": [], },
        { "name": "レモン", "nodes": [], },
        { "name": "伊予柑", "nodes": [], },
      ]
    },
    {
      "name": "ぶどう",
      "nodes": [
        { "name": "ぶどう", "nodes": [], },
        { "name": "巨峰", "nodes": [], },
        { "name": "マスカット", "nodes": [], },
      ]
    },
    {
      "name": "りんご",
      "nodes": [],
    },
  ]
};

new Vue({
  el: '#app',
  components: { Recursive },
  template: '<Recursive :tree="tree" />',
  data: { tree: fruits }
});
