import bagImg from "./Picture1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Slide() {
  return (
    <div className="main_slide">
       <section className="slide">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="heading1">The Bag that Belongs to You</h1>
            <h2 className="heading2">Experience the Future of Travel</h2>
            <h2 className="heading2">Designed for Security, Connectivity, and Convenience</h2>
            <button className="shadow__btn">Pre-Order</button>
          </Col>

          {/* Image Section */}
          <Col lg={6} className="text-center">
            <div className="hero_image">
              <img src={bagImg} className="img-fluid" alt="Smart Bag" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </div>
   
  );
}

export default Slide;