import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../Layout';
import BooksList from '../components/BooksList';
import { fetchAllBooks } from '../redux/books/booksActions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container">
        <BooksList />
      </div>
    </Layout>
  );
};

export default Home;
