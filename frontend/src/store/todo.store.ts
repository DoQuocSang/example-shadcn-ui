import { create } from "zustand";
import type { Todo } from "../models/todo";
import { dummyData } from "../data/todo";
import type { Tab } from "../models/tab";

interface todoState {
  todos: Todo[];
  filterType: Tab;
  handleChangeFilterType: (tab: Tab) => void;
  handleAddTodo: (title: string) => void;
  countActiveItems: () => number;
  handleCompleteAllItems: () => void;
  handleUpdateTodo: (updatedTodo: Todo) => void;
  handleDeleteTodo: (id: number) => void;
  handleCompleteChange: (id: number, completed: boolean) => void;
  handleDeleteAllCompleted: () => void;
}

function getTodosFromSessionStorage() {
  const todosFromSessionStorage: Todo[] = JSON.parse(
    sessionStorage.getItem("todos") || "[]"
  );
  return todosFromSessionStorage.length > 0
    ? todosFromSessionStorage
    : dummyData;
}

export const useTodoStore = create<todoState>((set, get) => ({
  todos: getTodosFromSessionStorage(),
  filterType: "all",
  countActiveItems: () => get().todos.filter((todo) => !todo.completed).length,
  handleChangeFilterType: (tab) => set(() => ({ filterType: tab })),
  handleAddTodo: (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  handleCompleteAllItems: () =>
    set((state) => {
      const allCompleted = state.todos.every((todo) => todo.completed);
      const shouldCompleteAll = !allCompleted;

      return {
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: shouldCompleteAll,
        })),
      };
    }),
  handleUpdateTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      ),
    })),
  handleDeleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  handleCompleteChange: (id, completed) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      ),
    })),
  handleDeleteAllCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
}));
