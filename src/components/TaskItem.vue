<template>
  <div class="task">
    <span class="status" @click="$emit('toggle-task', task.id)">
      <span v-if="task.completed">✔️</span>
      <span v-else>🕓</span>
    </span>
    <span class="task-text">{{ task.text }}</span>
    <button class="edit-btn" @click="$router.push(`/edit/${task.id}`)">✏️</button>
    <button class="delete-btn" @click="$emit('delete-task', task.id)">❌</button>
  </div>
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
}

.status {
  margin-right: 10px;
  cursor: pointer;
}

.task-text {
  flex: 1;
  text-align: left;
}

.edit-btn,
.delete-btn {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
}
</style>
