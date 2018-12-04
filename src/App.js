import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './Courses';
import './App.css';

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
})

const App = () => (
  <ApolloProvider {...{client}}>
    <div>
        <h1>Graphql Example</h1>
        <Courses />
    </div>
  </ApolloProvider>
);

export default App;
