import { useContext } from "react";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, setCart } = useContext(PizzaContext);

  const handleEmptyCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    Swal.fire({
      icon: "success",
      title: "¡Gracias por tu compra!",
      text: "¡Esperamos que disfrutes tus deliciosas pizzas!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
      }
    });
  };

  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <Container className="cart-view">
      <h2 className="cart-title m-5">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div>
          <h3 className="m-4">El carrito está vacío 😢</h3>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <Card key={item.id} className="cart-card m-5 p-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Card.Img src={item.img} alt={item.name} />
                </Col>
                <Col xs={6}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text><strong>Precio:</strong> ${item.price}</Card.Text>
                  <Card.Text><strong>Subtotal:</strong> ${calculateSubtotal(item.price, item.quantity)}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                </Col>
                <Col xs={3}>
                  <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <Button variant="outline-danger" onClick={() => decrementQuantity(item.id)} style={{ padding: "0.25rem 0.5rem" }}>-</Button>
                      <span style={{ padding: "0.25rem 0.5rem" }}>{item.quantity}</span>
                      <Button variant="outline-success" onClick={() => incrementQuantity(item.id)} style={{ padding: "0.25rem 0.5rem" }}>+</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card>
          ))}
          <Row className="justify-content-between">
            <Col xs={4}>
              <Button className="p-4" variant="danger" onClick={handleEmptyCart}>🗑️ Vaciar Carrito</Button>
            </Col>
            <Col xs={4}>
              <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
            </Col>
            <Col xs={4}>
              <Button className="p-4" variant="success" onClick={handleCheckout}>✅ Finalizar Compra</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Cart;