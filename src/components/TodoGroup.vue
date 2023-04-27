<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types';
import useTodos from '@/store/useTodos';
interface Props {
    status: TodoStatus;
}

const props = defineProps<Props>();

const { getTodosByStatus } = useTodos();
const todoList = getTodosByStatus(props.status);

const groupLabel = {
    [TodoStatus.Pending]: "Pending",
    [TodoStatus.inProgress]: "In Progress",
    [TodoStatus.Completed]: "Completed",
};

</script>
<template>
    <div class="group-wrapper">
        <h3>{{ groupLabel[props.status] }}</h3>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">
                {{ todo.title }}
                <span class="todo-description">{{ todo.description }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.group-wrapper {
  flex: 1;
  padding: 5px;
  background-color: rgb(56, 80, 103);
  width: 400px;
  
}
.group-wrapper ul {
  padding: 1px;
}
.group-wrapper li {
  list-style-type: none;
  background-color: aliceblue;
  color: rgb(56, 80, 103);
  padding: 2px 5px;
  cursor: grab;
  margin-bottom: 10px;
}
.draggable {
  min-height: 200px;
}
.delete-icon {
  float: right;
  cursor: pointer;
}
.todo-description {
  font-size: 12px;
}
</style>