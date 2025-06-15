import type { Todo } from "@/models/todo";
import { useTodoItem } from "@/hooks/useTodoItem";
import { Checkbox } from "../ui/checkbox";
import { Trash } from "lucide-react";
import { Input } from "../ui/input";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const {
    editable,
    input,
    setInput,
    handleKeyUp,
    toggleEdit,
    onDeleteTodo,
    onCompleteChange,
  } = useTodoItem({
    todo,
  });

  return (
    <div className="group relative hover:bg-slate-100 hover:-mx-4 hover:px-4 flex items-center gap-4 border-b boder-slate-200 last:border-none py-2">
      {editable ? (
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            handleKeyUp(e);
          }}
          className="flex-1 font-semibold text-base px-4 py-2"
        />
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onCheckedChange={(checked) =>
              onCompleteChange(todo.id, checked === true)
            }
            className="data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <p
            className={
              "flex-1 text-pretty select-none font-semibold text-lg transition-all duration-150 ease-in-out " +
              (todo.completed
                ? "line-through text-slate-400"
                : "text-slate-600")
            }
            onDoubleClick={toggleEdit}
          >
            {todo.title}
          </p>

          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="cursor-pointer absolute top-1/2 right-0 group-hover:right-4 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100"
          >
            <Trash size={20} />
          </button>
        </>
      )}
    </div>
  );
}
