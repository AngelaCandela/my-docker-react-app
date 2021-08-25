import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/style.css"
import { ContactsPage } from './pages/ContactsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import Navbar from './components/templates/Navbar';
import Index from './pages/Index';
import CreateProduct from './pages/CreateProduct';
import TablePage from './pages/TablePage';
import TodoList from './pages/TodoList';
import Error from './pages/Error';
import Footer from "./components/templates/Footer";
import ProductsElements from './data/products.json';
import EditProduct from "./pages/EditProduct";
import AppReducer from "./components/exampleHooks/useReducer";
import AppMemo from "./components/exampleHooks/useMemo";
import AppUseCallback from "./components/exampleHooks/useCallback";

const App = () => {

  const [products, setProducts] = useState(ProductsElements);

  const memoizedProductValue = useMemo(() => {
    console.log('Render Product');
    return products;
  }, [products]);


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
            <Index products={memoizedProductValue} />
          </Route>
          <Route path="/create">
            <CreateProduct setProducts={setProducts} />
          </Route>
          <Route path="/edit/:productID">
            <EditProduct products={memoizedProductValue} setProducts={setProducts} />
          </Route>
          <Route path="/table" component={TablePage} />
          <Route path="/useReducer" component={AppReducer} />
          <Route path="/useMemo" component={AppMemo} />
          <Route path="/useCallback" component={AppUseCallback} />
          <Route path="/todos" component={TodoList} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
};

export default App;
