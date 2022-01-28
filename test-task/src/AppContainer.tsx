import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Main from './components/Main/Main';
import Word from './components/Word/Word';

function AppContainer(props: any) {
  return <App {...props} />;
}
const mapStateToProps = (state: { word: { word: any; }; fetching: { isFetching: any; }; } ) => {
  return {
    isFetching: state.fetching.isFetching,
  };
};
export default connect(mapStateToProps, {})(AppContainer);
