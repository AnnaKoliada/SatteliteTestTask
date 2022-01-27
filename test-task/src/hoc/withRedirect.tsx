import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

interface Props { isWord: boolean; isChecked: boolean }


const mapStateToPropsForRedirect = (state: { word: { isWord: any; isChecked:any }; }) => ({
  isWord: state.word.isWord,
  isChecked: state.word.isChecked,
});

export const withRedirect = (Component: any ) => {
  class RedirectComponent extends React.Component<Props>{

    render(): any {
      if (!this.props.isWord && this.props.isChecked) return (<Redirect to= '/not-found' />);
      return <Component { ...this.props } /> ;
    }

  }
  const ConnectedwithRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedwithRedirect;
};