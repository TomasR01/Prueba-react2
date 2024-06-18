import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Navigation = () => {
  const { getTotalPrice } = useContext(PizzaContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="text-white"
            style={{ fontSize: "28px" }}
          >
            <span role="img" aria-label="carrito">
              🍕
            </span>{" "}
            Pizzería Mamma Mía
          </Navbar.Brand>
          <div className="ms-auto">
            <NavLink
              to="/carrito"
              className="nav-link text-white"
              style={{ fontSize: "23px" }}
            >
              <span role="img" aria-label="carrito">
                🛒
              </span>{" "}
              Carrito (${getTotalPrice()})
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;