import { useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Swal from "sweetalert2";

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);
  const pizza = pizzas.find((pizza) => pizza.id === id);

  const handleAddToCart = () => {
    addToCart(pizza);
    Swal.fire({
      icon: "success",
      title: "¡Pizza añadida al carrito!",
      showConfirmButton: false,
      timer: 900,
    });
  };

  return (
    <section className="pizza-detail">
      {pizza && (
        <Card className=" detail-card card-bg">
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body className="card-title-bg">
            <Card.Title className="card-title text-start">
              {pizza.name}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush p-3 text-center card-ingredients-bg">
            <Card.Text className="text-start ingredients-text">
              <strong>Ingredientes:</strong>
            </Card.Text>
            {pizza.ingredients.map((ingredient, index) => (
              <Card.Text key={index} className="d-flex flex-wrap ingredients-text">
                🍕{ingredient}
              </Card.Text>
            ))}
            <Card.Text className="text-start ingredients-text">
              <strong>Descripción:</strong>
            </Card.Text>
            <Card.Text className="text-start ingredients-desc">{pizza.desc}</Card.Text>
          </ListGroup>
          <Card.Body className="text-center">
            <Card.Text className="price">${pizza.price}</Card.Text>
            <Button
              variant="dark"
              className="add-button m-2 p-2"
              onClick={handleAddToCart}
            >
              <strong>🛒 Añadir al carrito</strong>
            </Button>
          </Card.Body>
        </Card>
      )}
    </section>
  );
};

export default PizzaDetail;