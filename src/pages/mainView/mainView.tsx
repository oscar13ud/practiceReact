import { CreateTODO } from "./CreateTODO";
import { ListTODO } from "./ListTODO";
import { list } from "../../dataMedia";
import { useState } from "react";

export const MainView = () => {
  const [listTodo, setListTodo] = useState(list);

  const deleteElement = (id: number) => {
    const newList: { id: number; nameList: string; description?: string }[] = [];

    listTodo.map((element) => {
      element.id !== id && newList.push(element);
    });
    setListTodo(newList);
  };

  const editElement = (id: number, name: string|undefined, description: string|undefined) => {
    let index = listTodo.findIndex(element => element.id === id)
    name && (listTodo[index].nameList = name)
    description && ((listTodo[index].description = description))
  }

  const propsList = {
    list: listTodo,
    delElement: deleteElement,
    editElement: editElement,
  };

  const addTODO = (newTodo?: string, description?: string) => {
    if (newTodo && description) {
      let acum = -1;
      listTodo.map((element) => {
        acum = element.id > acum ? element.id : acum;
      });
      setListTodo(listTodo.concat([{ id: acum + 1, nameList: newTodo, description: description }]));
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
