import { ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import Header from './Components/Header/HeaderComponent';
import ListComponent from './Components/List/ListComponent';
import client from './Configuration/apollo';

function App() {

  const [state, setState] = React.useState({
    data: [],
    current: null,
    text: ""
  });
  return (
    <div className="App">
      <header className="App-header">
        <Header setState={setState} state={state} />
        <ListComponent  setState={setState} state={state} />
      </header>
    </div>
  );
}



export default function ApolloApp() {
  return (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  )
};
