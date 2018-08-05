<template>
    <li @click="handleClick">{{content}}</li>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["content", "index"],
  methods: {
    handleClick: function(index) {
      this.$emit("delete", index);
    }
  }
};
</script>
