import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Integrated Delete Product Functionality
  const handleDelete = async () => {
    try {
      setDeleteError('');
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      setDeleteMessage('Product deleted successfully!');
      setTimeout(() => {
        navigate('/products');
      }, 2000);
    } catch (error) {
      setDeleteError(error.message);
    }
    setShowDeleteModal(false);
  };

  if (loading) {
    return (
      <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading product details...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 pt-5">
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">Error</h4>
          <p>{error}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-5">
      {/* Delete Success/Error Messages */}
      {deleteMessage && (
        <Alert variant="success" className="text-center mb-4">
          {deleteMessage}
        </Alert>
      )}
      {deleteError && (
        <Alert variant="danger" className="text-center mb-4">
          {deleteError}
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col xs={12} lg={10} xl={8}>
          <Card className="shadow-lg border-0">
            <Row className="g-0">
              <Col md={6}>
                <div className="p-4 h-100 d-flex align-items-center justify-content-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <Card.Body className="p-4 h-100 d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-secondary mb-2">{product.category}</span>
                    <h1 className="h3 mb-3">{product.title}</h1>
                    <p className="h2 text-primary fw-bold mb-3">${product.price}</p>
                  </div>

                  <div className="mb-4 flex-grow-1">
                    <h3 className="h5 mb-3">Description</h3>
                    <p className="text-muted">{product.description}</p>
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Button
                      variant="primary"
                      size="lg"
                      className="flex-fill"
                      onClick={() => alert('Added to cart!')}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="flex-fill"
                      as={Link}
                      to={`/edit-product/${product.id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="lg"
                      className="flex-fill"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete <strong>"{product.title}"</strong>?</p>
          <p className="text-muted">This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetails;
