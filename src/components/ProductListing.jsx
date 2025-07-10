// Clean, simple ProductListing component

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <Spinner animation="border" variant="primary" size="lg" />
          <p className="mt-3 text-muted">Loading products...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 pt-5">
        <Alert variant="danger" className="text-center">
          <Alert.Heading>Error Loading Products</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Our Products</h1>
          <p className="text-center text-muted lead">
            Explore our amazing collection
          </p>
        </Col>
      </Row>

      <Row>
        {products.map(product => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            className="mb-4"
          >
            <Card className="h-100 shadow-sm border-0 product-card">
              <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'contain', padding: '1rem' }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 mb-2" style={{ height: '3rem', overflow: 'hidden' }}>
                  {product.title}
                </Card.Title>
                <Card.Text className="text-muted small mb-2" style={{ height: '1.5rem' }}>
                  {product.category}
                </Card.Text>
                <Card.Text className="h5 text-primary fw-bold mb-3">
                  ${product.price}
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    as={Link}
                    to={`/products/${product.id}`}
                    variant="primary"
                    className="w-100"
                    aria-label={`View details for ${product.title}`}
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductListing;
