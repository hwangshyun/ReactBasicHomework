import React, { useState } from "react";
import "./Todoinput.css";
const Todoinput = () => {

//인풋태그
  const [input, setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
//할일 스테이트
  const [todos, setTodo] = useState([
    {
      id: "1",
      name: "끝내주게 밥먹기",
      complete: true,
    },
    {
      id: "2",
      name: "멋지게 커피마시기",
      complete: false,
    },
  ]);

  //추가버튼 할일추가 
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: String(Date.now()),
      name: input,
      completed: false,
    };

    setTodo([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodo(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const changeTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };    
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={input}
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={changeInput}
        />
        <button type="submit">+</button>
      </form>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <div className="todobox" key={todo.id}>
              <h5>{todo.name}</h5>
              <button onClick={() => changeTodo(todo.id)}>{todo.complete ? "취소" : "완료"}</button>
              <button onClick={()=>{deleteTodo(todo.id)}}>삭제</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todoinput;
