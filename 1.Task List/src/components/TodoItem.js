import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openmodal } from "../stores/actions/lists";
import { openconfmodal } from "../stores/actions/lists";
import Button from "./Button";

const TodoItem = () => {
  const todos = useSelector((state) => state.lists.todos);
  const dispatch = useDispatch();

  const open = (id, title) => {
    dispatch(openmodal(id, title));
  };

  const openconf = (id) => {
    dispatch(openconfmodal(id));
  };

  return (
    <div>
      {todos.map((item) => (
        <div style={todoItem} key={item.id}>
          <p>{item.title}</p>
          <div>
          <Button
            text="Edit"
            variant="success"
            action={() => open(item.id, item.title)}
            />
        <Button
            text="Delete"
            variant="warning"
            action={() => openconf(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#FFF",
    display:"flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}