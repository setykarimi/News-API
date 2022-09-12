import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/Layout';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element=<HomePage /> />
          <Route path='/details/:id' element=<DetailsPage /> />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
