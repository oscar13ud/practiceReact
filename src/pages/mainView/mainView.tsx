import { CreateTODO } from "./CreateTODO";
import { ListTODO } from "./ListTODO";
import { list } from "../../dataMedia";
import { useState } from "react";

export const MainView = () => {
  const [listTodo, setListTodo] = useState(list);

  const propsList = {
    list: listTodo,
  };

  const addTODO = (newTodo?: string) => {
    if (newTodo) {
      let acum = -1;
      listTodo.map((element) => {
        acum = element.id > acum ? element.id : acum;
      });
      setListTodo(listTodo.concat([{ id: acum + 1, nameList: newTodo }]));
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
