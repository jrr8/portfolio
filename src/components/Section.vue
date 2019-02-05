<template>
  <div :style="style" class="container py-4 px-3">
      <div class="section-title">{{ title }}</div>
      <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'Section',
  props: {
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      style: {
        border: "1px solid",
        borderColor: this.color
      }
    }
  }
}
</script>

<style scoped>
    .section-title {
        text-decoration: underline;
        padding-bottom: 0.5rem;
    }
</style>

