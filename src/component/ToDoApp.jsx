import { useState } from "react";

export default function () {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    const newTodo = {
      id: Math.random(),
      title: userInput,
    };

    setTodos((prev) => [...prev, newTodo]);
    setUserInput("");
  };

  const handleDelete = (id) => {
    const filterToDo = todos.filter((element) => element.id !== id);
    setTodos(filterToDo);
  };

  return (
    <div>
      <h2>To Do App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-el"
          placeholder="To do"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button>Add Item</button>
      </form>

      {todos.length === 0 ? (
        <h3>Not Found</h3>
      ) : (
        <ul>
          {todos.map((el) => (
            <div key={el.id}>
              <li>{el.title}</li>
              <button onClick={() => handleDelete(el.id)}>
                Delete Item
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}