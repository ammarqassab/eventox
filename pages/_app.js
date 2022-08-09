import React from 'react';
import '../styles/globals.css'
import '../styles/all.min.css'
import AppLayout from '../src/components/Layout/AppLayout'
import { Provider } from 'react-redux'
import store from '../src/Store/Store'


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <AppLayout><Component {...pageProps} /></AppLayout>
    </Provider>
  );
}

export default MyApp
