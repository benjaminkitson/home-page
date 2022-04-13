import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './styles/styles.scss';

const app = document.getElementById('app');

const jsx = <Router />;

ReactDOM.render(jsx, app);
