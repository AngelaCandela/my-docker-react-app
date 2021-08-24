import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ContactsPage } from './pages/ContactsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';

import Navbar from './components/Navbar';
import Index from './pages/Index';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import TablePage from './pages/TablePage';
import TodoList from './pages/TodoList';
import Error from './pages/Error';
import Footer from "./components/Footer";
import ProductsElements from './data/products.json';

import "./css/style.css"
import EditProduct from "./pages/EditProduct";

const App = () => {

  const [products, setProducts] = useState(ProductsElements);

  return (
    <div className="d-flex flex-column justify-content-stretch">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/appointments">
            <AppointmentsPage />
          </Route>
          <Route exact path="/">
            <Index products={products} />
          </Route>
          <Route path="/create">
            <CreateProduct setProducts={setProducts} />
          </Route>
          <Route path="/edit/:productID">
            <EditProduct products={products} setProducts={setProducts} />
          </Route>
          <Route path="/table" component={TablePage} />
          <Route path="/todos" component={TodoList} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
};

export default App;
