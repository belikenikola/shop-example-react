import './App.css';

import Shop from './pages/Shop';
import Product from './pages/Product';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
