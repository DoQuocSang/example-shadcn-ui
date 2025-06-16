import { useState } from "react";
import { useTodoStore } from "../../store/todo.store";
import { ChevronDown } from "lucide-react";
import { Input } from "../ui/input";

export default function AddTodoForm() {
  const [input, setInput] = useState("");
  const handleAddTodo = useTodoStore((state) => state.handleAddTodo);
  const handleCompleteAllItems = useTodoStore(
    (state) => state.handleCompleteAllItems
  );

  function onAddTodo() {
    if (input.trim() === "") return;
    handleAddTodo(input);
    setInput("");
  }

  function onCompleteAllItems() {
    handleCompleteAllItems();
  }

  return (
    <div className="flex items-center rounded-xl shadow-sm bg-white text-slate-700">
      <button
        onClick={onCompleteAllItems}
        className="hover:bg-transparent cursor-pointer p-4"
      >
        <ChevronDown size={22} />
      </button>
      <Input
        type="text"
        name="main-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onAddTodo();
          }
        }}
        className="pr-4 py-6 w-full border-none"
        placeholder="What need to be done?"
      />
    </div>
  );
}
