<template>
  <dl v-if="exist">
    <dt>
      <span>{{ tree.name }}</span>
    </dt>
    <dd v-if="hasChildren">
      <recursive v-for="node in tree.nodes" :tree="node"></recursive>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'recursive',
  props: {
    tree: Object,
  },
  computed: {
    hasChildren: function () {
      return this.tree
          && this.tree.nodes
          && this.tree.nodes.length
    },
    exist: function () {
      return !!this.tree;
    },
  },
}
</script>
