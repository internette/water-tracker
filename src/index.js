import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createIpc, { send } from 'redux-electron-ipc'
import waterTrackerApp from "./reducers"
import { init, setTopStatus } from "./actions"
import App from './components/app.js'

const ipc = createIpc({
  'send-items': init,
  'send-top-status': setTopStatus
});

const store = createStore(waterTrackerApp, applyMiddleware(ipc));


store.dispatch(send('get-items'));
store.dispatch(send('get-top-status'));

const app = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)