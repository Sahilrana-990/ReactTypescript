import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { homeReducer } from './reducers/HomeReducer';
import { Provider } from 'react-redux';

const store=configureStore({
  reducer:homeReducer.reducer
})

export type RootType=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);


root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
// #f7edfa


