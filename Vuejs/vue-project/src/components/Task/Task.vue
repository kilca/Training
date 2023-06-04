<template>
  <div class="flex-row lg:flex items-center mb-2">
    <input
      type="checkbox"
      class="form-checkbox h-5 w-5 text-gray-600"
      v-model="inputDone"
      @change="handleCheckboxChange"
    />
    <template v-if="isEditing">
      <input
        type="text"
        class="form-input ml-2 text-gray-700"
        v-model="inputName"
        @blur="handleInputBlur"
        autofocus
      />
    </template>
    <template v-else>
      <span class="ml-2 text-white-700" @click="handleSpanClick">
        {{ inputName }}
      </span>
    </template>
    <button
      class="ml-2 p-2 bg-red-600 text-white rounded-lg ml-auto"
      @click="callDelete"
    >
      (-)
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { deleteTask, updateTask } from '../../services/Services';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    refreshTask: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const isEditing = ref(false);
    const inputName = ref(props.name || '');
    const inputDone = ref(props.done || false);

    const handleSpanClick = () => {
      isEditing.value = true;
    };

    const handleInputChange = (event) => {
      inputName.value = event.target.value;
    };

    const handleCheckboxChange = () => {
      updateTask({ id: props.id, name: inputName.value, done: inputDone.value })
        .finally(() => {
          props.refreshTask();
        });
    };

    const handleInputBlur = () => {
      isEditing.value = false;
      updateTask({ id: props.id, name: inputName.value, done: inputDone.value })
        .finally(() => {
          props.refreshTask();
        });
    };

    const callDelete = () => {
      deleteTask(props.id).finally(() => {
        props.refreshTask();
      });
    };

    return {
      isEditing,
      inputName,
      inputDone,
      handleSpanClick,
      handleInputChange,
      handleCheckboxChange,
      handleInputBlur,
      callDelete,
    };
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>