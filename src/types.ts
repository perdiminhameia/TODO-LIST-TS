export enum TodoStatus {
    Pending = "TAREFA",
    InProgress = "EM ABERTA",
    Completed = "CONCLUIDA"

}

export interface Todo {
    id: number
    title: string;
    description: string;
    status: TodoStatus;
}