import { useTodoStore } from "../../store/todo.store";
import type { Tab } from "../../models/tab";
import { Button } from "../ui/button";

export default function TodoSummary() {
  const countActiveItems = useTodoStore((state) => state.countActiveItems);
  const handleChangeFilterType = useTodoStore(
    (state) => state.handleChangeFilterType
  );
  const handleDeleteAllCompleted = useTodoStore(
    (state) => state.handleDeleteAllCompleted
  );

  function onChangeFilterType(tab: Tab) {
    handleChangeFilterType(tab);
  }

  function onDeleteAllCompleted() {
    handleDeleteAllCompleted();
  }

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-red-500 font-bold text-xl">
          {countActiveItems()}
        </span>
        item left
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onChangeFilterType("all")}
          variant={"ghost"}
          className="cursor-pointer font-normal"
        >
          All
        </Button>
        <Button
          onClick={() => onChangeFilterType("active")}
          variant={"ghost"}
          className="cursor-pointer font-normal"
        >
          Active
        </Button>
        <Button
          onClick={() => onChangeFilterType("completed")}
          variant={"ghost"}
          className="cursor-pointer font-normal"
        >
          Completed
        </Button>
      </div>
      <Button
        onClick={onDeleteAllCompleted}
        variant={"ghost"}
        className="cursor-pointer font-normal"
      >
        Clear completed
      </Button>
    </div>
  );
}
