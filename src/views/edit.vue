
<template>
  <div class="container">
    <h1 class="title">AÑADIR TAREA</h1>
    <div class="task-form">
    </div>
  </div>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";

export default {
  components: { TaskItem },
  data() {
    return {
      tasks: [
        { id: 1, text: "PRESENTAR ACTIVIDAD 3.1", completed: true },
        { id: 2, text: "INSTALAR NODE.JS EN EL NUEVO SERVIDOR", completed: false },
        { id: 3, text: "INSTALAR MYSQL", completed: false },
        { id: 4, text: "INSTALAR VISUAL STUDIO CODE", completed: true },
        { id: 5, text: "CONFIGURAR SERVIDOR WEB EN WINDOWS SERVER (IIS)", completed: true },
      ],
    };
  },
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