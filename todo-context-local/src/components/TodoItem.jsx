import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ currentTodo }) {
    
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    const [todoMsg, setTodoMsg] = useState(currentTodo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo = () => {
        updateTodo(currentTodo.id, {...currentTodo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(currentTodo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                currentTodo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={currentTodo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${currentTodo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (currentTodo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={currentTodo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(currentTodo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
