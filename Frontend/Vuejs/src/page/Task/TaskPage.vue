<template>
  <div>
    <span class="lg:flex flex-row">
      <router-link
        class="max-h-9 mr-2 p-2 bg-blue-600 text-white rounded-lg"
        :to="'../'"
      >
        Go back
      </router-link>
      <h1 class="text-5xl mb-8">Todo-List App</h1>
    </span>
    <h2 class="text-3xl mb-8">My list</h2>
    <div>
      <TaskCreation
        :refreshTask="refreshTask"
        :projectId="id"
      ></TaskCreation>
      <hr class="mt-2 mb-2" />
      <Task
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :done="task.done"
        :name="task.name"
        :refreshTask="refreshTask"
      ></Task>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import TaskCreation from '../../components/Task/TaskCreation.vue';
import Task from '../../components/Task/Task.vue';
import { getTasks } from '../../services/Services';

export default {
  components: {
    TaskCreation,
    Task,
  },
  setup() {
    const route = useRoute();
    const id = ref(route.params.id);
    const tasks = ref([]);

    const refreshTask = () => {
      getTasks(id.value)
          .then((data) => {
            tasks.value = data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("updated")
      });
    };

    onMounted(() => {
      if (id.value) {
        getTasks(id.value)
          .then((data) => {
            tasks.value = data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("updated")
          });
      }
    });

    return {
      id,
      tasks,
      refreshTask,
    };
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>