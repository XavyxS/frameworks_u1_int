import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue"; 
import TaskForm from "../views/TaskForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/new", component: TaskForm },
  { path: "/edit/:id", component: TaskForm },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
