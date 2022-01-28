import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import Loader from './components/Common/Loader/Loader';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import WordContainer from './components/Word/WordContainer';

function App(props: any) {
  console.log('App', props);

  return (
    <BrowserRouter>
        <Header />
        <div className='container mb-4 flex-grow-1'>
        <Switch>
          <Route  path='/' exact render = {()=> props.isFetching ? <Loader /> : <Main /> } />
          <Route exact path='/not-found' render = {()=>props.isFetching ? <Loader /> : <NotFound />  } />
          <Route path='/:word' render = {() => props.isFetching ? <Loader /> : <WordContainer /> } />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
