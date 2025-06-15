import { Card, CardContent, CardFooter } from "@/components/ui/card";
import TodoItem from "./TodoItem.component";
import useTodo from "@/hooks/useTodos";
import TodoSummary from "./TodoSummary";
import AddTodoForm from "./AddTodoItemForm";

export default function TodoList() {
  const { todos, getFilteredTodos } = useTodo();

  return (
    <div className="flex flex-col justify-center gap-4">
      <AddTodoForm />
      {todos.length > 0 && (
        <>
          <Card className="w-full">
            <CardContent>
              {getFilteredTodos().map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}

              {getFilteredTodos().length === 0 && (
                <p className="text-center text-slate-600 font-medium">
                  There is no item
                </p>
              )}
            </CardContent>
            <CardFooter>
              <TodoSummary />
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}
