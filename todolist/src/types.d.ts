interface ITodo {
    todo: string,
    completed: boolean
}

type handleprops = {
    todoList: ITodo[]
    handleEdit: (i:number) => void;
    toggleTodo: ({ todo: string, completed: boolean }:ITodo) => void;
    handleDelete: ({ todo: string, completed: boolean }:ITodo) => void;
  }