import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import './style/style.css'

import App from './components/App.jsx';
import SongList from './components/SongList.jsx';
import SongCreate from './components/SongCreate.jsx';
import SongDetails from './components/SongDetail.jsx';

const client = new ApolloClient({
  cache: new InMemoryCache()
});

const Root = () => {

  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="songs/new" component={SongCreate}/>
          <Route path="songs/:id" component={SongDetails}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
