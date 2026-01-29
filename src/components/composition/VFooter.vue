<template>
  <footer class="footer">{{ title }} {{ new Date().getFullYear() }}</footer>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'default footer',
  },
});
</script>

<style scoped>
.footer {
  height: 100px;
  background-color: gray;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
