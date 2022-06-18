import ReactDOM from 'react-dom';
import App from './components/App';

import './style/reset.css';
import './style/style.css';

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);