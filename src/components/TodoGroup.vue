<script setup lang="ts">
import { TodoStatus } from "@/types";
import Draggable from "vuedraggable";
import useTodos from "@/store/useTodos";
import CreateTodo from "./CreateTodo.vue";
interface Props {
  status: TodoStatus;
}

const props = defineProps<Props>();

const { getTodosByStatus, deleteTodo, updateTodo } = useTodos();
const todoList = getTodosByStatus(props.status);

const groupLabel = {
  [TodoStatus.Pending]: "TAREFA",
  [TodoStatus.InProgress]: "EM ABERTA",
  [TodoStatus.Completed]: "CONCLUIDA",
};

const onDraggableChange = (payload: any) => {
  if (payload?.added?.element?.status) {
    updateTodo(payload?.added?.element, props.status);
  }
};
</script>

<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[ props.status] }}</h3>

    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          <span class="delete-icon" @click="deleteTodo(todo)">x</span>
          <div>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>

    <CreateTodo :status="props.status" />
  </div>
</template>

<style scoped>
.group-wrapper {
  flex: 1;
  padding: 15px;
  background-color: rgb(0, 0, 0);
  width: 350px;
}

.group-wrapper li {
  list-style-type: none;
  background-color: #fff;
  color: rgb(56, 80, 103);
  padding: 5px 5px;
  cursor: grab;
  margin-bottom: px;
  color: #000;
  font-weight: bold;
}

.group-wrapper h3 {
  color: rgb(50, 174, 102);
  font-weight: bold;
  text-align: center;
}

.draggable {
  min-height: 555px;
  padding: 2px;
  color: aqua;
}

.delete-icon {
  float: right;
  cursor: pointer;
}

.todo-description {
  font-size: 12px;
  color: #000;
}

#CreateTodo {
  place-self: margin-bottom;
}
#h3 {
  color:#888;
}
div h3 {
  color: aqua;
}
</style>