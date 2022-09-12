import {
    Alert,
    CircularProgress,
    Grid,
  } from '@mui/material';
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import { useSnackbar } from 'notistack';
  import React, { useContext, useEffect, useState } from 'react';
  import Layout from '../components/Layout';
  import ProductItem from '../components/ProductItem';
  import classes from '../utils/classes';
  import client from '../utils/client';
  import { urlForThumbnail } from '../utils/image';
  import { Store } from '../utils/Store';
  
  export default function SearchScreen() {
    const router = useRouter();
    const {
      category = 'all',
      query = 'all',
      price = 'all',
      rating = 'all',
      sort = 'default',
    } = router.query;
    const [state, setState] = useState({
      categories: [],
      products: [],
      error: '',
      loading: true,
    });
  
    const { loading, products, error } = state;
    const [, setCategories] = useState([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const { data } = await axios.get(`/api/products/categories`);
          setCategories(data);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchCategories();
  
      const fetchData = async () => {
        try {
          let gQuery = '*[_type == "product"';
          if (category !== 'all') {
            gQuery += ` && category match "${category}" `;
          }
          if (query !== 'all') {
            gQuery += ` && name match "${query}" `;
          }
          if (price !== 'all') {
            const minPrice = Number(price.split('-')[0]);
            const maxPrice = Number(price.split('-')[1]);
            gQuery += ` && price >= ${minPrice} && price <= ${maxPrice}`;
          }
          if (rating !== 'all') {
            gQuery += ` && rating >= ${Number(rating)} `;
          }
          let order = '';
          if (sort !== 'default') {
            if (sort === 'lowest') order = '| order(price asc)';
            if (sort === 'highest') order = '| order(price desc)';
            if (sort === 'toprated') order = '| order(rating desc)';
          }
  
          gQuery += `] ${order}`;
          setState({ loading: true });
  
          const products = await client.fetch(gQuery);
          setState({ products, loading: false });
        } catch (err) {
          setState({ error: err.message, loading: false });
        }
      };
      fetchData();
    }, [category, price, query, rating, sort]);
  
    
    const {
      state: { cart },
      dispatch,
    } = useContext(Store);
  
    const { enqueueSnackbar } = useSnackbar();
    const addToCartHandler = async (product) => {
      const existItem = cart.cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${product._id}`);
      if (data.countInStock < quantity) {
        enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
        return;
      }
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          _key: product._id,
          name: product.name,
          countInStock: product.countInStock,
          slug: product.slug.current,
          price: product.price,
          image: urlForThumbnail(product.image),
          quantity,
        },
      });
      enqueueSnackbar(`${product.name} added to the cart`, {
        variant: 'success',
      });
      router.push('/cart');
    };
  
    return (
      <Layout title="search">
        <Grid sx={classes.section} container spacing={2}>
          <Grid item md={12}>
          </Grid>
            <Grid sx={classes.section} container spacing={3}>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert>{error}</Alert>
              ) : (
                <Grid container spacing={3}>
                  {products.map((product) => (
                    <Grid item md={4} key={product.name}>
                      <ProductItem
                        product={product}
                        addToCartHandler={addToCartHandler}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
        </Grid>
      </Layout>
    );
  }
  