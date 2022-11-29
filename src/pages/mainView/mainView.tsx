import { ModalContainer } from "../../components/ModalContainer";
import { CreateTODO } from "./CreateTODO";
import { ListTODO } from "./ListTODO";

export const MainView = () => {
  return (
    <div className="d-flex justify-content-between h-100">
      <div className="w-100 h-100">
        <CreateTODO />
      </div>
      <div className="w-100 h-100">
        <ListTODO />
      </div>
    </div>
  );
};
