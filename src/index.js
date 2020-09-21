//Step 1 - import and set up provider, store/createStore in index.js. Import reducer here.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialReducer } from "./reducers";

const store = createStore(initialReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);
