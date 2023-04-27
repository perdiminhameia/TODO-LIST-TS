import { TodoStatus, type Todo } from "@/types"
import { computed, reactive } from "vue";

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.inProgress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}

const defaultVal = {
    [TodoStatus.Pending]: [
        {
            id: 1,
            title: "Learn Vuejs",
            description: "watch codepanion videos",
            status: TodoStatus.Pending,
        },
    ],
    [TodoStatus.inProgress]: [],
    [TodoStatus.Completed]: [],
};

const todoStore = reactive<TodoStore>(defaultVal);

export default () => {
    const getTodosByStatus = (todoStatus: TodoStatus) => {
        return computed(() => todoStore[todoStatus]);
    };

    return { getTodosByStatus };
}
