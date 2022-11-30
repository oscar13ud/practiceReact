import { useState } from "react";
import { Container } from "../../components/Container";
import { FormCreateTODO } from "./FormCreateTODO";

export const CreateTODO = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <FormCreateTODO
        isVisible={modalVisible}
        //onAccept={() => deleteElement(idToDelete)}
        onCancel={() => setModalVisible(false)}
      />
      <div className="h-100 d-flex justify-content-center align-items-center">
        <Container height="h-50" width="w-75">
          <div className="d-flex flex-column h-100 justify-content-around">
            <h1 className="text-center pt-4">Crear TODO</h1>
            <button onClick={() => setModalVisible(true)} className="button-3">
              Crear
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};
