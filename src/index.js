import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//setup apollo client START
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/'
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
//setup apollo client END

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
