import React from 'react';
import { connect } from 'react-redux';
import App from './App';

function AppContainer(props:{ isFetching: boolean }) {
  return <App {...props} />;
}
const mapStateToProps = (state: { fetching: { isFetching: boolean; } } ) => {
  return {
    isFetching: state.fetching.isFetching,
  };
};
export default connect(mapStateToProps, {})(AppContainer);
