<template>
  <div>
    <h1 class="text-5xl mb-8">Todo-List App</h1>
    <h2 class="text-2xl mb-8">Projects</h2>
    <div class="flex-row lg:flex">
      <router-link
        v-for="project in projects"
        :key="project.id"
        class="ml-2 p-2 bg-blue-600 text-white rounded-lg"
        :to="`/project/${project.id}`"
      >
        {{ project.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getProjects } from '../../services/Services';

export default {
  setup() {
    const projects = ref([]);

    onMounted(() => {
      getProjects().then((data) => {
        projects.value = data;
      });
    });

    return {
      projects,
    };
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>