<template>
  <main class="flex min-h-screen items-center justify-center p-24">
    <div class="z-10 w-full max-w-5xl items-center justify-center align-center font-mono text-sm flex-col lg:flex">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">

export default {
  name: 'App'
};
</script>

<style scoped>
</style>
