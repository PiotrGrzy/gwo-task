import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

//reducers
import bookReducer from './books/booksReducer';
import cartReducer from './cart/cartReducer';
import orderReducer from './order/orderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  books: bookReducer,
  order: orderReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor, rootReducer };
