import { Card, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

const TarjetaProducto = ({ producto }) => {
  return (
    <Col lg={3} md={4} sm={12} className="mb-4">
      <Zoom cascade triggerOnce delay={10} duration={600}>x
        <Card>
          {producto.imagen && (
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
          )}
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              Precio: C${producto.precio} <br />
              Categoría: {producto.categoria}
            </Card.Text>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default TarjetaProducto;