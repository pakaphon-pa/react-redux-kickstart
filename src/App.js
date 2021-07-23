import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./component/products/Product";
import ProductDetail from "./pages/product/ProductDetail";
import ProductList from "./pages/product/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:productId" exact component={ProductDetail} />
          <Route> 404 Not found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
