function TodoList() {
  const tasks = ["Wash car", "Do homework", "Create App"];
  return (
    <>
      <div className="todo-App">
        <h2>ToDo App</h2>
        <div>
          <ul className="todo__list">
            {tasks.map((task, index) => (
              <li className="todo__list__item">
                {index}. {task}
                <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
