import { MessageSquareText } from "lucide-react";
import TodoList from "../todo/TodoList.component";

export default function Layout() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center px-6 py-10">
      <div className="max-w-screen-sm w-full flex flex-col gap-8">
        {/* ===== Header ===== */}
        <div className="flex justify-center">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-red-500 to-orange-500 font-black text-5xl border-red-500">
            TodoList
          </h1>
        </div>

        {/* ===== Todo pannel ===== */}
        <TodoList />

        {/* ===== Footer ===== */}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-xs mb-2 flex items-center gap-2">
            <MessageSquareText size={15} />
            Double click on Todo Item to edit
          </p>
          <p>This is an exercise in SDL Training</p>
          <p>
            Coded by <span className="text-red-500 font-semibold">SangDQ</span>
          </p>
        </div>
      </div>
    </div>
  );
}
