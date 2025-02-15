<template>
  <div class="container">
    <h1 class="title">{{ isEditing ? "EDITAR TAREA" : "AÑADIR TAREA" }}</h1>
    <form class="form-container" @submit.prevent="saveTask">
      <input v-model="taskText" placeholder="Título de la Tarea" required />
      <textarea v-model="taskDescription" rows="4" placeholder="Describe la tarea"></textarea>
			<button class="save-btn">Guardar</button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      taskId: null,
      taskText: "",
      taskDescription: "",
      isEditing: false,
    };
  },
  methods: {
    saveTask() {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      if (this.isEditing) {
        // Editar tarea existente
        tasks = tasks.map(task =>
          task.id === this.taskId ? { ...task, text: this.taskText, description: this.taskDescription } : task
        );
      } else {
        // Crear nueva tarea
        const newTask = {
          id: Date.now(),
          text: this.taskText,
          description: this.taskDescription,
          completed: false,
        };
        tasks.push(newTask);
      }

      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push("/");
    },
    loadTask() {
      const taskId = this.$route.params.id;
      if (taskId) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const task = tasks.find(task => task.id == taskId);
        if (task) {
          this.taskId = task.id;
          this.taskText = task.text;
          this.taskDescription = task.description;
          this.isEditing = true;
        }
      }
    }
  },
  mounted() {
    this.loadTask();
  }
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: auto;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
	align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  background-color: #ddd;
  padding: 10px;
  font-weight: bold;
}

input,
textarea {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
}

.save-btn {
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
	width: 100px;
}

.save-btn:hover {
  background: gray;
}
</style>
