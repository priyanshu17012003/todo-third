import { useContext } from "react";
import { TodoItemsContext } from "../store/provider";

let ErrorMess = () => {
  let contextObj=useContext(TodoItemsContext);
  let items=contextObj.valTask;
  let errMess = items.length === 0 ? <h4>Feed Me</h4> : null;

  return(
    <>
        {errMess}
    </>
  );
};

export default ErrorMess;
