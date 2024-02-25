import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(storedTodos);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changer = (e) => {
    setNewTask(e.target.value);
  };

  const taskAdder = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4(), done: false }];
    });
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const allDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          done: true,
        };
      })
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle mb-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h4>ToDo List</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="input-group input-group-lg p-2">
        <span
          style={{ border: "1px solid blue" }}
          className="bg-primary-subtle input-group-text"
          id="inputGroup-sizing-lg"
        >
          Task Adder
        </span>
        <input
          style={{ border: "1px solid blue" }}
          type="text"
          placeholder="add a task"
          value={newTask}
          onChange={changer}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        <button
          style={{ border: "1px solid blue" }}
          type="button"
          onClick={taskAdder}
          className="btn btn-outline-primary"
        >
          Add Task
        </button>
      </div>
      <br />
      <hr />
      <h2 className="placehodler col-12 bg-primary-subtle text-center p-2 border-primary"
      styles={{backgroundColor:"linear-gradient(to left, rgba(193, 197, 201, 0.845), #658ab8)"}}>Your Todo List</h2>
      <hr />
      <div className="d-flex justify-content-center">
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              style={{ display: "flex", justifyContent: "space-between" }}
              key={todo.id}
              className="list-group-item list-group-item-primary mb-1"
            >
              <div style={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}>{todo.task}</div>
              <div>
                <button
                  onClick={() => deleteTask(todo.id)}
                  className="btn mx-3 btn-outline-danger"
                >
                  <i className="fa-solid fa-x"></i>
                </button>
                <button
                  onClick={() => doneTask(todo.id)}
                  className="btn btn-outline-success"
                >
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            </li>
          ))}
          <button
            onClick={allDone}
            className="btn btn-outline-success rounded-pill my-3"
          >
            Mark all tasks as <i className="fa-solid fa-check"></i>{" "}
          </button>
        </ul>
      </div>
    </>
  );
}

export default App;
