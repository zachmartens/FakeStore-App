
# FakeStore App
Building a FakeStore App using React, React Router, and FakeStoreAPI. 

Objectives:
- Organize and structure a React application using reusable components
- Manage state using useState
- Fetch, create, update, and delete products using Axios or Fetch API
- Implement React Router for multi-page navigation
- Apply React Bootstrap for UI styling and responsiveness
- Handle loading states, errors, and API responses effectively
## Table of Contents

- Home Page [#home]
- ProductList Component [#productList]
- Product Details Component [#productDetails]
- Add Products Page [#addProduct]
- Edit Product Page [#editProduct]
- Delete Product Functionality [#deleteProduct]
- Navigation Bar [#nav]


## Home Page

- Displaying a welcome message and introduction to the store
- Contains a button to navigate to the Product Listing page.
- Styled using React Bootstrap

## Product Listing Page

- Fetches and displays a list of products from FakeStore API
- Products displayed in a visually structured layout
- Products display Image, Title, Price, and Button to view details
- Integrates React Router for navigation


## Product Details Page

- Display product details: Name, Price, description, category and price.
- Uses useParams() to extract the product ID from the URL
- Fetches product data from FakeStore API
- Handling loading statess and error messages

## Add Product Page
- A form to create a new product using FakeStoreAPI (POST request)
- Submitting form sends data to FakeStoreAPI
- Display confirmation message when new product is "created"
- Uses React Bootstrap form components.

## Edit Product Page
- Allows users to update exiting products (PUT request to FakeStoreAPI)
- Pre-fills form with existing product data
- Submitting form updates the product in the API
- Display success message after updating

## Delete Product Functionality
- Users can delete a product (DELETE request)
- Confirmation modal before deletion
- After deletion, redirected to the product listing page

## Navigation
- React Bootstrap Navbar present acros entire app
- includes links to: Home, Product Listing, Add Product




## Authors

- [@zachmartens](https://www.github.com/zachmartens)


## Lessons Learned

While building the FakeStore App, I was able to deepen my knowledge and understanding around React, React Router, and React Bootstrap. While my comprehension around structure and flow between components is strengthening, I have discovered the next step in my React knowledge is quickly discovering where new features or elements can be implemented into larger files of code.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
