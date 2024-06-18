import { useNavigate } from "react-router-dom";
import PizzaDetail from "../components/PizzaDetail";
import { Button } from "react-bootstrap";

const Pizza = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section>
      <PizzaDetail />
      <Button
        variant="danger"
        className="see-button m-2 p-2"
        onClick={handleGoBack}
      >
        🏠 Volver a Inicio
      </Button>
    </section>
  );
};

export default Pizza;