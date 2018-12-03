import App from './index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

var __initialState__ = window.__initialState__

console.log('state: ', window.__initialState__)

console.log('reacdom stuff: ', ReactDOM, ReactDOM.hydrate, typeof ReactDOM.hydrate)

ReactDOM.hydrate(<App data={__initialState__.reviews} productName={__initialState__.productName} />, document.getElementById('reviews'));
// window.Reviews = ReviewsTab;