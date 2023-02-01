import { CreateTODO } from "./CreateTODO";
import { ListTODO } from "./ListTODO";
import { list, itemsInit } from "../../dataMedia";
import { useState } from "react";

export const MainView = () => {
  const [listTodo, setListTodo] = useState<itemsInit[]>(list);

  const deleteElement = (id: number) => {
    const newList: itemsInit[] = [];

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

  const onSetChecked = (id: number) => {
    const checkedList: itemsInit[] = [];

    listTodo.map((element) => {
      if (element.id === id) {
        element.completed = !element.completed;
      }
      checkedList.push(element);
    });

    setListTodo(checkedList);
  };

  const propsList = {
    list: listTodo,
    delElement: deleteElement,
    editElement: editElement,
    onSetChecked: onSetChecked,
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
