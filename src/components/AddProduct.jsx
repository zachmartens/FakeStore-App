import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          description,
          category,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      // Check if response has content before parsing JSON
      const responseText = await response.text();
      let data;

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          // If JSON parsing fails, create a mock response
          data = { id: Date.now() }; // Use timestamp as mock ID
        }
      } else {
        // If no response content, create a mock response
        data = { id: Date.now() }; // Use timestamp as mock ID
      }

      setSuccessMessage('Product added successfully!');
      setTimeout(() => {
        navigate(`/products/${data.id}`);
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h2 className="mb-0">Add New Product</h2>
            </Card.Header>
            <Card.Body className="p-4">
              {successMessage && (
                <Alert variant="success" className="text-center">
                  <strong>Success!</strong> {successMessage}
                </Alert>
              )}
              {errorMessage && (
                <Alert variant="danger" className="text-center">
                  <strong>Error:</strong> {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle" className="mb-3">
                  <Form.Label className="fw-semibold">Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a clear, descriptive title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPrice" className="mb-3">
                  <Form.Label className="fw-semibold">Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCategory" className="mb-3">
                  <Form.Label className="fw-semibold">Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., electronics, clothing, books"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDescription" className="mb-4">
                  <Form.Label className="fw-semibold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Describe your product in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="py-3"
                  >
                    Add Product
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate('/products')}
                    size="lg"
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;
