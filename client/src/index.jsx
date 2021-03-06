import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PredictorApp from './reducers/reducer';
import PredictionBox from './components/PredictionBox';

let store = createStore( PredictorApp );

window.onload = () => {

  ReactDOM.render(
    <Provider store={store}>
      <PredictionBox />
    </Provider>,
    document.getElementById( 'app' )
  )

};
