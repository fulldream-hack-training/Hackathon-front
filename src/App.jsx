import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import './global.css'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
