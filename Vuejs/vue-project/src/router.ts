import { createRouter, createWebHistory } from 'vue-router';
import ProjectPage from './page/Project/ProjectPage.vue';
import TaskPage from './page/Task/TaskPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', component: ProjectPage },
    { path: '/project/:id', component: TaskPage },
  ],
});