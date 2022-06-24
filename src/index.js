import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './style/reset.css';
import './style/style.css';

const container = document.querySelector(".root");
const root = createRoot(container);
root.render(<App />);