import { CreateTODO } from "./CreateTODO";
import { ListTODO } from "./ListTODO";
import { list, itemsInit } from "../../dataMedia";
import { useState } from "react";

export const MainView = () => {
  const [listTodo, setListTodo] = useState(list);

  const deleteElement = (id: number) => {
    const newList: itemsInit[] = [];

    listTodo.map((element) => {
      element.id !== id && newList.push(element);
    });
    setListTodo(newList);
  };

  const propsList = {
    list: listTodo,
    delElement: deleteElement,
  };

  const addTODO = (newTodo?: string, description?: string) => {
    if (newTodo && description) {
      let acum = -1;
      listTodo.map((element) => {
        acum = element.id > acum ? element.id : acum;
      });
      setListTodo(
        listTodo.concat([
          {
            id: acum + 1,
            nameList: newTodo,
            description: description,
            completed: false,
          },
        ])
      );
    }
  };

  const propsCreateTodo = {
    addTODO,
  };
  return (
    <div className="d-flex justify-content-between h-100">
      <div className="w-100 h-100">
        <CreateTODO {...propsCreateTodo} />
      </div>
      <div className="w-100 h-100">
        <ListTODO {...propsList} />
      </div>
    </div>
  );
};
