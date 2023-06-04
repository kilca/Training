<template>
  <div>
    <input
      class="text-black ml-2 border border-gray-300 rounded-lg p-2"
      v-model="name"
      type="text"
      @change="handleInputChange"
    />
    <button
      class="ml-2 p-2 bg-blue-600 text-white rounded-lg"
      @click="callCreate"
    >
      (+)
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { createTask } from '../../services/Services';

export default {
  props: {
    refreshTask: {
      type: Function,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const name = ref('');

    const handleInputChange = (event) => {
      name.value = event.target.value;
    };

    const callCreate = () => {
      createTask(name.value, props.projectId).finally(() => {
        props.refreshTask();
      });
    };

    return {
      name,
      handleInputChange,
      callCreate,
    };
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>