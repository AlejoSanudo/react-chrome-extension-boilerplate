import './itgapp.css';

var Root = require("../../src/apps/app/containers/Root"),
    createStore = require("../../src/apps/app/store/configureStore"),
    React = require('react'),
    ReactDOM = require('react-dom');


chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
