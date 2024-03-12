import { useContext } from "react";
import { TodoItemsContext } from "../store/provider";
import Item from "./Item";

let TodoItem = () => {
  let contextObj=useContext(TodoItemsContext);
  let items=contextObj.valTask;

  return (
    <>
     { items.map((item)=>(
      <Item item={item} key={item}></Item>
      ))
     }
    </>
  );
};

export default TodoItem;
