import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: ''
    });
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
            throw new Error('Product not found');
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error('Failed to update product');
        }

        setSuccessMessage('Product updated successfully!');
        setTimeout(() => {
            navigate(`/products/${id}`);
        }, 2000); // Wait 2 seconds before redirecting
        } catch (error) {
        setErrorMessage(error.message);
        }
    };

    if (loading) {
        return (
            <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="text-center">
                    <Spinner animation="border" variant="primary" size="lg" />
                    <p className="mt-3 text-muted">Loading product details...</p>
                </div>
            </Container>
        );
    }

    return (
        <Container className="mt-5 pt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow-lg border-0">
                        <Card.Header className="bg-primary text-white text-center py-4">
                            <h2 className="mb-0">Edit Product</h2>
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
                                        name="title"
                                        value={product.title}
                                        onChange={handleChange}
                                        placeholder="Enter product title"
                                        required
                                        aria-describedby="titleHelp"
                                    />
                                    <Form.Text id="titleHelp" className="text-muted">
                                        Give a clear, descriptive title of the product.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formPrice" className="mb-3">
                                    <Form.Label className="fw-semibold">Price ($)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        name="price"
                                        value={product.price}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                        required
                                        aria-describedby="priceHelp"
                                    />
                                    <Form.Text id="priceHelp" className="text-muted">
                                        Enter the price.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formCategory" className="mb-3">
                                    <Form.Label className="fw-semibold">Category</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="category"
                                        value={product.category}
                                        onChange={handleChange}
                                        placeholder="e.g., electronics, clothing, books"
                                        required
                                        aria-describedby="categoryHelp"
                                    />
                                    <Form.Text id="categoryHelp" className="text-muted">
                                        Choose the product category.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formDescription" className="mb-4">
                                    <Form.Label className="fw-semibold">Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Describe your product in detail..."
                                        required
                                        aria-describedby="descriptionHelp"
                                    />
                                    <Form.Text id="descriptionHelp" className="text-muted">
                                        Provide a detailed description of the product.
                                    </Form.Text>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                        className="py-3"
                                    >
                                        Update Product
                                    </Button>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => navigate(`/products/${id}`)}
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

export default EditProduct;
