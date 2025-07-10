import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage() {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={6}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="text-center p-5">
                <h1 className="display-4 mb-4 text-primary fw-bold">
                  Welcome to My FakeStore
                </h1>
                <p className="lead mb-4 text-muted">
                  A one-stop shop for everything you need!
                </p>
                <div className="d-grid gap-2 d-md-block">
                  <Button
                    as={Link}
                    to="/products"
                    variant="primary"
                    size="lg"
                    className="px-5 py-3 me-md-3 mb-2 mb-md-0"
                  >
                    Shop Now
                  </Button>
                  <Button
                    as={Link}
                    to="/add-product"
                    variant="outline-secondary"
                    size="lg"
                    className="px-5 py-3"
                  >
                    Sell Products
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <span className="display-6 text-primary">🛍️</span>
                </div>
                <Card.Title className="h5">Effortless and Easy</Card.Title>
                <Card.Text className="text-muted">
                  Browse, Shop, and Sell!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <span className="display-6 text-success">💡</span>
                </div>
                <Card.Title className="h5">Quality Products</Card.Title>
                <Card.Text className="text-muted">
                  Curated selection of top-quality items
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <span className="display-6 text-info">🚀</span>
                </div>
                <Card.Title className="h5">Fast Delivery</Card.Title>
                <Card.Text className="text-muted">
                  Quick and reliable shipping worldwide
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
