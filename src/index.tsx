import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));