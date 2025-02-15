<template>
  <div class="container">
    <h1 class="title">LISTA DE TAREAS</h1>
    <div class="task-list">
      <TaskItem 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        @delete-task="deleteTask"
        @toggle-task="toggleTaskStatus"
      />
    </div>
    <button class="add-task" @click="$router.push('/new')">AÑADIR TAREA</button>
  </div>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";

export default {
  components: { TaskItem },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    loadTasks() {
      const storedTasks = localStorage.getItem("tasks");
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    toggleTaskStatus(id) {
      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  },
  mounted() {
    this.loadTasks();
  }
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: auto;
  text-align: center;
}

.title {
  background-color: #ddd;
  padding: 10px;
  font-weight: bold;
}

.task-list {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.add-task {
  margin-top: 10px;
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-task:hover {
  background: gray;
}
</style>
