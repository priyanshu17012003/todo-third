import { useContext } from "react";
import { TodoItemsContext } from "../store/provider";


let Item = ({item}) => {
  let contextObj = useContext(TodoItemsContext);
  let items = contextObj.valTask;
  let deleteMe = contextObj.handleDeleteMe;

  return (
    <>
      <div className="row">
        <div className="col-1">
          <div className="list">{item.name}</div>
        </div>
        <div className="col-2">
          <div className="list">{item.date}</div>
        </div>
        <div className="col-3">
          <div className="list">
            <button
              type="button"
              id="delete"
              onClick={() => deleteMe(item.name)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
