// Turfmob entry point

// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* ReactQL */

// Config API, for adding reducers and configuring our ReactQL app
import config from 'kit/config';

/* App */

// Components
import Login from 'src/components/login';

// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.
import './styles.global.css';

// ----------------------

// Enable built-in GraphQL server
config.enableGraphQLServer();

// 'Coming soon'...
export default () => (
  <Login />
);
