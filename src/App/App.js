import { renderRoutes } from 'react-router-config';

import './App.css';
import routes from '../routes';

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
