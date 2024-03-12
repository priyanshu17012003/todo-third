import { useReducer } from "react";
import { createContext, useContext, useState } from "react";

export const TodoItemsContext = createContext({
  valTask: [],
  handleAddMe: () => {},
  handleDeleteMe: () => {},
});

let reducerTask=(valTask,action)=>{

  let newArr=valTask;
  if(action.type=== "ADD_TASK")
  {
     newArr = [...valTask, { name: action.payload.handleName, date: action.payload.handleDate }];
  }
  else if(action.type === "DELETE_TASK"){
     newArr = valTask.filter((task) => task.name !== action.payload.taskName);
  }

  return newArr;
}

let TodoItemsProvider = ({ children }) => {
  let task = [];
  let [valTask,dispatchTask]=useReducer(reducerTask,task);

  const handleAddMe = (handleName, handleDate) => {
    
    const newTaskAction={
      type:"ADD_TASK",
      payload:{
        handleName,
        handleDate,
      }
    }
    
    dispatchTask(newTaskAction);
  };



  const handleDeleteMe = (taskName) => {

    let deleteTaskAction={
      type:"DELETE_TASK",
      payload:{
        taskName,
      }
    }
    
    dispatchTask(deleteTaskAction);
  };


  return (
    <TodoItemsContext.Provider value={{ valTask, handleAddMe, handleDeleteMe }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsProvider;
