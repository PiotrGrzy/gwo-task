import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import Notification from './components/Notification';
import Cart from './pages/cart';
import CheckoutPage from './pages/checkout';
import Home from './pages/home';

function App() {
  const { notification } = useSelector((state) => state.order);
  return (
    <>
      <GlobalStyles />
      {notification && <Notification />}
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutPage} />
      </Router>
    </>
  );
}

export default App;
