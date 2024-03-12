import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/provider";


let Container = () => {

  let contextObj=useContext(TodoItemsContext);
  let addMe=contextObj.handleAddMe;
  let [valDate, setDate] = useState("");
  let [valName, setName] = useState("");

  let handleText = (event) => {
    let text = event.target.value;
    setName(text);
  };

  let handleDate = (event) => {
    let date = event.target.value;
    setDate(date);
  };

  let handleAddMe=()=>{
    addMe(valName,valDate);
    setName("");
    setDate("");
  }

  return (
    <>
      <div className="ToDo">
        <input
          type="text"
          id="todo-add"
          placeholder="Enter.."
          value={valName}
          onChange={(event) => handleText(event)}
        />
        <input type="date" id="date" value={valDate} onChange={(event) => handleDate(event)} />
        <button type="button" onClick={handleAddMe}>
          Add
        </button>
      </div>
    </>
  );
};

export default Container;
