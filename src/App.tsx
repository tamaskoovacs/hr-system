import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes?.map((route, index) => (
          <Route path={route?.path} element={route?.component} key={index} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
