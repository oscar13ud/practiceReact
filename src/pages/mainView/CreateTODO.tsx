import { Container } from "../../components/Container";

export const CreateTODO = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Container height="h-50" width="w-75">
        <div className="d-flex flex-column h-100 justify-content-around">
          <h1 className="text-center pt-4">Crear TODO</h1>
          <button className="button-3">Crear</button>
        </div>
      </Container>
    </div>
  );
};
