import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { ModalContainer } from "../../components/ModalContainer";
import { itemsInit } from "../../dataMedia";

export const ListTODO = (props: listTODO) => {
  console.log(props);
  const [modalDeleteElem, setModalDeleteElem] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number>(-1);
  const [list, setList] = useState(props.list);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  const deleteElement = (id: number) => {
    const newList: { id: number; nameList: string }[] = [];

    list.map((element) => {
      element.id !== id && newList.push(element);
    });
    setList(newList);
    setModalDeleteElem(false);
  };

  const deleteElem = (id: number) => {
    setIdToDelete(id);
    setModalDeleteElem(true);
  };

  return (
    <>
      <ModalContainer
        isVisible={modalDeleteElem}
        onAccept={() => deleteElement(idToDelete)}
        onCancel={() => setModalDeleteElem(false)}
      />
      <div className="h-100 d-flex align-items-center">
        <Container height="h-75" width="w-75">
          <div className="d-flex flex-column h-100">
            <h1 className="text-center pt-4">Lista de TODO</h1>
            <div className="align-items-center d-flex flex-column overflow-auto">
              <ul className="w-100 pe-4">
                {list.length ? (
                  list.map((element) => (
                    <ListToShow
                      key={element.id}
                      id={element.id}
                      nameList={element.nameList}
                      deleteElement={(ev) => deleteElem(ev)}
                    />
                  ))
                ) : (
                  <div className="text-center pt-5">
                    No hay una lista de TODOs para Mostrar
                  </div>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const ListToShow = (props: listToShow) => {
  return (
    <li className="item">
      <div className="justify-content-between w-100 d-flex">
        <p className="item-p">{props.nameList}</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <input
            className="form-check-input align-self-center me-4"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <button
            type="button"
            className="btn btn-outline-primary containerIcons"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger containerIcons"
            onClick={() => props.deleteElement(props.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

interface listToShow {
  id: number;
  nameList: string;
  deleteElement: (id: number) => void;
}

interface listTODO {
  list: itemsInit[];
}
