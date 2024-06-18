import { useContext } from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PizzaGallery = () => {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleVerMas = (id) => {
    navigate(`/pizza/${id}`);
  };

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    Swal.fire({
      icon: "success",
      title: "¡Pizza añadida al carrito!",
      showConfirmButton: false,
      timer: 900,
    });
  };

  return (
    <section className="pizza-card m-5">
      <Row xs={1} md={3} className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <Card className="card-bg">
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body className="card-title-bg">
                <Card.Title className="card-title text-start">
                  {pizza.name}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush p-3 text-center card-ingredients-bg">
                <Card.Text className="ingredients-text text-start">
                  <strong>Ingredientes:</strong>
                </Card.Text>
                {pizza.ingredients.map((ingredient, index) => (
                  <Card.Text key={index} className="ingredients-text">
                    🍕{ingredient}
                  </Card.Text>
                ))}
              </ListGroup>

              <Card.Body className="text-center">
                <Card.Text className="price">${pizza.price}</Card.Text>
                <Button
                  variant="danger"
                  className="see-button m-2 p-2"
                  onClick={() => handleVerMas(pizza.id)}
                >
                  <strong>👀 Ver más</strong>
                </Button>
                <Button
                  variant="dark"
                  className="add-button m-2 p-2"
                  onClick={() => handleAddToCart(pizza)}
                >
                  <strong>🛒 Añadir</strong>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default PizzaGallery;